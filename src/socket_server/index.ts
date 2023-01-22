import WebSocket, {createWebSocketStream, WebSocketServer} from 'ws';
import {middleware} from "./middleware";

export async function runSocketServer(PORT: number) {
    const wss = new WebSocketServer({ port: PORT });
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
}
