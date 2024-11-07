import { useState } from "react";

interface TabNavigationProps {
  onTabChange?: (tab: string) => void;
}

const TabNavigation = ({ onTabChange }: TabNavigationProps) => {
  const [activeTab, setActiveTab] = useState("music");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="flex gap-6 border-b border-gray-800">
      <button
        className={`px-4 py-2 text-sm font-medium ${
          activeTab === "music"
            ? "text-white border-b-2 border-purple-600"
            : "text-gray-400 hover:text-white"
        } transition-colors`}
        onClick={() => handleTabClick("music")}
      >
        Music
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium ${
          activeTab === "collectibles"
            ? "text-white border-b-2 border-purple-600"
            : "text-gray-400 hover:text-white"
        } transition-colors`}
        onClick={() => handleTabClick("collectibles")}
      >
        Collectibles
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium ${
          activeTab === "utility"
            ? "text-white border-b-2 border-purple-600"
            : "text-gray-400 hover:text-white"
        } transition-colors`}
        onClick={() => handleTabClick("utility")}
      >
        Utility
      </button>
    </div>
  );
};

export default TabNavigation;
