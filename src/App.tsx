import { defineComponent } from "vue";
import "./App.less";
import TitleExample from "@/components/content/Title.example";
import CardExample from "@/components/content/Card.example";
import DividerExample from "@/components/content/Divider.example";
import ButtonExample from "@/components/content/Button.example";

import InputExample from "@/components/form/Input.example";
import IconExample from "./components/content/Icon.example";

import scrollListen from "@/services/scrollListen";
import GridExample from "./components/content/Grid.example";
export default defineComponent({
  name: "App",
  setup() {
    scrollListen();
    return () => (
      <>
        <TitleExample />
        <CardExample />
        <DividerExample />
        <ButtonExample />
        <IconExample />
        <GridExample />

        <InputExample />
      </>
    );
  },
});
