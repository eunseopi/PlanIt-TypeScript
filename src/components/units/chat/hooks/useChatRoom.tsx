import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMessage } from "../chatSlice";
import type { RootState } from "../../../../app/store";

type SendMessagePayload = {
  id?: string | number;
  text: string;
  [key: string]: unknown;
};

export default function useChatRoom(roomId?: string) {
  const dispatch = useDispatch();
  const room = useSelector((state: RootState) => state.chat.currentRoom);
  const messages = useSelector((state: RootState) => {
    if (!roomId) {
      return [];
    }

    return state.chat.messagesByRoom[roomId] ?? [];
  });

  const sendMessage = useCallback(
    (message: SendMessagePayload) => {
      if (!roomId) {
        return;
      }

      dispatch(
        addMessage({
          roomId,
          message,
        })
      );
    },
    [dispatch, roomId]
  );

  return {
    room,
    messages,
    sendMessage,
  };
}
