"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = void 0;
/* Error object definition. */
const http_status_codes_1 = require("http-status-codes");
/* General response messages */
exports.ErrorMessages = {
    Unknown: {
        Code: 999,
        Message: 'Unknown Error',
        HTTPStatus: 999,
    },
    // Auth group
    Unauthorized: {
        Code: 400,
        Message: 'Unauthorized',
        HTTPStatus: http_status_codes_1.StatusCodes.UNAUTHORIZED,
    },
    UnauthorizedorInvalid: {
        Code: 401,
        Message: 'Unauthorized.Mismatching or invalid token.',
        HTTPStatus: http_status_codes_1.StatusCodes.UNAUTHORIZED,
    },
    MismatchingTokenParameter: {
        Code: 402,
        Message: 'Mismatching Token parameters',
        HTTPStatus: http_status_codes_1.StatusCodes.UNAUTHORIZED,
    },
    // Entity Group
    InvalidEntity: {
        Code: 101,
        Message: 'Invalid Entity Type',
        HTTPStatus: http_status_codes_1.StatusCodes.BAD_REQUEST,
    },
    InvalidFormat: {
        Code: 102,
        Message: 'Invalid Format.',
        HTTPStatus: http_status_codes_1.StatusCodes.BAD_REQUEST,
    },
    ConversionInProgress: {
        Code: 103,
        Message: 'ConversionStillInProgress',
        HTTPStatus: http_status_codes_1.StatusCodes.ACCEPTED,
    },
    EntityAlreadyExists: {
        Code: 104,
        Message: 'Entity Already Exists',
        HTTPStatus: http_status_codes_1.StatusCodes.CONFLICT,
    },
    EntityDoesNotExist: {
        Code: 105,
        Message: 'Entity does not exist.',
        HTTPStatus: http_status_codes_1.StatusCodes.NOT_FOUND,
    },
    // Quota
    QuotaFull: {
        Code: 200,
        Message: 'Quota is Full',
        HTTPStatus: http_status_codes_1.StatusCodes.PAYMENT_REQUIRED,
    },
    // Project group
    ProjectExists: {
        Code: 300,
        Message: 'Project already exists',
        Details: '<details>',
        HTTPStatus: http_status_codes_1.StatusCodes.CONFLICT,
    },
    ProjectDoesNotExist: {
        Code: 301,
        Message: 'Project does not exist.',
        Details: '<details>',
        HTTPStatus: http_status_codes_1.StatusCodes.NOT_FOUND,
    },
    // Conversions
    CancelException: {
        Code: 500,
        Message: 'Error canceling exception.',
        Details: '<details>',
        HTTPStatus: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
    },
    // Generic
    InternalServerError: {
        Code: 500,
        Message: 'Internal Server Error',
        Details: '<details>',
        HTTPStatus: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
    },
    ResourceExists: {
        Code: 501,
        Message: 'Resource already exists',
        Details: '<details>',
        HTTPStatus: http_status_codes_1.StatusCodes.CONFLICT,
    },
    ResourceDoesNotExist: {
        Code: 502,
        Message: 'Resource does not exist',
        Details: '<details>',
        HTTPStatus: http_status_codes_1.StatusCodes.NOT_FOUND,
    },
};
