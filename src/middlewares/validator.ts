// const ApiError = require("../utils/ApiError");
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import Joi, { Schema } from "@hapi/joi";
import _ from "lodash";

const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const validSchema = _.pick(schema, ["params", "query", "body"]);
    const object = _.pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" } })
      .validate(object);

    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(", ");

      return res.status(httpStatus.BAD_REQUEST).send({ message: errorMessage });
    }
    _.assign(req, value);
    return next();
  };

export default validate;
