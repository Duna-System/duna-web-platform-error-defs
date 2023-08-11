export interface IError {
    errorCode: number;
    errorMessage: string;
    errorDetails?: string;
}
export declare const ErrorMessages: {
    Unauthorized: {
        errorCode: number;
        errorMessage: string;
    };
    UnauthorizedorInvalid: {
        errorCode: number;
        errorMessage: string;
    };
    MismatchingTokenParameter: {
        errorCode: number;
        errorMessage: string;
    };
    InvalidEntity: {
        errorCode: number;
        errorMessage: string;
    };
    InvalidFormat: {
        errorCode: number;
        errorMessage: string;
    };
    ConversionInProgress: {
        errorCode: number;
        errorMessage: string;
    };
    EntityAlreadyExists: {
        errorCode: number;
        errorMessage: string;
    };
    EntityDoesNotExist: {
        errorCode: number;
        errorMessage: string;
    };
    QuotaFull: {
        errorCode: number;
        errorMessage: string;
    };
    ProjectExists: {
        errorCode: number;
        errorMessage: string;
        errorDetails: string;
    };
    ProjectDoesNotExit: {
        errorCode: number;
        errorMessage: string;
        errorDetails: string;
    };
    CancelException: {
        errorCode: number;
        errorMessage: string;
        errorDetails: string;
    };
};
