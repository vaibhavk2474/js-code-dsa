import { useEffect, useRef } from "react";

const useFirstRender = (logValue) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    console.log("useFirstRender 2", logValue);

    isFirstRender.current = false;
  }, []);

  console.log("useFirstRender 1", logValue);

  return isFirstRender.current;
};

export default useFirstRender;
