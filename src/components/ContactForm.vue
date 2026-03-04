<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// =============================================
// CONFIGURACIÓN EMAILJS
// =============================================
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

// =============================================
// ESTADO DEL FORMULARIO
// =============================================
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const sent = ref(false)
const sending = ref(false)
const errorMessage = ref('')

// =============================================
// VALIDACIONES
// =============================================
const validateForm = () => {
  let isValid = true
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  errors.value = { name: '', email: '', phone: '', message: '' }

  if (!formData.value.name.trim()) {
    errors.value.name = 'Nombre requerido'
    isValid = false
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email requerido'
    isValid = false
  } else if (!emailRegex.test(formData.value.email)) {
    errors.value.email = 'Email inválido'
    isValid = false
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Mensaje requerido'
    isValid = false
  }

  return isValid
}

// =============================================
// SANITIZACIÓN XSS
// =============================================
const sanitize = (str) => {
  if (!str) return ''
  return String(str).replace(/[<>]/g, '')
}

// =============================================
// ENVÍO CON EMAILJS
// =============================================
const handleSubmit = async () => {
  console.log('🔵 Enviando formulario...')

  if (!validateForm()) {
    console.log('🔴 Validación falló')
    return
  }

  sending.value = true
  errorMessage.value = ''

  try {
    const templateParams = {
      nombre: sanitize(formData.value.name),
      titulo: 'Mensaje desde Portfolio',
      email: sanitize(formData.value.email),
      telefono: sanitize(formData.value.phone) || 'No especificado',
      mensaje: sanitize(formData.value.message)
    }

    console.log('🟡 Parámetros:', templateParams)

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    console.log('🟢 Email enviado:', response)

    sent.value = true
    formData.value = { name: '', email: '', phone: '', message: '' }
    errors.value = { name: '', email: '', phone: '', message: '' }

    setTimeout(() => {
      sent.value = false
    }, 5000)

  } catch (error) {
    console.error('🔴 Error:', error)
    
    // Mensajes de error más descriptivos
    if (error.status === 412) {
      errorMessage.value = 'Error de autenticación con Gmail. Por favor reconecta el servicio en EmailJS.'
    } else {
      errorMessage.value = 'Error al enviar. Verifica tu conexión.'
    }
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
    <!-- Fondo animado -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="container mx-auto max-w-4xl relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            INICIAR TRANSMISIÓN
          </span>
        </h2>
        <p class="text-gray-400 font-mono">> CONTACTO DIRECTO_</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- INFO DE CONTACTO - DISEÑO ORIGINAL -->
        <div class="cyber-card bg-black/40 p-6 space-y-4">
          <h3 class="text-xl font-bold text-cyan-400 mb-4 font-mono flex items-center gap-2">
            <span>📡</span> // DATOS DE CONTACTO
          </h3>

          <div class="flex items-center gap-3 group hover:bg-cyan-500/10 p-2 rounded-lg transition-all">
            <span class="text-cyan-500 text-xl">📞</span>
            <div>
              <p class="text-sm text-gray-400">Teléfono</p>
              <a href="tel:+56976228169" class="text-white hover:text-cyan-400 transition-colors">+56 9 7622 8169</a>
            </div>
          </div>

          <div class="flex items-center gap-3 group hover:bg-cyan-500/10 p-2 rounded-lg transition-all">
            <span class="text-cyan-500 text-xl">✉️</span>
            <div>
              <p class="text-sm text-gray-400">Email</p>
              <a href="mailto:c.espinoza.ordenes@gmail.com" class="text-white hover:text-cyan-400 transition-colors">c.espinoza.ordenes@gmail.com</a>
            </div>
          </div>

          <div class="flex items-center gap-3 group hover:bg-cyan-500/10 p-2 rounded-lg transition-all">
            <span class="text-cyan-500 text-xl">📍</span>
            <div>
              <p class="text-sm text-gray-400">Ubicación</p>
              <p class="text-white">Valparaíso, Chile</p>
            </div>
          </div>

          <div class="flex items-center gap-3 group hover:bg-blue-600/10 p-2 rounded-lg transition-all">
            <span class="text-cyan-500 text-xl">🔗</span>
            <div>
              <p class="text-sm text-gray-400">LinkedIn</p>
              <a href="https://www.linkedin.com/in/christopher-espinoza-%C3%B3rdenes-1b2b274a/" target="_blank" class="text-white hover:text-blue-400 transition-colors">/in/christopher-espinoza</a>
            </div>
          </div>

          <div class="flex items-center gap-3 group hover:bg-gray-600/10 p-2 rounded-lg transition-all">
            <span class="text-cyan-500 text-xl">🐙</span>
            <div>
              <p class="text-sm text-gray-400">GitHub</p>
              <a href="https://github.com/nuevacumbre" target="_blank" class="text-white hover:text-gray-400 transition-colors">github.com/nuevacumbre</a>
            </div>
          </div>

          <div class="flex items-center gap-3 group hover:bg-green-600/10 p-2 rounded-lg transition-all">
            <span class="text-cyan-500 text-xl">📘</span>
            <div>
              <p class="text-sm text-gray-400">ChileFacilitadores</p>
              <a href="https://chilefacilitadores.cl/users/detail/cespinoza" target="_blank" class="text-white hover:text-green-400 transition-colors">chilefacilitadores.cl/cespinoza</a>
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

        <!-- FORMULARIO CON v-model -->
        <div class="cyber-card bg-black/40 p-6">
          <form @submit.prevent="handleSubmit">
            <!-- NOMBRE -->
            <div class="mb-4">
              <label class="block text-sm font-mono text-cyan-400 mb-1">
                > NOMBRE <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.name"
                type="text"
                placeholder="Tu nombre completo"
                maxlength="100"
                class="w-full px-4 py-2 bg-black/60 border rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
                :class="errors.name ? 'border-red-500' : 'border-cyan-500/30'"
              >
              <p v-if="errors.name" class="mt-1 text-xs text-red-400 font-mono">{{ errors.name }}</p>
            </div>

            <!-- EMAIL -->
            <div class="mb-4">
              <label class="block text-sm font-mono text-cyan-400 mb-1">
                > EMAIL <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.email"
                type="email"
                placeholder="tu@email.com"
                maxlength="255"
                class="w-full px-4 py-2 bg-black/60 border rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
                :class="errors.email ? 'border-red-500' : 'border-cyan-500/30'"
              >
              <p v-if="errors.email" class="mt-1 text-xs text-red-400 font-mono">{{ errors.email }}</p>
            </div>

            <!-- TELÉFONO -->
            <div class="mb-4">
              <label class="block text-sm font-mono text-cyan-400 mb-1">> TELÉFONO</label>
              <input
                v-model="formData.phone"
                type="tel"
                placeholder="+56 9 1234 5678"
                maxlength="20"
                class="w-full px-4 py-2 bg-black/60 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
              >
            </div>

            <!-- MENSAJE -->
            <div class="mb-4">
              <label class="block text-sm font-mono text-cyan-400 mb-1">
                > MENSAJE <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="formData.message"
                rows="4"
                placeholder="Cuéntame sobre tu proyecto..."
                maxlength="5000"
                class="w-full px-4 py-2 bg-black/60 border rounded-lg text-white focus:outline-none focus:border-cyan-400 transition resize-none"
                :class="errors.message ? 'border-red-500' : 'border-cyan-500/30'"
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-xs text-red-400 font-mono">{{ errors.message }}</p>
              <p class="text-right text-xs text-gray-500 mt-1">{{ formData.message.length }}/5000</p>
            </div>

            <!-- MENSAJE DE ERROR -->
            <p v-if="errorMessage" class="mb-4 text-sm text-red-400 font-mono text-center">
              {{ errorMessage }}
            </p>

            <!-- MENSAJE DE ÉXITO -->
            <p v-if="sent" class="mb-4 text-sm text-green-400 font-mono text-center">
              ✓ Mensaje enviado correctamente
            </p>

            <!-- BOTÓN -->
            <button
              type="submit"
              :disabled="sending"
              class="w-full px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 hover:shadow-neon-cyan transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ sending ? 'ENVIANDO...' : 'ENVIAR MENSAJE' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.5; }
}
.animate-pulse-slow {
  animation: pulse-slow 8s infinite ease-in-out;
}
</style>
