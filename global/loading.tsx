import { useState } from "react";

const GlobalLoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);
  // global.setIsLoading = setIsLoading;
  return isLoading ? (
    <div
      style={{ position: "fixed", top: "300px", left: "40%", color: "black" }}
    >
      {/* <LoadingSpinner /> */}
    </div>
  ) : null;
};

export default GlobalLoadingSpinner;
