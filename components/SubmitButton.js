import { Button } from "@mui/material";
import styles from "../styles/submit-button.module.css";

const SubmitButton = ({children, ...props}) => {
    return ( <Button {...props} className={styles.submitButton} >{children}</Button> );
}
 
export default SubmitButton;