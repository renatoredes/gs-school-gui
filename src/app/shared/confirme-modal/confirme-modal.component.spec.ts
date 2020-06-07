import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeModalComponent } from './confirme-modal.component';

describe('ConfirmeModalComponent', () => {
  let component: ConfirmeModalComponent;
  let fixture: ComponentFixture<ConfirmeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
