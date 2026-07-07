import { useState, useEffect } from "react";
import BackgroundCanvas from "./components/Background/BackgroundCanvas.jsx";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 relative">
      
      <BackgroundCanvas dotGap={30} dotRadius={2} lightColor="#000000" darkColor="white" />
      <div className="relative z-10">
        
        <button 
          onClick={() => setIsDark(!isDark)}
          className="fixed top-6 right-6 z-50 px-5 py-2.5 text-sm font-medium tracking-wide rounded-full cursor-pointer transition-all duration-300 
                     bg-white/30 dark:bg-black/30 
                     backdrop-blur-lg 
                     border border-white/50 dark:border-white/10 
                     shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]
                     text-gray-800 dark:text-gray-200
                     hover:bg-white/40 dark:hover:bg-black/40"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>

      </div>
    </div>
  )
}

export default App;