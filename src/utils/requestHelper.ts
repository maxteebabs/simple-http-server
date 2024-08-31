import { Header, RequestContext } from "../typings";

export const parseRequest = (requestString: string): RequestContext => {
    const [firstLine, ...headerLines] = requestString.split('\r\n');
    const [method, path, httpVersion] = firstLine.split(' ');

    const headers: Header = {};
    for (const line of headerLines) {
        if (line === '') break;
        const [key, value] = line.split(': ');
        headers[key] = value;
    }

    return { method, path, httpVersion, headers };
}
