import { useState } from "react";
import { Channel } from "./components/Server/Channel";
import Sidebar from "./components/Server/Sidebar";
import ServerList from "./components/ServerList";

function App() {
  return (
    <div className="flex">
      <ServerList />
      <Sidebar />
      <Channel />
    </div>
  );
}


export default App;
