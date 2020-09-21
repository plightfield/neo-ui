import { defineComponent, nextTick, onMounted, watch } from "vue";
import feather from "feather-icons";
import "./Icon.less";

export default defineComponent({
  name: "neo-icon",
  props: {
    name: { type: String, default: "circle" },
    infinite: { type: Boolean, default: false },
    rotate: { type: Boolean, default: false },
  },
  setup(props) {
    onMounted(() => {
      feather.replace();
    });
    watch(props, () => {
      nextTick().then(() => {
        feather.replace();
      });
    });
    return () => (
      <span
        class={{
          "neo-icon": true,
          "neo-icon-infinite": props.infinite,
          "neo-icon-rotate": props.rotate,
        }}
      >
        <i data-feather={props.name}></i>
      </span>
    );
  },
});
