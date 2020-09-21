import { defineComponent } from "vue";
import Button from "./Button";
import Card from "./Card";
import Space from "./Space";
import Title from "./Title";

export default defineComponent({
  name: "neo-button-example",
  setup() {
    return () => (
      <Card title='按钮'>
        <Title level={3}>常规大小</Title>
        <Space>
          <Button>测试按钮</Button>
          <Button type='primary'>测试按钮</Button>
          <Button type='success'>测试按钮</Button>
          <Button type='error'>测试按钮</Button>
        </Space>
        <Title level={3}>小型按钮</Title>
        <Space>
          <Button size='small'>测试按钮</Button>
          <Button type='primary' size='small'>
            测试按钮
          </Button>
          <Button type='success' size='small'>
            测试按钮
          </Button>
          <Button type='error' size='small'>
            测试按钮
          </Button>
        </Space>
        <Title level={3}>巨型按钮</Title>
        <Space>
          <Button size='large'>测试按钮</Button>
          <Button type='primary' size='large'>
            测试按钮
          </Button>
          <Button type='success' size='large'>
            测试按钮
          </Button>
          <Button type='error' size='large'>
            测试按钮
          </Button>
        </Space>
        <Title level={3}>失效状态</Title>
        <Space>
          <Button disabled={true}>失效按钮</Button>
          <Button type='primary' disabled={true}>
            失效按钮
          </Button>
          <Button type='success' disabled={true}>
            失效按钮
          </Button>
          <Button type='error' disabled={true}>
            失效按钮
          </Button>
        </Space>
        <Title level={3}>块级按钮</Title>
        <Space>
          <Button long={true}>失效按钮</Button>
          <Button type='primary' long={true}>
            失效按钮
          </Button>
          <Button type='success' long={true}>
            失效按钮
          </Button>
          <Button type='error' long={true}>
            失效按钮
          </Button>
        </Space>
      </Card>
    );
  },
});
