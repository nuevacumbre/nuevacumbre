<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
});

const logValue = () => {
  console.log("Valor actual:", formData.value);
};
</script>

<template>
  <div class="p-8 bg-gray-900 min-h-screen">
    <div class="max-w-md mx-auto cyber-card bg-black/40 p-6">
      <h2 class="text-2xl font-bold text-cyan-400 mb-4">TEST FORM</h2>

      <div class="mb-4">
        <label class="block text-sm text-gray-400 mb-1">Nombre:</label>
        <input
          v-model="formData.name"
          type="text"
          placeholder="Escribe aquí..."
          class="w-full px-4 py-2 bg-black/60 border border-cyan-500/30 rounded-lg text-white"
        />
        <p class="text-xs text-gray-500 mt-1">Valor: {{ formData.name }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-sm text-gray-400 mb-1">Email:</label>
        <input
          v-model="formData.email"
          type="email"
          placeholder="Escribe aquí..."
          class="w-full px-4 py-2 bg-black/60 border border-cyan-500/30 rounded-lg text-white"
        />
        <p class="text-xs text-gray-500 mt-1">Valor: {{ formData.email }}</p>
      </div>

      <button
        @click="logValue"
        class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500"
      >
        Ver en consola
      </button>

      <pre class="mt-4 p-2 bg-black/80 rounded text-xs text-green-400">
        {{ JSON.stringify(formData, null, 2) }}
      </pre>
    </div>
  </div>
</template>
