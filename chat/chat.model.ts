export interface ChatMessage {
  id: number;
  userId: string;
  username: string;
  message: string;
  timestamp: Date;
  imageUrl?: string;
}
