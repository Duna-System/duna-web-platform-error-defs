/* Error object definition. */

export interface IError {
  errorCode: number;
  errorMessage: string;
  errorDetails?: string;
}

/* General response messages */
export declare const ErrorMessages = {
  // Auth group
  Unauthorized: {
    errorCode: 400,
    errorMessage: 'Unauthorized',
  },
  UnauthorizedorInvalid: {
    errorCode: 401,
    errorMessage: 'Unauthorized.Mismatching or invalid token.',
  },
  MismatchingTokenParameter: {
    errorCode: 402,
    errorMessage: 'Mismatching Token parameters',
  },

  // Entity Group
  InvalidEntity: {
    errorCode: 101,
    errorMessage: 'Invalid Entity Type',
  },
  InvalidFormat: {
    errorCode: 102,
    errorMessage: 'Invalid Format.',
  },
  ConversionInProgress: {
    errorCode: 103,
    errorMessage: 'ConversionStillInProgress',
  },
  EntityAlreadyExists: {
    errorCode: 104,
    errorMessage: 'Entity Already Exists',
  },

  EntityDoesNotExist: {
    errorCode: 105,
    errorMessage: 'Entity does not exist.',
  },

  // Quota
  QuotaFull: {
    errorCode: 200,
    errorMessage: 'Quota is Full',
  },

  // Project group
  ProjectExists: {
    errorCode: 300,
    errorMessage: 'Project already exists',
    errorDetails: '<details>',
  },
  ProjectDoesNotExit: {
    errorCode: 301,
    errorMessage: 'Project does not exist.',
    errorDetails: '<details>',
  },

  // Conversions
  CancelException: {
    errorCode: 500,
    errorMessage: 'Error canceling excpetion.',
    errorDetails: '<details>',
  },
} satisfies Record<string, IError>;