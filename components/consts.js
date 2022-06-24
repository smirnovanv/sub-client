export const cardNumberPattern = /^[0-9]{10}$/;
export const cardNumberErrorText = "Card number consists of 10 digits";

export const datePattern = /^(0?[1-9]|1[0-2])\/(\d{4})$/;
export const dateErrorText = "Please, enter date in format MM/YYYY";

export const cvvPattern = /^[0-9]{3}$/;
export const cvvPaternErrorText = "CVV contains 3 digits";

export const amountPattern = /^[0-9]{1,}$/;
export const amountPaternErrorText = "Amount should contain digits only";