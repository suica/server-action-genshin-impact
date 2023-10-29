import { glob } from "glob";
import open from "open";

enum GenshinExecutableNameEnum {
  /**
   * Chinese Version
   */
  YuanShen = "YuanShen.exe",
  /**
   * International Version
   */
  Genshin = "GenshinImpact.exe",
}

/**
 * The Ultimate GenshinImpact Manager
 */
export class GenshinImpactManager {
  /**
   * Trying to locate one possible Genshin Impact executable
   */
  async locateGenshin() {
    const allPatterns = [
      GenshinExecutableNameEnum.YuanShen,
      GenshinExecutableNameEnum.Genshin,
    ].map((x) => `/**/${x}`);
    const result = await glob(allPatterns);
    const foundGenshin = result.at(0);
    if (foundGenshin) {
      return {
        execute: () => open(foundGenshin),
      };
    }
    return;
  }
  /**
   * Start Genshin, if possible
   */
  async start() {
    const genshinExecutor = await this.locateGenshin();
    return genshinExecutor?.execute();
  }
}
