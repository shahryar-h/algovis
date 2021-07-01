import Joi from "joi";

export const user_input_validation_schema = Joi.array()
  .required()
  .min(1)
  .items(
    Joi.object().keys({
      userInput: Joi.number().required(),
      sortPosiotion: Joi.number().required(),
      userPosition: Joi.number().required(),
      selected: Joi.boolean().required(),
      sorted: Joi.boolean().required(),
    })
  );
