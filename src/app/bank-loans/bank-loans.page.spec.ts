import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankLoansPage } from './bank-loans.page';

describe('BankLoansPage', () => {
  let component: BankLoansPage;
  let fixture: ComponentFixture<BankLoansPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BankLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
