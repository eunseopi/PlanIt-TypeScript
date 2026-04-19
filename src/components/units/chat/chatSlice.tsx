import { createAction, type ChatMessage, type ChatRoom } from "../../../app/store";

export const enterRoom = createAction<ChatRoom>("chat/enterRoom");
export const setMessages = createAction<{
  roomId: string;
  messages: ChatMessage[];
}>("chat/setMessages");
export const setMesasges = createAction<{
  roomId: string;
  messages: ChatMessage[];
}>("chat/setMesasges");
export const addMessage = createAction<{
  roomId: string;
  message: ChatMessage;
}>("chat/addMessage");
