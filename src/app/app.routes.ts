import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PayrollComponent } from './payroll/payroll.component';
import { GazdalkodjOkosanComponent } from './gazdalkodj-okosan/gazdalkodj-okosan.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CvComponent } from './portfolio/cv/cv.component';
import { PayrollFormComponent } from './payroll/payroll-form/payroll-form.component';
import { PayrollResultComponent } from './payroll/payroll-result/payroll-result.component';

export const routes: Routes = [
  {
    path: 'payroll',
    component: PayrollComponent,
    children: [
      {
        path: '',
        component: PayrollFormComponent,
        pathMatch: 'full',
      },
      {
        path: 'result',
        component: PayrollResultComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'gazdalkodj-okosan',
    component: GazdalkodjOkosanComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
