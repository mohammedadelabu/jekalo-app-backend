"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const Joi = require('joi')
    .extend(require('@joi/date'));
const validateUser = (data) => {
    const schema = Joi.object({
        name_prefix: Joi.string(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        username: Joi.string().required(),
        date_of_birth: Joi.date().format('DD/MM/YYYY').required(),
    });
    return schema.validate(data);
};
exports.validateUser = validateUser;
