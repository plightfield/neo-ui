import { defineComponent } from "vue";
import Card from "./Card";

export default defineComponent({
  name: "neo-card-example",
  setup() {
    return () => (
      <Card
        title='text'
        v-slots={{
          extra: <div>test</div>,
          default: <div>test</div>,
          footer: <button>test</button>,
        }}
      ></Card>
    );
  },
});
