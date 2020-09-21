import { defineComponent } from "vue";
import Card from "./Card";

export default defineComponent({
  name: "neo-card-example",
  setup() {
    return () => (
      <Card
        title='卡片'
        v-slots={{
          extra: () => <div>额外内容</div>,
          footer: () => <div>底部操作栏</div>,
        }}
      >
        <div>主体内容</div>
      </Card>
    );
  },
});
