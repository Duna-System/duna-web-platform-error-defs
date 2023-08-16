import { StatusCodes } from 'http-status-codes';
export interface IError {
    Code: number;
    Message: string;
    Details?: string;
    HTTPStatus: number;
}
export declare const ErrorMessages: {
    Unknown: {
        Code: number;
        Message: string;
        HTTPStatus: number;
    };
    Unauthorized: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    UnauthorizedorInvalid: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    MismatchingTokenParameter: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    InvalidEntity: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    InvalidFormat: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    ConversionInProgress: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    EntityAlreadyExists: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    EntityDoesNotExist: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    QuotaFull: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    ProjectExists: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    ProjectDoesNotExit: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    CancelException: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
};
