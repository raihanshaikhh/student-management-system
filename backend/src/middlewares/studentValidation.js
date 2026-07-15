import { body, validationResult } from 'express-validator';






const studentValidationRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 120 }).withMessage('Name must be between 2 and 120 characters'),
  body('course')
    .trim()
    .notEmpty().withMessage('Course is required')
    .isLength({ max: 120 }).withMessage('Course must be under 120 characters'),
  body('year')
    .notEmpty().withMessage('Year is required')
    .isInt({ min: 1, max: 6 }).withMessage('Year must be a number between 1 and 6'),
  body('date_of_birth')
    .notEmpty().withMessage('Date of birth is required')
    .isISO8601().withMessage('Date of birth must be a valid date (YYYY-MM-DD)')
    .custom((value) => new Date(value) < new Date()).withMessage('Date of birth must be in the past'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('A valid email address is required')
    .normalizeEmail(),
  body('mobile_number')
    .trim()
    .notEmpty().withMessage('Mobile number is required')
    .matches(/^[0-9]{10}$/).withMessage('Mobile number must be exactly 10 digits'),
  body('gender')
    .notEmpty().withMessage('Gender is required')
    .isIn(['Male', 'Female', 'Other']).withMessage('Gender must be Male, Female, or Other'),
  body('address')
    .trim()
    .notEmpty().withMessage('Address is required')
    .isLength({ max: 500 }).withMessage('Address must be under 500 characters'),
];