import {httpServer} from "./http_server/index";
import { wss } from "./socket_server/index";
import WebSocket, {createWebSocketStream} from "ws";
import {middleware} from "./socket_server/middleware";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

httpServer.on('close', () => {
    console.log('HTTP server closed');
})

wss.on('connection', async function connection(ws: WebSocket) {
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
    const wsStream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
    wsStream.on('data', async (data) => {
        const response = await middleware(data.split(' '));
        ws.send(response as String);
    });
});

wss.on('close', () => {
    console.log('WSS server closed!')
})
