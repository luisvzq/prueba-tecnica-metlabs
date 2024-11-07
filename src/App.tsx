import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
        <main className="max-w-7xl mx-auto px-6 py-8">
          <HeroBanner />
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Obras destacadas
            </h2>
            <TabNavigation onTabChange={handleTabChange} />
            <div className="mt-6">
              <PlaylistView playlistId="37i9dQZF1DXcBWIGoYBM5M" />
            </div>
          </div>
        </main>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
