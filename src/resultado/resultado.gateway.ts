import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  
  @WebSocketGateway({ cors: true }) // permite CORS para Angular
  export class ResultadoGateway {
    @WebSocketServer()
    server: Server;
  
    emitirResultados(data: any) {
      this.server.emit('resultados-actualizados', data); // evento que envia al frontend
    }
  }
  