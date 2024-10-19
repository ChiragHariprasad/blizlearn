import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatMessage } from './chat.model';

@Component({
  selector: 'ns-global-chat',
  templateUrl: './global-chat.component.html',
})
export class GlobalChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessage = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage() {
    if (this.newMessage.trim() && this.chatService.moderateMessage(this.newMessage)) {
      const message: ChatMessage = {
        id: this.messages.length + 1,
        userId: 'user123', // Replace with actual user ID
        username: 'John Doe', // Replace with actual username
        message: this.newMessage,
        timestamp: new Date(),
      };
      this.chatService.sendMessage(message);
      this.newMessage = '';
    }
  }
}
