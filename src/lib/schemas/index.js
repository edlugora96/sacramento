const Joi = require("joi")

const joiCustom = Joi.extend(require("joi-phone-number"))

export const name = joiCustom.string().min(3).required()
export const email = joiCustom
  .string()
  .email({ tlds: { allow: false } })
  .required()
export const message = joiCustom.string().min(3).required()
export const suscribe = joiCustom.boolean()
export const phone = joiCustom
  .string()
  .allow("")
  .phoneNumber({ defaultCountry: "US", format: "international" })

export const contactSchemas = joiCustom.object({
  name,
  email,
  message,
  phone,
  suscribe,
})
