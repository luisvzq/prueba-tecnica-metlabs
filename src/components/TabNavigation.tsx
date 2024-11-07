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
    <div className="flex gap-6 w-[292px] h-[28px]">
      <button
        className={`text-sm font-dm-sans transition-colors ${
          activeTab === "music"
            ? "text-white"
            : "text-[#6C7275] hover:text-white"
        }`}
        onClick={() => handleTabClick("music")}
      >
        Music
      </button>
      <button
        className={`text-sm font-dm-sans transition-colors ${
          activeTab === "collectibles"
            ? "text-white"
            : "text-[#6C7275] hover:text-white"
        }`}
        onClick={() => handleTabClick("collectibles")}
      >
        Collectibles
      </button>
      <button
        className={`text-sm font-dm-sans transition-colors ${
          activeTab === "utility"
            ? "text-white"
            : "text-[#6C7275] hover:text-white"
        }`}
        onClick={() => handleTabClick("utility")}
      >
        Utility
      </button>
    </div>
  );
};

export default TabNavigation;
