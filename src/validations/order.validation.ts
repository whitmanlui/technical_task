const Joi = require("@hapi/joi");

const order = {
  body: Joi.object().keys({
    pharmacyId: Joi.string().required(),
    product: Joi.string().required(),
    quantity: Joi.number().required(),
    customerInfo: Joi.object().required().keys({
      custName: Joi.string().required(),
      custAddress: Joi.string().required(),
      custCity: Joi.string().required(),
      custState: Joi.string().required(),
      custZipcode: Joi.string().required(),
      custCountry: Joi.string().required(),
    }),
  }),
};

export default { order };
