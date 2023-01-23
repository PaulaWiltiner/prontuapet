import Joi from 'joi';

export const petSchema = Joi.object({
  petName: Joi.string().min(3).required(),
  RGA: Joi.string().min(9).max(9).required(),
  photo: Joi.string().uri({
    scheme: ["https"],
  }),
  speciesId: Joi.number(),
  genderId:Joi.number(),
  breed: Joi.string().min(3).required(),
  castred: Joi.boolean(),
  coat: Joi.string().min(3).required(),
});

