import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider, { AuthContext } from "./auth/AuthProvider";
import { AuthGate } from "./auth/AuthGate";
import { SignIn } from "./auth/SignIn";
import { Channel } from "./components/Server/Channel";
import Sidebar from "./components/Server/Sidebar";
import ServerList from "./components/ServerList";
import { supabase } from "./supabaseClient";
import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/signin"
              element={
                <AuthGate notRequired>
                  <SignIn />
                </AuthGate>
              }
            />
            <Route
              path="/*"
              element={
                <AuthGate required>
                  <SignedIn />
                </AuthGate>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

function SignedIn() {
  return (
    <div className="flex">
      <ServerList />
      <Routes>
        <Route path=":server" element={<Sidebar />}>
          <Route path=":channel" element={<Channel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
