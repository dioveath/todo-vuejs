import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import * as yup from "yup";

extend("required", required);

extend("title", {
  async validate(value) {
    const yupSchema = yup.string().min(3).max(120).required();
    try {
      await yupSchema.validate(value);
      return true;
    } catch (e) {
      return e.message;
    }
  },
  computesRequired: true,
});

extend("dueDate", {
  async validate(value) {
    const yupSchema = yup.date().required();
    try {
      await yupSchema.validate(value);
      return true;
    } catch (e) {
      return e.message;
    }
  },
  computesRequired: true
});
