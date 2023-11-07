import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComotanmuchachoComponent } from './comotanmuchacho.component';

describe('ComotanmuchachoComponent', () => {
  let component: ComotanmuchachoComponent;
  let fixture: ComponentFixture<ComotanmuchachoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComotanmuchachoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComotanmuchachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
