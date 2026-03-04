import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

// La ruta correcta es '../../components/ContactForm.vue' (no '../components/ContactForm.vue')
import ContactForm from "../../components/ContactForm.vue";

describe("ContactForm", () => {
  it("el componente se monta", () => {
    const wrapper = mount(ContactForm);
    expect(wrapper.exists()).toBe(true);
  });
});
