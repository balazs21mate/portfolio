import { Injectable, signal } from '@angular/core';
import { Values, ValuesToPrint } from './payroll.model';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class PayrollService {
  private readonly values = signal<Values>({
    hourlyRatesValue: 0,
    hoursValue: 8,
    morningDaysValue: 0,
    afternoonDaysValue: 0,
    afternoonShiftPremiumValue: 15,
    nightDaysValue: 0,
    nightShiftPremiumValue: 30,
    ordinaryOvertimeValue: 0,
    weekendOvertimeValue: 0,
    sickPayValue: 0,
    sicknessBenefitValue: 0,
    holidayValue: 0,
    netakValue: false,
    youthAndYoungMotherTaxBenefitValue: false,
    disabilityTaxAllowanceValue: false,
    familyTaxAllowanceValue: false,
    kidsValue: 1,
    kmValue: 0,
  });

  private readonly grossSalary = signal<number>(0);
  private readonly grossSicknessBenefit = signal<number>(0);

  private readonly taxBase = signal<number>(0);
  private readonly reducedTaxBase = signal<number>(0);

  private readonly netSalary = signal<number>(0);

  private readonly valuesToPrint = signal<ValuesToPrint>({
    basicSalary: 0,
    middayWage: 0,
    nightWage: 0,
    ordinaryOvertime: 0,
    weekendOvertime: 0,
    holiday: 0,
    sickPay: 0,
    sicknessBenefit: 0,
    ownVehicleAllowance: 0,
    grossSalary: 0,
    taxBase: 0,
    szja: 0,
    tb: 0,
    deductedDiscounts: 0,
    netSalary: 0,
  });

  setValues(newValues: Values) {
    this.values.set(newValues);
  }

  calculationGrossSalary() {
    const gross = signal<number>(0);

    const hoursWorked = signal<number>(
      (this.values().morningDaysValue +
        this.values().afternoonDaysValue +
        this.values().nightDaysValue) *
        8
    );

    const basicSalaryForHoursWorked = signal<number>(
      this.values().hourlyRatesValue * hoursWorked()
    );

    const middayWage = signal<number>(
      this.values().afternoonDaysValue *
        this.values().hoursValue *
        this.values().hourlyRatesValue *
        (this.values().afternoonShiftPremiumValue / 100)
    );

    const nightWage = signal<number>(
      this.values().nightDaysValue *
        this.values().hoursValue *
        this.values().hourlyRatesValue *
        (this.values().nightShiftPremiumValue / 100)
    );

    const ordinaryOvertime = signal<number>(
      this.values().ordinaryOvertimeValue * this.values().hourlyRatesValue * 1.5
    );
    const weekendOvertime = signal<number>(
      this.values().weekendOvertimeValue * this.values().hourlyRatesValue * 2
    );

    const holiday = signal<number>(
      this.values().holidayValue *
        this.values().hoursValue *
        this.values().hourlyRatesValue
    );

    const sickPay = signal<number>(
      this.values().sickPayValue *
        this.values().hoursValue *
        this.values().hourlyRatesValue *
        0.7
    );

    gross.set(
      basicSalaryForHoursWorked() +
        middayWage() +
        nightWage() +
        ordinaryOvertime() +
        weekendOvertime() +
        holiday() +
        sickPay()
    );

    this.valuesToPrint.update((x) => ({
      ...x,
      basicSalary: basicSalaryForHoursWorked(),
      middayWage: middayWage(),
      nightWage: nightWage(),
      ordinaryOvertime: ordinaryOvertime(),
      weekendOvertime: weekendOvertime(),
      holiday: holiday(),
      sickPay: sickPay(),
      grossSalary: gross(),
    }));

    this.grossSalary.set(gross());
  }

  calculationGrossSickPay() {
    const dailyBase = signal<number>(
      (this.values().hourlyRatesValue * 174) / 30
    );

    const maximumDailyBase = signal<number>((2 * environment.minimumWage) / 30);

    if (dailyBase > maximumDailyBase) {
      this.grossSicknessBenefit.set(
        maximumDailyBase() * 0.6 * this.values().sicknessBenefitValue
      );
    } else {
      this.grossSicknessBenefit.set(
        dailyBase() * 0.6 * this.values().sicknessBenefitValue
      );
    }

    this.taxBase.set(this.grossSalary() + this.grossSicknessBenefit());

    this.valuesToPrint.update((x) => ({
      ...x,
      sicknessBenefit: this.grossSicknessBenefit(),
      taxBase: this.taxBase(),
    }));
  }

  calculationDisconts() {
    this.reducedTaxBase.set(this.taxBase());
    if (this.values().netakValue) {
      this.reducedTaxBase.set(0);
      this.valuesToPrint.update((x) => ({
        ...x,
        deductedDiscounts: this.taxBase() - this.reducedTaxBase(),
      }));
      return undefined;
    }

    if (this.values().youthAndYoungMotherTaxBenefitValue) {
      if (this.reducedTaxBase() <= environment.youthTaxCreditLimit) {
        this.reducedTaxBase.set(0);
        this.valuesToPrint.update((x) => ({
          ...x,
          deductedDiscounts: this.taxBase() - this.reducedTaxBase(),
        }));
        return undefined;
      } else {
        this.reducedTaxBase.set(
          this.reducedTaxBase() - environment.youthTaxCreditLimit
        );
      }
    }

    if (this.values().disabilityTaxAllowanceValue) {
      const discount = signal<number>(environment.minimumWage / 3);
      if (this.reducedTaxBase() - discount() <= 0) {
        this.reducedTaxBase.set(0);
        this.valuesToPrint.update((x) => ({
          ...x,
          deductedDiscounts: this.taxBase() - this.reducedTaxBase(),
        }));
        return undefined;
      } else {
        this.reducedTaxBase.set(this.reducedTaxBase() - discount());
      }
    }

    if (this.values().familyTaxAllowanceValue) {
      const discount = signal<number>(0);
      switch (this.values().kidsValue) {
        case 1:
          discount.set(66670);
          break;
        case 2:
          discount.set(133330 * 2);
          break;
        case 3:
          discount.set(220000 * 3);
          break;
        default:
          break;
      }

      if (this.reducedTaxBase() - discount() <= 0) {
        this.reducedTaxBase.set(0);
        this.valuesToPrint.update((x) => ({
          ...x,
          deductedDiscounts: this.taxBase() - this.reducedTaxBase(),
        }));
        return undefined;
      } else {
        this.reducedTaxBase.set(this.reducedTaxBase() - discount());
      }
    }

    this.valuesToPrint.update((x) => ({
      ...x,
      deductedDiscounts: this.taxBase() - this.reducedTaxBase(),
    }));

    return undefined;
  }

  calculationSzja() {
    const szja = signal<number>(this.reducedTaxBase() * 0.15);

    this.valuesToPrint.update((x) => ({
      ...x,
      szja: szja(),
    }));

    this.netSalary.set(this.taxBase() - szja());
  }

  calculationTb() {
    const tb = signal<number>(this.grossSalary() * 0.185);

    this.netSalary.set(this.netSalary() - tb());

    this.valuesToPrint.update((x) => ({
      ...x,
      tb: tb(),
      netSalary: this.netSalary(),
    }));
  }

  calculationOwnVehicleAllowance() {
    const hoursWorked = signal<number>(
      this.values().morningDaysValue +
        this.values().afternoonDaysValue +
        this.values().nightDaysValue
    );
    const amount = signal<number>(this.values().kmValue * hoursWorked() * 30);

    this.netSalary.set(this.netSalary() + amount());

    this.valuesToPrint.update((x) => ({
      ...x,
      ownVehicleAllowance: amount(),
      netSalary: this.netSalary(),
    }));
  }

  getValues() {
    this.calculationGrossSalary();
    this.calculationGrossSickPay();
    this.calculationDisconts();
    this.calculationSzja();
    this.calculationTb();
    this.calculationOwnVehicleAllowance();

    return this.valuesToPrint();
  }
}
