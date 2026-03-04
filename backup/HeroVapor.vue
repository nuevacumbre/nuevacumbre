<script setup>
import { useI18n } from 'vue-i18n'
import { useCyberSound } from '@/composables/useCyberSound'
import { ref } from 'vue'

const { t } = useI18n()
const { playHover, playClick } = useCyberSound()

// Simular particles sin la librería (versión simplificada)
const particlesEnabled = ref(true)
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500 scanlines">
    <!-- Fondo con gradiente animado en lugar de particles -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slower"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <div class="text-left space-y-6 animate-vapor-slide">
        <p class="text-cyan-600 dark:text-cyan-400 font-mono text-lg tracking-widest uppercase flex items-center">
          > {{ t('hero.greeting') }} 
          <span class="ml-2 w-2 h-5 bg-cyan-400 animate-pulse"></span>
        </p>
        
        <h1 class="text-5xl md:text-7xl font-extrabold">
          <span class="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-neon-pulse">
            {{ t('hero.name') }}
          </span>
        </h1>

        <div class="h-16">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 font-mono">
            &lt;{{ t('hero.role1') }} /&gt;
          </h2>
        </div>

        <p class="text-gray-700 dark:text-gray-300 max-w-lg text-lg leading-relaxed glass-vapor p-6 rounded-xl border border-gray-200 dark:border-cyan-500/30 backdrop-blur-vapor">
          {{ t('hero.summary') }}
        </p>

        <div class="flex space-x-4 pt-4">
          <button 
            @mouseenter="playHover" 
            @click="playClick"
            class="group relative px-8 py-3 rounded-lg bg-cyan-600 text-white font-bold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-neon-cyan"
          >
            <span class="relative z-10">{{ t('hero.contactMe') }}</span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            @mouseenter="playHover" 
            @click="playClick"
            class="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-purple-400 dark:hover:text-purple-400 hover:shadow-neon-purple transition-all duration-300 font-bold"
          >
            {{ t('hero.downloadCV') }}
          </button>
        </div>
      </div>

      <div class="flex justify-center md:justify-end relative">
        <div 
          @mouseenter="playHover"
          class="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden group"
        >
          <!-- Marco de la foto con efecto neon -->
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <!-- Placeholder para tu foto (muestra un avatar genérico mientras tanto) -->
          <div class="relative z-10 w-full h-full rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold border-2 border-cyan-500/50 group-hover:border-cyan-400 group-hover:shadow-neon-cyan transition-all duration-500">
            CE
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <span class="text-xs font-mono text-cyan-400 mb-2">SCROLL DOWN</span>
      <div class="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
        <div class="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Las animaciones están definidas en tailwind.config.js */
</style>