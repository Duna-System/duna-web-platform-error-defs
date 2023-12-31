/* Error object definition. */
import { StatusCodes } from 'http-status-codes'

export interface IError {
    Code: number
    Message: string
    Details?: string
    HTTPStatus: number
}

/* General response messages */
export const ErrorMessages = {
    Unknown: {
        Code: 999,
        Message: 'Unknown Error',
        HTTPStatus: 999,
    },

    // Entity Group
    InvalidEntity: {
        Code: 101,
        Message: 'Invalid Entity Type',
        HTTPStatus: StatusCodes.BAD_REQUEST,
    },
    InvalidFormat: {
        Code: 102,
        Message: 'Invalid Format.',
        HTTPStatus: StatusCodes.BAD_REQUEST,
    },
    ConversionInProgress: {
        Code: 103,
        Message: 'ConversionStillInProgress',
        HTTPStatus: StatusCodes.ACCEPTED,
    },
    EntityAlreadyExists: {
        Code: 104,
        Message: 'Entity Already Exists',
        HTTPStatus: StatusCodes.CONFLICT,
    },
    EntityDoesNotExist: {
        Code: 105,
        Message: 'Entity does not exist.',
        HTTPStatus: StatusCodes.NOT_FOUND,
    },

    // Quota
    QuotaFull: {
        Code: 200,
        Message: 'Quota is Full',
        HTTPStatus: StatusCodes.REQUEST_TOO_LONG,
    },

    // Project group
    ProjectExists: {
        Code: 300,
        Message: 'Project already exists',
        Details: '<details>',
        HTTPStatus: StatusCodes.CONFLICT,
    },
    ProjectDoesNotExist: {
        Code: 301,
        Message: 'Project does not exist.',
        Details: '<details>',
        HTTPStatus: StatusCodes.NOT_FOUND,
    },

    // Auth group
    Unauthorized: {
        Code: 400,
        Message: 'Unauthorized',
        HTTPStatus: StatusCodes.UNAUTHORIZED,
    },
    UnauthorizedorInvalid: {
        Code: 401,
        Message: 'Unauthorized.Mismatching or invalid token.',
        HTTPStatus: StatusCodes.UNAUTHORIZED,
    },
    MismatchingTokenParameter: {
        Code: 402,
        Message: 'Mismatching Token parameters',
        HTTPStatus: StatusCodes.UNAUTHORIZED,
    },
    IncorrectKey: {
        Code: 403,
        Message: 'Incorrect key or password',
        HTTPStatus: StatusCodes.FORBIDDEN,
    },

    // Generic
    InternalServerError: {
        Code: 500,
        Message: 'Internal Server Error',
        Details: '<details>',
        HTTPStatus: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    ResourceExists: {
        Code: 501,
        Message: 'Resource already exists',
        Details: '<details>',
        HTTPStatus: StatusCodes.CONFLICT,
    },
    ResourceDoesNotExist: {
        Code: 502,
        Message: 'Resource does not exist',
        Details: '<details>',
        HTTPStatus: StatusCodes.NOT_FOUND,
    },
    // Conversions
    CancelException: {
        Code: 503,
        Message: 'Error canceling exception.',
        Details: '<details>',
        HTTPStatus: StatusCodes.INTERNAL_SERVER_ERROR,
    },

    //Database group
    DatabaseOperationError: {
        Code: 601,
        Message: 'Unhandled error during database operation',
        Details: '<details>',
        HTTPStatus: StatusCodes.INTERNAL_SERVER_ERROR,
    },

    //Organization group
    OrganizationExists: {
        Code: 701,
        Message: 'Organzanition already exists',
        Details: '<details>',
        HTTPStatus: StatusCodes.CONFLICT,
    },
    OrganizationDoesNotExist: {
        Code: 702,
        Message: 'Organization does not exist',
        Details: '<details>',
        HTTPStatus: StatusCodes.NOT_FOUND,
    },
    MemberExists: {
        Code: 703,
        Message: 'Organzanition member already exists',
        Details: '<details>',
        HTTPStatus: StatusCodes.CONFLICT,
    },
    MemberDoesNotExist: {
        Code: 704,
        Message: 'Organzanition member does not exist',
        Details: '<details>',
        HTTPStatus: StatusCodes.NOT_FOUND,
    },
    MembersExceed: {
        Code: 705,
        Message: 'Members limit has been reached',
        Details: '<details>',
        HTTPStatus: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    InvalidPermissions: {
        Code: 706,
        Message: 'Member is not allowed to perform this operation',
        Details: '<details>',
        HTTPStatus: StatusCodes.FORBIDDEN,
    },
    InvalidRole: {
        Code: 707,
        Message: 'The role of the request is not valid',
        Details: '<details>',
        HTTPStatus: StatusCodes.INTERNAL_SERVER_ERROR,
    },

    //Users
    UserNotFound: {
        Code: 801,
        Message: 'User not found',
        Details: '<details>',
        HTTPStatus: StatusCodes.NOT_FOUND,
    },
    CannotConnectDatabase: {
        Code: 802,
        Message: 'Cannot connect to database',
        Details: '<details>',
        HTTPStatus: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    // Processing
    ProcessingNotAllowed: {
        Code: 900,
        Message: 'It is not possible to process child entities.',
        HTTPStatus: StatusCodes.METHOD_NOT_ALLOWED,
    },
} satisfies Record<string, IError>
