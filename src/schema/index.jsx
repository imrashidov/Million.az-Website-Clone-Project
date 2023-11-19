import * as yup from "yup";

export const basicSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(9, "Telefon nömrəsi: Bu sahənin uzunluğu minimum 12 olmalıdır.")
    .required("Telefon nömrəsi tələb olunur."),
  password: yup.string().required("Parol tələb olunur."),
});
