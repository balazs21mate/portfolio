import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from '../../shared/info/info.component';
import { Router, RouterLink } from '@angular/router';
import { PayrollService } from '../payroll.service';
import { Values } from '../payroll.model';

@Component({
  selector: 'app-payroll-form',
  standalone: true,
  imports: [ReactiveFormsModule, InfoComponent, RouterLink],
  templateUrl: './payroll-form.component.html',
  styleUrl: './payroll-form.component.scss',
})
export class PayrollFormComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly payrollService = inject(PayrollService);
  private readonly router = inject(Router);

  messages = signal({
    overtime:
      'A Munka Törvénykönyve szerint a hétköznapi rendkívüli munkavégzés pótléka 50%. A heti pihenőnapon végzett rendkívüli munkavégzés pótléka 100%, amit a munkáltató kiválthat 50% pótlékkal és egy másik pihenőnappal.',
    sickPay:
      'A Munka Törvénykönyve szerint a betegszabadság maximum 15 nap/év, amely időre a munkavállalót a távolléti díj 70%-a illeti meg. A 15. napon felül a munkavállalót táppénz illeti meg, amit az állam fizet. A munkáltató csak folyósítja, ezért nem számít bele a bruttó bérbe.',
    holiday:
      'A Munka Törvénykönyve szerint a fizetett szabadság és a munkanapra eső fizetett ünnep idejére a munkavállalót távolléti díj illeti meg.',
  });

  payrollForm = this.formBuilder.group({
    hourlyRates: null,
    hours: 8,
    morningDays: null,
    afternoonDays: null,
    afternoonShiftPremium: 15,
    nightDays: null,
    nightShiftPremium: 30,
    ordinaryOvertime: null,
    weekendOvertime: null,
    sickPay: null,
    sicknessBenefit: null,
    holiday: null,
    netak: false,
    youthAndYoungMotherTaxBenefit: false,
    disabilityTaxAllowance: false,
    familyTaxAllowance: false,
    kids: null,
    ownVehicleAllowance: false,
    km: null,
  });

  getFormControlValue(formControlName: string) {
    return this.payrollForm.get(formControlName)?.value;
  }

  onSubmit() {
    const values = signal<Values>({
      hourlyRatesValue: Number(this.getFormControlValue('hourlyRates')),
      hoursValue: Number(this.getFormControlValue('hours')),
      morningDaysValue: Number(this.getFormControlValue('morningDays')),
      afternoonDaysValue: Number(this.getFormControlValue('afternoonDays')),
      afternoonShiftPremiumValue: Number(
        this.getFormControlValue('afternoonShiftPremium')
      ),
      nightDaysValue: Number(this.getFormControlValue('nightDays')),
      nightShiftPremiumValue: Number(
        this.getFormControlValue('nightShiftPremium')
      ),
      ordinaryOvertimeValue: Number(
        this.getFormControlValue('ordinaryOvertime')
      ),
      weekendOvertimeValue: Number(this.getFormControlValue('weekendOvertime')),
      sickPayValue: Number(this.getFormControlValue('sickPay')),
      sicknessBenefitValue: Number(this.getFormControlValue('sicknessBenefit')),
      holidayValue: Number(this.getFormControlValue('holiday')),
      netakValue: this.getFormControlValue('netak'),
      youthAndYoungMotherTaxBenefitValue: this.getFormControlValue(
        'youthAndYoungMotherTaxBenefit'
      ),
      disabilityTaxAllowanceValue: this.getFormControlValue(
        'disabilityTaxAllowance'
      ),
      familyTaxAllowanceValue: this.getFormControlValue('familyTaxAllowance'),
      kidsValue: Number(this.getFormControlValue('kids')),
      kmValue: Number(this.getFormControlValue('km')),
    });

    this.payrollService.setValues(values());

    this.payrollForm.reset();

    this.router.navigate(['/payroll/result']);
  }
}
