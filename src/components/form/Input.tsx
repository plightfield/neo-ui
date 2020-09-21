import { defineComponent } from "vue";

const neoInputPoto = {};

export default defineComponent({
  name: "neo-input",
  setup(props: any, ctx) {
    return () => (
      <div>
        <input {...ctx.attrs} />
      </div>
    );
  },
});
