import { onMounted, ref } from "vue";

export default function () {
  const bodyScrollTop = ref(0);
  let t = 0;
  let top = 0;
  let inited = false;
  function listen() {
    const nowTime = Date.now();
    const nowTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (!inited) {
      inited = true;
    } else {
      const dt = nowTime - t;
      const topOffset = nowTop - top;
      if (topOffset !== 0) {
        bodyScrollTop.value = nowTop;
        console.log(bodyScrollTop.value);
      }
      t = nowTime;
      top = nowTop;
    }
    requestAnimationFrame(listen);
  }
  onMounted(() => {
    // listen();
  });
  return bodyScrollTop;
}
