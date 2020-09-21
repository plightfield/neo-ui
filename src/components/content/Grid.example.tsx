import { defineComponent } from "vue";
import Card from "./Card";
import { Col, Row } from "./Grid";
import "./Grid.example.less";
import Title from "./Title";

export default defineComponent({
  name: "neo-grid-example",
  setup() {
    return () => (
      <Card title='栅格布局'>
        <Title level={3}>无间隔布局</Title>
        <Row>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
          <Col class='neo-grid-block'></Col>
        </Row>
        <Title level={3}>有间隔布局</Title>
        <Row gutter='10px'>
          <Col span={2}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={2}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={2}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={2}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={2}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={2}>
            <div class='neo-grid-block'></div>
          </Col>
        </Row>
        <Title level={3}>混合布局</Title>
        <Row gutter='10px'>
          <Col span={2}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={4}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={6}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={3}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={9}>
            <div class='neo-grid-block'></div>
          </Col>
        </Row>
        <Title level={3}>修改 gutter</Title>
        <Row gutter='30px'>
          <Col span={2}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={4}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={6}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={3}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={9}>
            <div class='neo-grid-block'></div>
          </Col>
        </Row>
        <Title level={3}>添加 offset </Title>
        <Row gutter='30px'>
          <Col span={2}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={2} offset={2}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={6}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={3}>
            <div class='neo-grid-block'></div>
          </Col>
          <Col span={5} offset={4}>
            <div class='neo-grid-block'></div>
          </Col>
        </Row>
      </Card>
    );
  },
});
