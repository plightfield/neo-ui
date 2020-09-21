import { defineComponent } from "vue";
import "./App.less";
import Test from "@/playground/Test";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <div>
        <Test />
      </div>
    );
  },
});
