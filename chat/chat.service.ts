import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from './chat.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messages = new BehaviorSubject<ChatMessage[]>([]);

  getMessages() {
    return this.messages.asObservable();
  }

  sendMessage(message: ChatMessage) {
    const currentMessages = this.messages.value;
    this.messages.next([...currentMessages, message]);
  }

  moderateMessage(message: string): boolean {
    // Implement moderation logic here
    // For now, we'll just check if the message contains any prohibited words
    const prohibitedWords = ['badword1', 'badword2', 'badword3'];
    return !prohibitedWords.some(word => message.toLowerCase().includes(word));
  }
}
