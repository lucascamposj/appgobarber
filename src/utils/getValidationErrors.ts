import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
export default function getValidationError(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
