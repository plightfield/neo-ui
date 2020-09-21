import { defineComponent } from "vue";
import "./App.less";
import TitleExample from "@/components/content/Title.example";
import CardExample from "@/components/content/Card.example";
import DividerExample from "@/components/content/Divider.example";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <div>
        <TitleExample />
        <CardExample />
        <DividerExample />
      </div>
    );
  },
});
