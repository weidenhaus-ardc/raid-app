import { ServicePointApi } from "@/Generated/Raidv2";

class SingletonServicePointApi {
  private static instance: ServicePointApi | null = null;

  public static getInstance(): ServicePointApi {
    if (SingletonServicePointApi.instance === null) {
      SingletonServicePointApi.instance = new ServicePointApi();
    }
    return SingletonServicePointApi.instance;
  }
}

export default SingletonServicePointApi;
