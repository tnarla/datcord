import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import { AuthGate } from "./auth/AuthGate";
import { SignIn } from "./auth/SignIn";
import { Channel } from "./components/Server/Channel";
import Sidebar from "./components/Server/Sidebar";
import ServerList from "./components/ServerList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home";

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
        <Route path="/" element={<Home />} />
        <Route path=":server" element={<Sidebar />}>
          {/* <Route index element={<Navigate to={`/${lastSeenChannel}`} />} /> */}
          <Route path=":channel" element={<Channel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
