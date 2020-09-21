import { defineComponent, renderSlot } from "vue";
import "./Space.less";

export default defineComponent({
  name: "neo-space",
  setup(_, ctx) {
    return () => (
      <div class='neo-space'>{renderSlot(ctx.slots, "default")}</div>
    );
  },
});
