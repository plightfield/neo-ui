import { defineComponent, renderSlot } from "vue";
import Title from "./Title";
import "./Card.less";

const neoCardPoto = {
  shadow: {
    type: Boolean,
    default: true,
  },
  hover: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
  headerBordered: {
    type: Boolean,
    default: true,
  },
  light: {
    type: Boolean,
    default: false,
  },
};

export interface NeoCardProps {
  shadow: boolean;
  hover: boolean;
  title: string;
  headerBordered: boolean;
  light: boolean;
}

export default defineComponent({
  name: "neo-card",
  props: neoCardPoto,
  setup(props: NeoCardProps, ctx) {
    return () => (
      <div
        class={{
          "neo-card": true,
          "neo-card-hover": props.hover,
          "neo-card-shadow": props.shadow,
          "neo-card-light": props.light,
        }}
      >
        <div
          class={{
            "neo-card-header": true,
            "neo-card-header-bordered": props.headerBordered,
          }}
        >
          {props.title ? (
            <Title level={2}>{props.title}</Title>
          ) : (
            renderSlot(ctx.slots, "title")
          )}
          {renderSlot(ctx.slots, "extra")}
        </div>
        <div class='neo-card-content'>{renderSlot(ctx.slots, "default")}</div>
        <div class='neo-card-footer'>{renderSlot(ctx.slots, "footer")}</div>
      </div>
    );
  },
});
