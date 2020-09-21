import { defineComponent, ref } from "vue";
import Card from "./Card";
import Icon from "./Icon";
import Title from "./Title";

export default defineComponent({
  name: "neo-icon-example",
  setup() {
    return () => (
      <Card title='图标'>
        <Title level={3}>普通图标</Title>
        <Icon name='circle'></Icon> 圆圈
        <Title level={3}>图标无限动画</Title>
        <Icon name='home' infinite></Icon> 首页
        <Title level={3}>转动动画</Title>
        <Icon name='circle' rotate></Icon> 加载中...
        <Icon name='home' rotate></Icon> 首页
      </Card>
    );
  },
});
