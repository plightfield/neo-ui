import { defineComponent, ref, renderSlot } from "vue";
import "./Button.less";

const neoButtonPoto = {
  htmlType: { type: String, default: "button" },
  type: { type: String, default: "default" },
  size: { type: String, default: "normal" },
  icon: { type: String, default: "circle" },
  long: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
};

export interface NeoButtonProps {
  htmlType: string;
  type: string;
  size: string;
  icon: string;
  long: boolean;
  disabled: boolean;
  loading: boolean;
}

export default defineComponent({
  name: "neo-button",
  props: neoButtonPoto,
  setup(props: NeoButtonProps, ctx) {
    const clicked = ref(false);
    return () => (
      <div
        class={{
          "neo-button": true,
          "neo-button-default": props.type === "default",
          "neo-button-primary": props.type === "primary",
          "neo-button-success": props.type === "success",
          "neo-button-error": props.type === "error",
          "neo-button-normal": props.size === "normal",
          "neo-button-small": props.size === "small",
          "neo-button-large": props.size === "large",
          "neo-button-disabled": props.disabled,
          "neo-button-wave": clicked.value,
          "neo-button-long": props.long,
        }}
        onClick={() => {
          clicked.value = true;
          setTimeout(() => {
            clicked.value = false;
          }, 300);
        }}
      >
        <button style='display:none' type={props.htmlType as any}></button>
        {renderSlot(ctx.slots, "default")}
      </div>
    );
  },
});
