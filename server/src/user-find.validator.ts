import Joi from "joi";

const userFindValidator = (data: any): Joi.ValidationResult => {
  const email = Joi.string().email();
  const number = Joi.string().length(6).pattern(/^\d+$/);


  const schema = Joi.object({
    email: email.required(),
    number: number.optional().allow(null),
  });

  return schema.validate(data);
};

export default userFindValidator;