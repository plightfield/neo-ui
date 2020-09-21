import { computed, defineComponent, inject, provide, renderSlot } from "vue";

export const Row = defineComponent({
  name: "neo-row",
  props: {
    gutter: {
      type: String,
      default: "0px",
    },
    num: {
      type: Number,
      default: 12,
    },
  },
  setup(props, ctx) {
    provide("neo-row-props", props);
    return () => (
      <div style={{ position: "relative", margin: "0 -" + props.gutter }}>
        {renderSlot(ctx.slots, "default")}
      </div>
    );
  },
});

export const Col = defineComponent({
  name: "neo-col",
  props: {
    span: {
      type: Number,
      default: 1,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    const rowProps: any = inject("neo-row-props");
    return () => (
      <div
        style={{
          display: "inline-block",
          width: (100 / rowProps.num) * (props.offset + props.span) + "%",
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: (props.offset / (props.offset + props.span)) * 100 + "%",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: (props.span / (props.offset + props.span)) * 100 + "%",
            boxSizing: "border-box",
            padding: "0 " + rowProps.gutter,
          }}
        >
          {renderSlot(ctx.slots, "default")}
        </div>
      </div>
    );
  },
});
