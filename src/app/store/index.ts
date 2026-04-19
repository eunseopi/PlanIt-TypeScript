import { create } from "zustand";

import dummyPostsContents from "../../components/units/community/posts/PostList/dummy/dummyPostItem";
import dummyTravelMates from "../../components/units/community/store/StoreList/dummy/dummyTravelMate";

export type User = Record<string, unknown> | null;
export type PostItem = {
  id?: number | string;
  postId?: number | string;
  isMine?: boolean;
  [key: string]: unknown;
};
export type TravelMate = {
  id?: number | string;
  isMine?: boolean;
  [key: string]: unknown;
};
export type ChatMessage = Record<string, unknown>;
export type ChatRoom = Record<string, unknown> | null;
export type DeleteStatus = "loading" | "success" | "fail" | null;

export type AccountState = {
  user: User;
  isAuthenticated: boolean;
  followers: unknown[];
  following: unknown[];
};

export type CommunityState = {
  currentTab: string;
};

export type PostsState = {
  isMyPostsOnly: boolean;
  isTravelListOnly: boolean;
  isSavedPostsOnly: boolean;
  isDeleteMode: boolean;
  selectedPosts: Array<number | string>;
  selectedTravelMates: Array<number | string>;
  isDeletePopupOpen: boolean;
  isTravelMate: boolean;
  deleteStatus: DeleteStatus;
};

export type ChatState = {
  currentRoom: ChatRoom;
  messagesByRoom: Record<string, ChatMessage[]>;
};

export type RootState = {
  account: AccountState;
  savedPosts: PostItem[];
  travelMates: TravelMate[];
  community: CommunityState;
  Posts: PostsState;
  chat: ChatState;
};

export type StoreAction<TPayload = unknown> = {
  type: string;
  payload?: TPayload;
};

type AppStore = RootState & {
  dispatch: (action: StoreAction) => void;
};

const initialSavedPosts = (dummyPostsContents ?? []) as PostItem[];
const initialTravelMates = (dummyTravelMates ?? []) as TravelMate[];

const getPostId = (post: PostItem) => post.id ?? post.postId;

const initialState: RootState = {
  account: {
    user: null,
    isAuthenticated: false,
    followers: [],
    following: [],
  },
  savedPosts: initialSavedPosts,
  travelMates: initialTravelMates,
  community: {
    currentTab: "post",
  },
  Posts: {
    isMyPostsOnly: false,
    isTravelListOnly: false,
    isSavedPostsOnly: false,
    isDeleteMode: false,
    selectedPosts: [],
    selectedTravelMates: [],
    isDeletePopupOpen: false,
    isTravelMate: false,
    deleteStatus: null,
  },
  chat: {
    currentRoom: null,
    messagesByRoom: {},
  },
};

export const createAction =
  <TPayload = void>(type: string) =>
  (payload?: TPayload): StoreAction<TPayload> => ({
    type,
    payload,
  });

