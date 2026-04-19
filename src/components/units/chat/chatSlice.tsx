import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ChatMessage = Record<string, unknown>;
type ChatRoom = Record<string, unknown> | null;

type ChatState = {
  currentRoom: ChatRoom;
  messagesByRoom: Record<string, ChatMessage[]>;
};

const initialState: ChatState = {
  currentRoom: null,
  messagesByRoom: {},
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    enterRoom: (state, action: PayloadAction<ChatRoom>) => {
      state.currentRoom = action.payload;
    },
    setMessages: (
      state,
      action: PayloadAction<{ roomId: string; messages: ChatMessage[] }>
    ) => {
      const { roomId, messages } = action.payload;
      state.messagesByRoom[roomId] = messages;
    },
    setMesasges: (
      state,
      action: PayloadAction<{ roomId: string; messages: ChatMessage[] }>
    ) => {
      const { roomId, messages } = action.payload;
      state.messagesByRoom[roomId] = messages;
    },
    addMessage: (
      state,
      action: PayloadAction<{ roomId: string; message: ChatMessage }>
    ) => {
      const { roomId, message } = action.payload;
      if (!state.messagesByRoom[roomId]) {
        state.messagesByRoom[roomId] = [];
      }
      state.messagesByRoom[roomId].push(message);
    },
  },
});

export const { enterRoom, setMessages, setMesasges, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
