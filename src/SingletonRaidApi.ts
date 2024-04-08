import { RaidApi } from "@/Generated/Raidv2";

class SingletonRaidApi {
  private static instance: RaidApi | null = null;

  public static getInstance(): RaidApi {
    if (SingletonRaidApi.instance === null) {
      SingletonRaidApi.instance = new RaidApi();
    }
    return SingletonRaidApi.instance;
  }
}

export default SingletonRaidApi;
