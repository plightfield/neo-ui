import { defineComponent } from "vue";
import Card from "../content/Card";
import Input from "./Input";

export default defineComponent({
  name: "neo-input-example",
  setup() {
    return () => (
      <Card title='输入框'>
        <Input placeholder='sdfsdf' />
      </Card>
    );
  },
});
