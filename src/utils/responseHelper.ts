import { ResponseContext } from "../typings";
import { getStatusCode } from "./codeMappings";

export const createResponse = (socket: any) : ResponseContext => {
    return {
        send: function(statusCode: number, headers = {}, body: string) {
            const { code, message } = getStatusCode(statusCode);
            const statusLine = `HTTP/1.1 ${code} ${message}\r\n`;
            
            const defaultHeaders = {
                'Date': new Date().toUTCString(),
                'Connection': 'close',
                'Content-Length': Buffer.byteLength(body),
                ...headers,
            };
            
            // Construct Headers String
            const headersString = Object.entries(defaultHeaders)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\r\n');
                
            const response = `${statusLine}${headersString}\r\n\r\n${body}`;

            socket.write(response);
            socket.end();
            return response;
        },
        json: function (statusCode: number, data: any) {
            const body = JSON.stringify(data);
            const headers = {
                'Content-Type': 'application/json',
            };
            return this.send(statusCode, headers, body);
        }
    }
}
