import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "@/app/store/reactReduxCompat";

import {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from "../api/authQueries";
import { selectIsAuthenticated, selectUser } from "../store/account/accountSelector";
import { clearUser, setUser } from "../store/account/accountSlice";

type AuthContextValue = {
  user: unknown;
  isAuthenticated: boolean;
  authChecked: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const meQuery = useMeQuery();
  const loginMutation = useLoginMutation();
  const logoutMutation = useLogoutMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (meQuery.data) {
      dispatch(setUser(meQuery.data));
      return;
    }

    if (meQuery.isError) {
      dispatch(clearUser());
    }
  }, [dispatch, meQuery.data, meQuery.isError]);

  const login = async (email: string, password: string) => {
    try {
      const response = await loginMutation.mutateAsync({ email, password });
      dispatch(setUser(response));
      navigate("/welcome");
    } catch (error) {
      console.error("로그인 실패:", error);
      throw new Error("로그인 실패");
    }
  };

  const logout = () => {
    logoutMutation.mutate();
    dispatch(clearUser());
    navigate("/splash");
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      authChecked: meQuery.isFetched,
      login,
      logout,
    }),
    [user, isAuthenticated, meQuery.isFetched]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
