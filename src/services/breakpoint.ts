import DividerExample from "@/components/content/Divider.example";
import { inject, onBeforeMount, onBeforeUnmount, ref, watch } from "vue";
import { platformToken } from "./globalInit";

const breakPoints = {
  xs: "(max-width: 599.99px)",
  s: "(min-width: 600px) and (max-width: 959.99px)",
  m: "(min-width: 960px) and (max-width: 1279.99px)",
  l: "(min-width: 1280px) and (max-width: 1919.99px)",
  xl: "(min-width: 1920px)",
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)",
};

/**
 * detect sizing status
 *
 * @export
 * @returns
 */
export default function () {
  const span = ref<"xs" | "s" | "m" | "l" | "xl">("m");
  const direction = ref<"portrait" | "landscape">("landscape");

  const queryMedia = (query: string, cb: (val: boolean) => void) => {
    // get media list
    let mql: MediaQueryList | null = null;
    const handler = (e: any) => {
      cb(e.matches);
    };
    if (inject(platformToken)?.BROWSER) {
      mql = window.matchMedia(query);
      cb(mql.matches);
      mql.addEventListener("change", handler);
    }
    onBeforeUnmount(() => {
      if (mql) {
        mql.removeEventListener("change", handler);
      }
    });
  };

  for (let key in breakPoints) {
    queryMedia((breakPoints as any)[key], (e) => {
      if (e) {
        switch (key) {
          case "xs":
          case "s":
          case "m":
          case "l":
          case "xl":
            span.value = key;
            break;
          case "portrait":
          case "landscape":
            direction.value = key;
            break;
        }
      }
    });
  }
  return {
    span,
    direction,
  };
}
