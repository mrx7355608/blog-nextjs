import Joi from "joi";

const blogValidationSchema = Joi.object({
    title: Joi.string().min(5).max(100).required().messages({
        "string.base": "Title must be a string.",
        "string.empty": "Title is required.",
        "string.min": "Title must be at least 5 characters long.",
        "string.max":
            "Title must be less than or equal to 100 characters long.",
        "any.required": "Title is required and cannot be null or undefined.",
    }),
    summary: Joi.string().min(10).max(250).required().messages({
        "string.base": "Summary must be a string.",
        "string.empty": "Summary is required.",
        "string.min": "Summary must be at least 10 characters long.",
        "string.max":
            "Summary must be less than or equal to 250 characters long.",
        "any.required": "Summary is required and cannot be null or undefined.",
    }),
    content: Joi.string().required().messages({
        "string.base": "Content must be a string.",
        "string.empty": "Content is required.",
        "any.required": "Content is required and cannot be null or undefined.",
    }),
    tags: Joi.array()
        .items(Joi.string().min(2).max(30).required())
        .min(1)
        .required()
        .messages({
            "array.base": "Tags must be an array.",
            "array.min": "At least one tag is required.",
            "string.base": "Each tag must be a string.",
            "string.min": "Each tag must be at least 2 characters long.",
            "string.max":
                "Each tag must be less than or equal to 30 characters long.",
            "any.required":
                "Tags are required and cannot be null or undefined.",
        }),
    isPublished: Joi.boolean().required().messages({
        "boolean.base": "Publishing status must be a boolean.",
        "any.required":
            "Publishing status is required and cannot be null or undefined.",
    }),
});

export default blogValidationSchema;
