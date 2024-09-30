import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const isNearTop = window.scrollY < 40;
      setIsOnTop(isNearTop);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isOnTop };
};

export default useScrollPosition;
