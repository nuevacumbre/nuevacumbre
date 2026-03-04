import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";

const SimpleForm = {
  template: `
    <div>
      <input v-model="message" data-testid="input" />
      <p data-testid="output">{{ message }}</p>
    </div>
  `,
  setup() {
    const message = ref("");
    return { message };
  },
};

describe("Formulario simple", () => {
  it("debe actualizar el valor", async () => {
    const wrapper = mount(SimpleForm);
    const input = wrapper.find('[data-testid="input"]');
    await input.setValue("hola mundo");
    expect(wrapper.find('[data-testid="output"]').text()).toBe("hola mundo");
  });
});
