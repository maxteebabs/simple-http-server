// #### 7. Write a simple HTTP server in nodejs that:
// 1. Uses only the built in nodejs modules
// 2. Does not use the HTTP, HTTP/2 or HTTPS modules
// 3. Implements a GET /timße route that returns the time in JSON
// 4. Implements a GET /data route that returns any data after 1 second
// 5. Uses correct HTTP headers
// 6. Holds up to any industry standard HTTP traffic generator tool

import { routes } from "./routes";
import appContext from "./utils/appContext";
import { getStatusCode } from "./utils/codeMappings";
import { parseRequest } from "./utils/requestHelper";
import { createResponse } from "./utils/responseHelper";
const net = require("node:net");

const PORT = 3000;

const server = net.createServer((socket: any) => {
    socket.on('data', (buffer: Buffer) => {
        const requestString = buffer.toString();
        const request = parseRequest(requestString);
        const response = createResponse(socket);
        
        try{
            const app = appContext(request, response);
            routes(app);
        }catch(error: any) {
            if(error.message === '405') {
                const {code, message} = getStatusCode(405);
                response.json(code, {message});
                return;
            }
            const {code, message} = getStatusCode(500);
            response.json(code, {message});
        }
 
    });
    socket.on('error', console.error);
    
    const get = () => {
        console.log('ppppppp, get')
    }
    
    return {
        get
    }
});

// server.get();/

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})