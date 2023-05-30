import * as yup from "yup"
export const examValidation=yup.object().shape({
    names:yup.string().required("names is required"),
    price:yup.number().positive().required("price is required"),
    imageURL:yup.string().required("imageURL is required")
})
