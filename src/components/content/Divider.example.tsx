import { defineComponent } from "vue";
import Card from "./Card";
import Divider from "./Divider";
import Title from "./Title";

export default defineComponent({
  name: "neo-divider-example",
  setup() {
    return () => (
      <Card title='分割线'>
        <Title level={3}>竖向分割线</Title>
        <p>
          <span>测试</span>
          <Divider type='vertical'></Divider>
          <span>测试</span>
          <Divider type='vertical'></Divider>
          <span>测试</span>
        </p>
        <Title level={3}>横向分割线</Title>
        <Divider type='herizon'></Divider>
        <Divider type='herizon' placement='center'>
          居中文字说明
        </Divider>
        <Divider type='herizon' placement='left'>
          左侧文字说明
        </Divider>
        <Divider type='herizon' placement='right'>
          右侧文字说明
        </Divider>
      </Card>
    );
  },
});
