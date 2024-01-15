import React from "react";
import * as yup from "yup";

export const emailSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required()
});