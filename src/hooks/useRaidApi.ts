// useRaidApi.js

import RaidApiContext from "@/contexts/RaidApiContext";
import { useContext } from "react";

const useRaidApi = () => {
  const context = useContext(RaidApiContext);

  if (context === undefined) {
    throw new Error("useRaidApi must be used within a RaidApiProvider");
  }

  return context;
};

export default useRaidApi;
