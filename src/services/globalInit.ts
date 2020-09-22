import { provide } from "vue";
import { getFuncToken, platform } from "./toolFuncs";
import breakpoint from "./breakpoint";
import bidirection from "./bidirection";

export const platformToken = getFuncToken(platform);
export const breakpointToken = getFuncToken(breakpoint);
export const bidirectionToken = getFuncToken(bidirection);

export default function () {
  // ! order should be manage carefully
  provide(platformToken, platform());
  provide(breakpointToken, breakpoint());
  provide(bidirectionToken, bidirection());
}
