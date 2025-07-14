import { Component, inject } from '@angular/core';
import { PayrollService } from '../payroll.service';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payroll-result',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './payroll-result.component.html',
  styleUrl: './payroll-result.component.scss',
})
export class PayrollResultComponent {
  private readonly payrollService = inject(PayrollService);

  values = this.payrollService.getValues();
}
