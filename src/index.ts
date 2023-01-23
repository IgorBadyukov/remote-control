import {runHttpServer} from "./http_server";
import {runSocketServer} from "./socket_server";

const HTTP_PORT = 8181;
const SOCKET_PORT = 8080;

await runHttpServer(HTTP_PORT);
await runSocketServer(SOCKET_PORT);





