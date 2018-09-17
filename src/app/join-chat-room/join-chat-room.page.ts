import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { SocketConnectionService } from '../services/socket-connection.service';

@Component({
  selector: 'app-join-chat-room',
  templateUrl: './join-chat-room.page.html',
  styleUrls: ['./join-chat-room.page.scss'],
})
export class JoinChatRoomPage implements OnInit {
  RoomList: Array<any>;
  roomName: string;
  constructor(
    public params: NavParams,
    public modalController: ModalController,
    public socketConnection: SocketConnectionService
  ) { }

  ngOnInit() {
    console.log(this.params.get('chatName'));
    this.initialize();
  }

  initialize() {
    this.RoomList = [];
    this.roomName = '';
    this.getRoomList();
  }

  getRoomList() {
    // this.RoomList = this.socketConnection.getRoomList();
    console.log(this.socketConnection.getRoomList());
  }

  creatRoom() {
    if (this.roomName.length < 1) {
      alert('방이름을 입력하세요.');
    } else {
      this.socketConnection.createRoom(this.roomName);
    }
  }
}
