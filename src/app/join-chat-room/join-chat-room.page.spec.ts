import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinChatRoomPage } from './join-chat-room.page';

describe('JoinChatRoomPage', () => {
  let component: JoinChatRoomPage;
  let fixture: ComponentFixture<JoinChatRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinChatRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinChatRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
