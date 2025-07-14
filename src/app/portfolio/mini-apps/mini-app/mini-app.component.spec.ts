import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAppComponent } from './mini-app.component';

describe('MiniAppComponent', () => {
  let component: MiniAppComponent;
  let fixture: ComponentFixture<MiniAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
