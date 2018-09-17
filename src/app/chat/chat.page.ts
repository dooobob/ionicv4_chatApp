import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JoinChatRoomPage } from '../join-chat-room/join-chat-room.page';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chatInit = false;
  chatName = '';
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  joinRoom() {
    if (this.chatName.length < 1) {
      alert('이름을 입력하세요');
    } else {
      this.showRoomListModal()
        .then(() => {
          this.chatInit = true;
        });
    }
  }

  async showRoomListModal() {
    console.log('chatName: ' + this.chatName);
    const modal = await this.modalController.create({
      component: JoinChatRoomPage,
      componentProps: { chatName: this.chatName }
    });
    return await modal.present();
  }

}
