import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JoinChatRoomPage } from './join-chat-room.page';

const routes: Routes = [
  {
    path: '',
    component: JoinChatRoomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JoinChatRoomPage]
})
export class JoinChatRoomPageModule {}
