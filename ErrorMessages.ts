/* Error object definition. */
import {StatusCodes} from 'http-status-codes'

export interface IError {
  Code: number;
  Message: string;
  Details?: string;
  HTTPStatus: number;
}

/* General response messages */
export const ErrorMessages = {
  Unknown: {
    Code: 999,
    Message: 'Unknown Error',
    HTTPStatus: 999
  },
  // Auth group
  Unauthorized: {
    Code: 400,
    Message: 'Unauthorized',
    HTTPStatus: StatusCodes.UNAUTHORIZED
  },
  UnauthorizedorInvalid: {
    Code: 401,
    Message: 'Unauthorized.Mismatching or invalid token.',
    HTTPStatus: StatusCodes.UNAUTHORIZED
  },
  MismatchingTokenParameter: {
    Code: 402,
    Message: 'Mismatching Token parameters',
    HTTPStatus: StatusCodes.UNAUTHORIZED
  },

  // Entity Group
  InvalidEntity: {
    Code: 101,
    Message: 'Invalid Entity Type',
    HTTPStatus: StatusCodes.BAD_REQUEST
  },
  InvalidFormat: {
    Code: 102,
    Message: 'Invalid Format.',
    HTTPStatus: StatusCodes.BAD_REQUEST
  },
  ConversionInProgress: {
    Code: 103,
    Message: 'ConversionStillInProgress',
    HTTPStatus: StatusCodes.ACCEPTED
  },
  EntityAlreadyExists: {
    Code: 104,
    Message: 'Entity Already Exists',
    HTTPStatus: StatusCodes.CONFLICT
  },

  EntityDoesNotExist: {
    Code: 105,
    Message: 'Entity does not exist.',
    HTTPStatus: StatusCodes.NOT_FOUND
  },

  // Quota
  QuotaFull: {
    Code: 200,
    Message: 'Quota is Full',
    HTTPStatus: StatusCodes.PAYMENT_REQUIRED
  },

  // Project group
  ProjectExists: {
    Code: 300,
    Message: 'Project already exists',
    Details: '<details>',
    HTTPStatus: StatusCodes.CONFLICT
  },
  ProjectDoesNotExist: {
    Code: 301,
    Message: 'Project does not exist.',
    Details: '<details>',
    HTTPStatus: StatusCodes.NOT_FOUND
  },

  // Conversions
  CancelException: {
    Code: 500,
    Message: 'Error canceling exception.',
    Details: '<details>',
    HTTPStatus: StatusCodes.INTERNAL_SERVER_ERROR
  },

  // Generic
  InternalServerError: {
    Code: 500,
    Message: 'Internal Server Error',
    Details: '<details>',
    HTTPStatus: StatusCodes.INTERNAL_SERVER_ERROR
  }
} satisfies Record<string, IError>;