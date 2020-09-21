import { defineComponent } from "vue";
import Title from "./Title";
import Card from "./Card";

export default defineComponent({
  name: "neo-title-example",
  setup() {
    return () => (
      <Card title='标题'>
        <Title level={1}>标题1</Title>
        <Title level={2}>标题2</Title>
        <Title level={3}>标题3</Title>
        <Title level={4}>标题4</Title>
        <Title level={5}>标题5</Title>
        <Title level={6}>标题6</Title>
      </Card>
    );
  },
});
