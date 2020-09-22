import { defineComponent, inject, reactive, ref, Ref } from "vue";
import "./App.less";
import TitleExample from "@/components/content/Title.example";
import CardExample from "@/components/content/Card.example";
import DividerExample from "@/components/content/Divider.example";
import ButtonExample from "@/components/content/Button.example";

import InputExample from "@/components/form/Input.example";
import IconExample from "./components/content/Icon.example";

import GridExample from "./components/content/Grid.example";
import { Row, Col } from "@/components/content/Grid";

import globalInit, { bidirectionToken } from "@/services/globalInit";
import Button from "./components/content/Button";

export default defineComponent({
  name: "App",
  setup() {
    globalInit();
    const bidi = inject(bidirectionToken)!;
    return () => (
      <Row gutter='1em' num={3}>
        <Col>
          <Button
            onClick={() => {
              bidi.value =
                bidi.value === "rtl"
                  ? (bidi.value = "ltr")
                  : (bidi.value = "rtl");
            }}
          >
            改变方向
          </Button>
        </Col>
        <Col>
          <TitleExample />
        </Col>
        <Col>
          <CardExample />
        </Col>
        <Col>
          <DividerExample />
        </Col>
        <Col>
          <ButtonExample />
        </Col>
        <Col>
          <IconExample />
        </Col>
        <Col>
          <GridExample />
        </Col>
        <Col>
          <InputExample />
        </Col>
      </Row>
    );
  },
});
