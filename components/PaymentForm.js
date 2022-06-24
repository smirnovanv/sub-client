import { Paper, Button } from "@mui/material";
import FormField from "./FormField";
import { useState } from "react";
import {
  cardNumberPattern,
  cardNumberErrorText,
  datePattern,
  dateErrorText,
  cvvPattern,
  cvvPaternErrorText,
  amountPattern,
  amountPaternErrorText,
} from "./consts";
import styles from "../styles/payment-form.module.scss";

const PaymentForm = () => {
  const [formStatus, setFormStatus] = useState({
    cardNumber: false,
    expirationDate: false,
    cvv: false,
    amount: false,
  });

  const isDisabled = Object.values(formStatus).some((value) => !value);

  const handleErrorState = (name, status) => {
    setFormStatus({ ...formStatus, [name]: status });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const request = {
      CardNumber: e.target[0].value,
      ExpDate: e.target[2].value,
      Cvv: e.target[4].value,
      Amount: e.target[6].value,
    };
    fetch("http://localhost:5000/card", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((res) => res.json())
      .then((result) => console.log("result", result));
  };

  return (
    <Paper className={styles.cardForm}>
      <form onSubmit={onSubmit}>
        <FormField
          name="cardNumber"
          label={"Card Number"}
          errorText={cardNumberErrorText}
          pattern={cardNumberPattern}
          handleErrorState={handleErrorState}
        />
        <FormField
          name="expirationDate"
          label={"Expiration Date"}
          errorText={dateErrorText}
          pattern={datePattern}
          handleErrorState={handleErrorState}
        />
        <FormField
          name="cvv"
          label={"CVV"}
          errorText={cvvPaternErrorText}
          pattern={cvvPattern}
          handleErrorState={handleErrorState}
        />
        <FormField
          name="amount"
          label={"Amount"}
          errorText={amountPaternErrorText}
          pattern={amountPattern}
          handleErrorState={handleErrorState}
        />
        <Button
          disabled={isDisabled}
          type="submit"
          className={styles.purchaseButton}
        >
          Оплатить
        </Button>
      </form>
    </Paper>
  );
};

export default PaymentForm;
