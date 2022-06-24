import { useState } from "react";
import { TextField } from "@mui/material";
import styles from "../styles/form-field.module.scss";

const FormField = ({ label, errorText, pattern, handleErrorState, name }) => {
  const [error, setError] = useState(false);

  const onChange = (e) => {
    if (e.target.value.match(pattern)) {
      handleErrorState(name, true);
      setError(false);
    } else {
      handleErrorState(name, false);
      setError(true);
    }
  };

  return (
    <TextField
      className={styles.formField}
      required
      variant="outlined"
      label={label}
      error={error}
      helperText={error ? errorText : " "}
      onChange={(e) => onChange(e)}
      InputProps={{
        style: { boxShadow: '0 0 10px #D3D3D3' },
    }}
    />
  );
};

export default FormField;
