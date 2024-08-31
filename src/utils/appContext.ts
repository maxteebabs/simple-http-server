import { RequestContext, ResponseContext } from "../typings";

const appContext = (request: RequestContext, response: ResponseContext) : any => {
    if(!["GET", "POST", "PUT", "DELETE"].includes(request.method)) {
        throw new Error('405');
    }
    // implement get method
    const _get = (path: string, callback: (req: RequestContext, res: ResponseContext) => any )  => {
        if(request.path === path) {
            return callback(request, response);
        }
    }
    return {
        get: _get
    }
}
export default appContext;