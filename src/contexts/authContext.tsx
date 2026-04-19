import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authApi } from "../api/auth";
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
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authApi.me();
        dispatch(setUser(response?.data ?? response));
      } catch {
        dispatch(clearUser());
      } finally {
        setAuthChecked(true);
      }
    };

    checkAuth();
  }, [dispatch]);

  const login = async (email: string, password: string) => {
    try {
      await authApi.login({ email, password });
      const response = await authApi.me();
      dispatch(setUser(response?.data ?? response));
      navigate("/welcome");
    } catch (error) {
      console.error("로그인 실패:", error);
      throw new Error("로그인 실패");
    }
  };

  const logout = () => {
    dispatch(clearUser());
    navigate("/splash");
  };

  const value = useMemo(
    () => ({ user, isAuthenticated, authChecked, login, logout }),
    [user, isAuthenticated, authChecked]
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
