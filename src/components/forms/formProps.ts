import { FormEventHandler } from "react";

export default interface FormProps {
  handleSubmit: FormEventHandler;
  handleChange: FormEventHandler;
  setFieldTouched: (field: string, value: any, shouldValidate?: boolean) => void;
  isValid: boolean
  dirty: boolean
  touched: { [field: string]: boolean }
  values: { [field: string]: any };
  errors: { [field: string]: any };
  checked: boolean
}
