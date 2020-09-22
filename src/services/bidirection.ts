import { inject, onMounted, ref, watch } from "vue";
import { platformToken } from "./globalInit";

/**
 * rtl or ltr content directions
 *
 * @export
 * @returns
 */
export default function () {
  if (!inject(platformToken)?.BROWSER) return;
  const bodyDir = document.body ? document.body.dir : null;
  const htmlDir = document.documentElement
    ? document.documentElement.dir
    : null;
  const direction = ref<string>("ltr");
  // initialize direaction information
  direction.value = bodyDir || htmlDir || "ltr";
  watch(direction, (val) => {
    if (document.body) {
      document.body.dir = val;
    } else if (document.documentElement) {
      document.documentElement.dir = val;
    }
  });
  return direction;
}
