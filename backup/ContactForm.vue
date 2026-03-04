<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const sent = ref(false)

const handleSubmit = () => {
  // Aquí iría la lógica de envío
  console.log('Formulario enviado:', formData.value)
  sent.value = true
  setTimeout(() => sent.value = false, 3000)
}
</script>

<template>
  <section class="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            INICIAR TRANSMISIÓN
          </span>
        </h2>
        <p class="text-gray-400 font-mono">> CONTACTO DIRECTO_</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Info de contacto -->
        <div class="cyber-card bg-black/40 p-6 space-y-4">
          <h3 class="text-xl font-bold text-cyan-400 mb-4 font-mono">// DATOS DE CONTACTO</h3>
          
          <div class="flex items-center gap-3">
            <span class="text-cyan-500 text-xl">📞</span>
            <div>
              <p class="text-sm text-gray-400">Teléfono</p>
              <a href="tel:+56976228169" class="text-white hover:text-cyan-400">+56 9 7622 8169</a>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-cyan-500 text-xl">✉️</span>
            <div>
              <p class="text-sm text-gray-400">Email</p>
              <a href="mailto:c.espinoza.ordenes@gmail.com" class="text-white hover:text-cyan-400">c.espinoza.ordenes@gmail.com</a>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-cyan-500 text-xl">📍</span>
            <div>
              <p class="text-sm text-gray-400">Ubicación</p>
              <p class="text-white">Valparaíso, Chile</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-cyan-500 text-xl">🔗</span>
            <div>
              <p class="text-sm text-gray-400">LinkedIn</p>
              <a href="https://www.linkedin.com/in/christopher-espinoza-órdenes-1b2b274a/" target="_blank" 
                 class="text-white hover:text-cyan-400">/in/christopher-espinoza</a>
            </div>
          </div>

          <div class="pt-4">
            <p class="text-sm text-gray-400 font-mono mb-2">// DISPONIBLE PARA</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full text-xs">Consultoría</span>
              <span class="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded-full text-xs">Desarrollo</span>
              <span class="px-3 py-1 bg-pink-500/10 text-pink-300 border border-pink-500/30 rounded-full text-xs">Docencia</span>
              <span class="px-3 py-1 bg-green-500/10 text-green-300 border border-green-500/30 rounded-full text-xs">Freelance</span>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <div class="cyber-card bg-black/40 p-6">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-mono text-cyan-400 mb-1">> NOMBRE</label>
              <input v-model="formData.name" type="text" required
                     class="w-full px-4 py-2 bg-black/60 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none">
            </div>

            <div>
              <label class="block text-sm font-mono text-cyan-400 mb-1">> EMAIL</label>
              <input v-model="formData.email" type="email" required
                     class="w-full px-4 py-2 bg-black/60 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none">
            </div>

            <div>
              <label class="block text-sm font-mono text-cyan-400 mb-1">> TELÉFONO</label>
              <input v-model="formData.phone" type="tel"
                     class="w-full px-4 py-2 bg-black/60 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none">
            </div>

            <div>
              <label class="block text-sm font-mono text-cyan-400 mb-1">> MENSAJE</label>
              <textarea v-model="formData.message" rows="4" required
                        class="w-full px-4 py-2 bg-black/60 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"></textarea>
            </div>

            <button type="submit"
                    class="w-full px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 hover:shadow-neon-cyan transition-all duration-300">
              ENVIAR MENSAJE
            </button>

            <p v-if="sent" class="text-center text-green-400 text-sm font-mono animate-pulse">
              ✓ Mensaje enviado correctamente
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>