import Joi from "joi";

export default class ValidationSchema {
  FirstHolderSchema = Joi.object({
    pancardName: Joi.string().trim().required().messages({
      "string.empty": "Name should be required",
    }),
    dateOfBirth: Joi.date().iso().required().messages({
      "date.base": "Date of birth must be a valid ISO date",
    }),
    placeOfBirth: Joi.string().trim().required(),
    residentialStatus: Joi.string()
      .valid("Resident Indian", "NRI")
      .required()
      .messages({
        "any.only": "Residential Status must be 'Resident Indian' or 'NRI'",
      }),
    motherName: Joi.string().trim().required(),
    panNumber: Joi.string()
      .trim()
      .regex(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)
      .required()
      .messages({
        "string.pattern.base": "PAN Number must follow the format ABCDE1234F",
      }),
    emailAddress: Joi.string().email().required(),
    mobileNumber: Joi.string()
      .trim()
      .pattern(/^[6-9]\d{9}$/)
      .required()
      .messages({
        "string.pattern.base": "Mobile number must be a valid 10-digit number",
      }),
    postalAddress: Joi.string().trim().required(),
    grossAnnualIncome: Joi.number().positive().required(),
    occupation: Joi.string().trim().required(),
    bankDetailsId: Joi.number().integer().optional(),
  });

  BankDetailsSchema = Joi.object({
    bankName: Joi.string().trim().required(),
    accountNumber: Joi.string()
      .trim()
      .pattern(/^\d{9,18}$/)
      .required()
      .messages({
        "string.pattern.base": "Account number must be between 9 to 18 digits",
      }),
    accountType: Joi.string().valid("Savings", "Current", "Fixed").required(),
    branchName: Joi.string().trim().required(),
    ifscCode: Joi.string()
      .trim()
      .pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)
      .required()
      .messages({
        "string.pattern.base": "IFSC Code must follow format ABCD0123456",
      }),
    micrCode: Joi.string()
      .trim()
      .pattern(/^\d{9}$/)
      .required()
      .messages({
        "string.pattern.base": "MICR Code must be a 9-digit number",
      }),
    holderId: Joi.number().integer().required(),
  });

  NomineeSchema = Joi.object({
    nomineeName: Joi.string().trim().required(),
    nomineeDOB: Joi.date().iso().required(),
    nomineePAN: Joi.string()
      .trim()
      .regex(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)
      .required()
      .messages({
        "string.pattern.base": "Nominee PAN must follow the format ABCDE1234F",
      }),
    nomineeRelationship: Joi.string().trim().required(),
    nomineeAddress: Joi.string().trim().required(),
    nomineeAllocation: Joi.number().min(0).max(100).required().messages({
      "number.base": "Allocation must be a number between 0 and 100",
    }),
    holderId: Joi.number().integer().required(),
  });
}
