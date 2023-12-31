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
    ProjectDoesNotExist: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
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
    IncorrectKey: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
    InternalServerError: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    ResourceExists: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    ResourceDoesNotExist: {
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
    DatabaseOperationError: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    OrganizationExists: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    OrganizationDoesNotExist: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    MemberExists: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    MemberDoesNotExist: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    MembersExceed: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    InvalidPermissions: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    InvalidRole: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    UserNotFound: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    CannotConnectDatabase: {
        Code: number;
        Message: string;
        Details: string;
        HTTPStatus: StatusCodes;
    };
    ProcessingNotAllowed: {
        Code: number;
        Message: string;
        HTTPStatus: StatusCodes;
    };
};
