const Joi = require('joi')
.extend(require('@joi/date'));
// import Joi from 'joi';
import { People } from '../routes/interface';

export const validateUser = (data: People) => {
    const schema = Joi.object({
        name_prefix: Joi.string(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        username: Joi.string().required(),
        date_of_birth: Joi.date().format('DD/MM/YYYY').required(),
    });
    return schema.validate(data);
}