export const useAppStore = create<AppStore>((set) => ({
  ...initialState,
  dispatch: (action) => {
    set((state) => {
      switch (action.type) {
        case "account/setUser":
          return {
            account: {
              ...state.account,
              user: (action.payload ?? null) as User,
              isAuthenticated: true,
            },
          };
        case "account/clearUser":
          return {
            account: {
              user: null,
              isAuthenticated: false,
              followers: [],
              following: [],
            },
          };
        case "account/setFollowers":
          return {
            account: {
              ...state.account,
              followers: (action.payload ?? []) as unknown[],
            },
          };
        case "account/setFollowing":
          return {
            account: {
              ...state.account,
              following: (action.payload ?? []) as unknown[],
            },
          };
        case "community/setTab":
          return {
            community: {
              currentTab: String(action.payload ?? "post"),
            },
          };
        case "savedPosts/removePost":
        case "savedPosts/removedPosts":
          return {
            savedPosts: state.savedPosts.filter(
              (post) => getPostId(post) !== action.payload
            ),
          };
        case "travelMates/removeTravelMate":
          return {
            travelMates: state.travelMates.filter(
              (mate) => mate.id !== action.payload
            ),
          };
        case "Posts/toggleMyPosts": {
          const isMyPostsOnly = !state.Posts.isMyPostsOnly;
          return {
            Posts: {
              ...state.Posts,
              isMyPostsOnly,
              isSavedPostsOnly: isMyPostsOnly
                ? false
                : state.Posts.isSavedPostsOnly,
            },
          };
        }
        case "Posts/toggleTravel": {
          const isTravelMate = !state.Posts.isTravelMate;
          return {
            Posts: {
              ...state.Posts,
              isTravelMate,
              isMyPostsOnly: isTravelMate ? false : state.Posts.isMyPostsOnly,
              isSavedPostsOnly: isTravelMate
                ? false
                : state.Posts.isSavedPostsOnly,
              isTravelListOnly: isTravelMate,
            },
          };
        }
        case "Posts/toggleSavedPosts": {
          const isSavedPostsOnly = !state.Posts.isSavedPostsOnly;
          return {
            Posts: {
              ...state.Posts,
              isSavedPostsOnly,
              isMyPostsOnly: isSavedPostsOnly ? false : state.Posts.isMyPostsOnly,
            },
          };
        }
        case "Posts/resetMyPostsFilter":
          return {
            Posts: {
              ...state.Posts,
              isMyPostsOnly: false,
              isSavedPostsOnly: false,
              isTravelListOnly: false,
              isDeleteMode: false,
              selectedPosts: [],
            },
          };
        case "Posts/toggleDeleteMode":
          return {
            Posts: {
              ...state.Posts,
              isDeleteMode: !state.Posts.isDeleteMode,
            },
          };
        case "Posts/selectPost": {
          const postId = action.payload as number | string | undefined;
          if (!postId) return {};
          return {
            Posts: {
              ...state.Posts,
              selectedPosts: state.Posts.selectedPosts.includes(postId)
                ? state.Posts.selectedPosts.filter((id) => id !== postId)
                : [...state.Posts.selectedPosts, postId],
            },
          };
        }
        case "Posts/selectTravelMate": {
          const travelId = action.payload as number | string | undefined;
          if (!travelId) return {};
          return {
            Posts: {
              ...state.Posts,
              selectedTravelMates: state.Posts.selectedTravelMates.includes(
                travelId
              )
                ? state.Posts.selectedTravelMates.filter((id) => id !== travelId)
                : [...state.Posts.selectedTravelMates, travelId],
            },
          };
        }
        case "Posts/openDeletePopup":
          return { Posts: { ...state.Posts, isDeletePopupOpen: true } };
        case "Posts/closeDeletePopup":
          return { Posts: { ...state.Posts, isDeletePopupOpen: false } };
        case "Posts/deleteSelectedPosts":
          return {
            Posts: {
              ...state.Posts,
              selectedPosts: [],
              isDeleteMode: false,
              isDeletePopupOpen: false,
            },
          };
        case "Posts/deleteSelectedTravelMates":
          return {
            Posts: {
              ...state.Posts,
              selectedTravelMates: [],
              isDeleteMode: false,
              isDeletePopupOpen: false,
            },
          };
        case "Posts/startDelete":
          return { Posts: { ...state.Posts, deleteStatus: "loading" } };
        case "Posts/finishDeleteSuccess":
          return {
            Posts: {
              ...state.Posts,
              deleteStatus: "success",
              selectedPosts: [],
            },
          };
        case "Posts/finishDeleteFail":
          return { Posts: { ...state.Posts, deleteStatus: "fail" } };
        case "Posts/resetDeleteStatus":
          return { Posts: { ...state.Posts, deleteStatus: null } };
        case "chat/enterRoom":
          return {
            chat: {
              ...state.chat,
              currentRoom: (action.payload ?? null) as ChatRoom,
            },
          };
        case "chat/setMessages":
        case "chat/setMesasges": {
          const payload = action.payload as
            | { roomId: string; messages: ChatMessage[] }
            | undefined;
          if (!payload?.roomId) return {};
          return {
            chat: {
              ...state.chat,
              messagesByRoom: {
                ...state.chat.messagesByRoom,
                [payload.roomId]: payload.messages,
              },
            },
          };
        }
        case "chat/addMessage": {
          const payload = action.payload as
            | { roomId: string; message: ChatMessage }
            | undefined;
          if (!payload?.roomId) return {};
          return {
            chat: {
              ...state.chat,
              messagesByRoom: {
                ...state.chat.messagesByRoom,
                [payload.roomId]: [
                  ...(state.chat.messagesByRoom[payload.roomId] ?? []),
                  payload.message,
                ],
              },
            },
          };
        }
        default:
          return {};
      }
    });
  },
}));

export const getAppState = () => useAppStore.getState();
export type AppDispatch = AppStore["dispatch"];

export const store = {
  getState: getAppState,
  dispatch: (action: StoreAction) => useAppStore.getState().dispatch(action),
  subscribe: useAppStore.subscribe,
};
