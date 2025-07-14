export interface Values {
  hourlyRatesValue: number;
  hoursValue: number;
  morningDaysValue: number;
  afternoonDaysValue: number;
  afternoonShiftPremiumValue: number;
  nightDaysValue: number;
  nightShiftPremiumValue: number;
  ordinaryOvertimeValue: number;
  weekendOvertimeValue: number;
  sickPayValue: number;
  sicknessBenefitValue: number;
  holidayValue: number;
  netakValue: boolean;
  youthAndYoungMotherTaxBenefitValue: boolean;
  disabilityTaxAllowanceValue: boolean;
  familyTaxAllowanceValue: boolean;
  kidsValue: number;
  kmValue: number;
}

export interface ValuesToPrint {
  basicSalary: number;
  middayWage: number;
  nightWage: number;
  ordinaryOvertime: number;
  weekendOvertime: number;
  holiday: number;
  sickPay: number;
  sicknessBenefit: number;
  ownVehicleAllowance: number;
  grossSalary: number;
  taxBase: number;
  szja: number;
  tb: number;
  deductedDiscounts: number;
  netSalary: number;
}
