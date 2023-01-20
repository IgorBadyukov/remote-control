import { WebSocketServer } from 'ws';

const SOCKET_PORT = 8080;

export const wss = new WebSocketServer({ port: SOCKET_PORT });
