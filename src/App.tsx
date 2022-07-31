import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import { AuthGate } from "./auth/AuthGate";
import { SignIn } from "./auth/SignIn";
import { Channel } from "./components/Server/Channel";
import Sidebar from "./components/Server/Sidebar";
import ServerList from "./components/ServerList";
import { supabase } from "./supabaseClient";

function App() {
  return (
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
            path="/"
            element={
              <AuthGate required>
                <SignedIn />
              </AuthGate>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

function SignedIn() {
  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <div className="flex">
      <ServerList />
      <Sidebar />
      <Channel />
      <button onClick={signout}>Sign out</button>
    </div>
  );
}

export default App;
