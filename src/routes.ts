import { ApplicationContext, RequestContext, ResponseContext } from "./typings";

export const routes = (app: ApplicationContext) => {
    app.get('/time', (req: RequestContext, res: ResponseContext) => {
        const currentTime = { time: new Date().toISOString() };
        return res.json(200, currentTime);
    });
    
    app.get('/data', async (req: RequestContext, res: ResponseContext) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = { data: 'Here is some data after 1 second' };
        return res.json(200, data);
    });
}

