import { defineComponent } from "vue";
import "./Test.less";

export default defineComponent({
  name: "Test",
  setup() {
    return () => (
      <div>
        this is app
        <p class='test1'>test</p>
        <p class='test2'>test</p>
        <p class='test3'>test</p>
        <p class='test4'>test</p>
        <div class='card'>this is test</div>
      </div>
    );
  },
});
