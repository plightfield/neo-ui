import { defineComponent } from "vue";
import Card from "./Card";

export default defineComponent({
  name: "neo-card-example",
  setup() {
    return () => (
      <Card
        title='卡片'
        light
        v-slots={{
          extra: () => <div>额外内容</div>,
          footer: () => <div>底部操作栏</div>,
        }}
      >
        <div>
          <p>主题内容</p>
          <p>注意，light 配置可以强调卡片内容</p>
        </div>
      </Card>
    );
  },
});
