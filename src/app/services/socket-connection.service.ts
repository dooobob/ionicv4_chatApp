import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketConnectionService {

  constructor(public socket: Socket) {
    this.socket.on('createRoomResult', (data) => {

    });
  }

  getRoomList() {
    return this.socket.emit('getRoomList');
  }

  setName(name: string) {
    this.socket.emit('setName', name);
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  getMessage() {
    // return this.socket
    //   .fromEvent('message')
    //   .map(data => data.msg);
  }

  createRoom(roomName: string) {
    this.socket.emit('createRoom', roomName);
  }

  // this.socket.on('createRoomResult', (data) => {

  // });
}
