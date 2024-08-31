import { Code, StatusCode } from "../typings/index";
export const codeMappings: Code = {
    200: 'OK',
    201: 'Created',
    204: 'No Content',
    400: 'Bad Request',
    401: 'Unauthorized', 
    403: 'Forbidden', 
    404: 'Not Found', 
    405: 'Method Not Allowed', 
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
};

export const getStatusCode = (code: number): StatusCode => {
    if(!codeMappings[code]) {
        throw Error("Invalid status code code");
    }
    return {code, message: codeMappings[code]};
}