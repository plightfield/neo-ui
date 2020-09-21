import { defineComponent } from "vue";
import "./App.less";
import TitleExample from "@/components/content/Title.example";
import CardExample from "@/components/content/Card.example";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <div>
        <TitleExample />
        <CardExample />
      </div>
    );
  },
});
