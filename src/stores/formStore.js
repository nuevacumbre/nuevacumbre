import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormStore = defineStore("form", () => {
  const formData = ref({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const errors = ref({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sent = ref(false);
  const sending = ref(false);

  const resetForm = () => {
    formData.value = { name: "", email: "", phone: "", message: "" };
    errors.value = { name: "", email: "", phone: "", message: "" };
  };

  const setSending = (value) => (sending.value = value);
  const setSent = (value) => (sent.value = value);
  const setError = (field, message) => (errors.value[field] = message);
  const clearErrors = () =>
    Object.keys(errors.value).forEach((key) => (errors.value[key] = ""));

  return {
    formData,
    errors,
    sent,
    sending,
    resetForm,
    setSending,
    setSent,
    setError,
    clearErrors,
  };
});
