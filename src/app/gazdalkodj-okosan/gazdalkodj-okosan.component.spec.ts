import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazdalkodjOkosanComponent } from './gazdalkodj-okosan.component';

describe('GazdalkodjOkosanComponent', () => {
  let component: GazdalkodjOkosanComponent;
  let fixture: ComponentFixture<GazdalkodjOkosanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GazdalkodjOkosanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GazdalkodjOkosanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
