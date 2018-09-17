import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ScanPageModule } from '../scan/scan.module';
import { ChatPageModule } from '../chat/chat.module';
import { HomePageModule } from '../home/home.module';
import { JoinChatRoomPageModule } from '../join-chat-room/join-chat-room.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ScanPageModule,
    ChatPageModule,
    JoinChatRoomPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
