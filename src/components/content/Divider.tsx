import { defineComponent, renderSlot } from "vue";
import "./Divider.less";

const neoDividerPoto = {
  type: {
    type: String,
    default: "herizon",
  },
  placement: {
    type: String,
    default: "center",
  },
};

export interface NeoDividerProps {
  type: string;
  placement: string;
}

export default defineComponent({
  name: "neo-divider",
  props: neoDividerPoto,
  setup(props: NeoDividerProps, ctx) {
    if (props.type === "vertical") {
      return () => <span class='neo-divider-vertical'> | </span>;
    }
    return () => (
      <div class='neo-divider-herizon'>
        {ctx.slots.default ? (
          <span
            class={{
              "neo-divider-herizon-text": true,
              "neo-divider-center": props.placement === "center",
              "neo-divider-left": props.placement === "left",
              "neo-divider-right": props.placement === "right",
            }}
          >
            {renderSlot(ctx.slots, "default")}
          </span>
        ) : null}
      </div>
    );
  },
});
