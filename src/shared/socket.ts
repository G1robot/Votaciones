import { Injectable } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway(
    88,{
        cors:{
            origin:'*'
        }
    }
)
@Injectable()
export class Socket implements OnGatewayConnection, OnGatewayDisconnect {    
    @WebSocketServer()
    server: Server;
    handleConnection(client: any, ...args: any[]) {
        console.log('Client connected:', client);
    }
    handleDisconnect(client: any) {
        console.log('Adios hija:', client);
    }
    updateProduct() {
        this.server.emit('actualizar-producto', {estado: true, });
    }
}