import { defineComponent, renderSlot } from "vue";
import "./Title.less";

const neoTitlePoto = {
  level: {
    type: Number,
    default: 2,
  },
};

export interface NeoTitleProps {
  level: number;
}

export default defineComponent({
  name: "neo-title",
  props: neoTitlePoto,
  setup(props: NeoTitleProps, ctx) {
    return () => {
      const level = props.level > 6 ? 6 : props.level;
      const Element: any = "h" + level;
      return (
        <Element
          class={{ "neo-title": true, "neo-title-underline": level > 3 }}
        >
          {renderSlot(ctx.slots, "default")}
        </Element>
      );
    };
  },
});
