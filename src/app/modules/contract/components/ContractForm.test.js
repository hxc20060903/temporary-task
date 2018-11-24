import { ContractFormValidator } from './ContractForm';

it('validates surname', () => {
  ['Huang', 'Chan', 'Stark'].forEach((surname) => {
    expect(ContractFormValidator.validateSurname(surname)).toBe(null);
  });
  [100, null, ''].forEach((invalid) => {
    expect(ContractFormValidator.validateSurname(invalid)).toBeTruthy();
  });
});

it('validates username', () => {
  ['Huang', 'Chan', 'Stark'].forEach((surname) => {
    expect(ContractFormValidator.validateUsername(surname)).toBe(null);
  });
  [100, null, ''].forEach((invalid) => {
    expect(ContractFormValidator.validateUsername(invalid)).toBeTruthy();
  });
});

it('validates amount', () => {
  [100, 0.5, 12.5, '500'].forEach((invalid) => {
    expect(ContractFormValidator.validateAmount(invalid)).toBe(null);
  });
  [-500, null, 'what'].forEach((invalid) => {
    expect(ContractFormValidator.validateAmount(invalid)).toBeTruthy();
  });
});

it('validates currency', () => {
  // @TODO adds strict validation, or change the UI
  ['JPY', 'NEEDS_FURTHER_DEFINITION'].forEach((invalid) => {
    expect(ContractFormValidator.validateCurrency(invalid)).toBe(null);
  });
});
