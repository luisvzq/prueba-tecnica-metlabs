import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import PlaylistView from "./components/PlaylistView";
import TabNavigation from "./components/TabNavigation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [currentUser] = useState({
    name: "Usuario Demo",
    avatar: "/avatar.png",
  });

  const handleTabChange = (tab: string) => {
    console.log("Tab changed to:", tab);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D0D12]">
        <Navbar currentUser={currentUser} />
        <main className="mx-auto px-[40px]">
          <HeroBanner />
          <div className="mt-8">
            <div className="flex items-center mb-6 w-[594px] h-[28px] justify-between">
              <h2 className="text-2xl font-bold font-raleway text-white">
                Obras destacadas
              </h2>
              <TabNavigation onTabChange={handleTabChange} />
            </div>
            <div className="mt-6">
              <PlaylistView playlistId="37i9dQZF1DXcBWIGoYBM5M" />
            </div>
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
