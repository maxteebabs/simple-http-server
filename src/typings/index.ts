export type Code = {
    [key: number]: string
}

export type StatusCode = {
    code: number,
    message: string
}

export type Header = {
    [key: string] : string;
}

export type RequestContext =  {
    method: string,
    path: string,
    httpVersion: string,
    headers: {[key: string]: string}
}

export type ResponseContext =  {
    send: (statusCode: number, headers: Header, body: string) => void,
    json: (statusCode: number, data: any) => void
}

export type ApplicationContext =  {
    get: (path: string, callback: (req: RequestContext, res: ResponseContext) => any) => void
    post?: (path: string, callback: (req: RequestContext, res: ResponseContext) => any) => void
    patch?: (path: string, callback: (req: RequestContext, res: ResponseContext) => any) => void
    put?: (path: string, callback: (req: RequestContext, res: ResponseContext) => any) => void
    delete?: (path: string, callback: (req: RequestContext, res: ResponseContext) => any) => void
}