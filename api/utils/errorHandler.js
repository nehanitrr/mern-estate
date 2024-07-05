export const errorHandles = (code , message) => {
    const error = new Error();
    error.message = message;
    error.code = code;
    return error;
}