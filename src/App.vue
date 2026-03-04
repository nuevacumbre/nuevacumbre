<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCyberSound } from './composables/useCyberSound'
import HeroVapor from './components/HeroVapor.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import SkillsNeon from './components/SkillsNeon.vue'
import ProjectsGrid from './components/ProjectsGrid.vue'
import ContactForm from './components/ContactForm.vue'

const { t, locale } = useI18n()
const isDark = ref(true)
const { playHover, playClick, enableSounds, soundsEnabled, initAudio } = useCyberSound()

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
  playClick()
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.body.classList.remove('dark')
  }
  playClick()
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    playClick()
  }
}

const handleSoundToggle = () => {
  enableSounds()
  setTimeout(() => window.location.reload(), 100)
}

onMounted(() => {
  document.documentElement.classList.add('dark')
  document.body.classList.add('dark')
  initAudio()
})
</script>

<template>
  <div>
    <!-- Barra de navegación -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass-vapor border-b border-white/10 dark:border-white/5">
      <div class="container mx-auto px-4 py-3">
        <!-- Fila superior en móvil, fila única en desktop -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <!-- Logo y controles (siempre visibles) -->
          <div class="flex justify-between items-center">
            <div class="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              &lt;CE/&gt;
            </div>
            
            <!-- Controles -->
            <div class="flex gap-2 md:gap-3">
              <button v-if="!soundsEnabled" 
                      @click="handleSoundToggle"
                      @mouseenter="playHover"
                      class="px-2 md:px-3 py-1 rounded border border-green-500/50 hover:bg-green-500 hover:text-white transition text-xs md:text-sm flex items-center gap-1">
                <span>🔇</span>
                <span class="hidden xs:inline md:inline">{{ t('nav.sound') }}</span>
              </button>
              
              <button @click="toggleLanguage" 
                      @mouseenter="playHover"
                      class="px-2 md:px-3 py-1 rounded border border-cyan-500/50 hover:bg-cyan-500 hover:text-white transition text-xs md:text-sm">
                {{ locale === 'es' ? 'EN' : 'ES' }}
              </button>
              <button @click="toggleTheme"
                      @mouseenter="playHover"
                      class="px-2 md:px-3 py-1 rounded border border-purple-500/50 hover:bg-purple-500 hover:text-white transition text-xs md:text-sm">
                {{ isDark ? '☀️' : '🌙' }}
              </button>
            </div>
          </div>

          <!-- Menú móvil (scrollable) - SOLO MÓVIL -->
          <div class="md:hidden w-full overflow-x-auto pb-2 scrollbar-hide">
            <div class="flex gap-2 min-w-max">
              <button @click="scrollToSection('inicio')" @mouseenter="playHover" 
                      class="px-3 py-1.5 text-sm border border-cyan-500/30 rounded-full whitespace-nowrap hover:bg-cyan-500/10">
                🏠 {{ t('nav.home') }}
              </button>
              <button @click="scrollToSection('experiencia')" @mouseenter="playHover" 
                      class="px-3 py-1.5 text-sm border border-cyan-500/30 rounded-full whitespace-nowrap hover:bg-cyan-500/10">
                💼 {{ t('nav.experience') }}
              </button>
              <button @click="scrollToSection('habilidades')" @mouseenter="playHover" 
                      class="px-3 py-1.5 text-sm border border-cyan-500/30 rounded-full whitespace-nowrap hover:bg-cyan-500/10">
                🛠️ {{ t('nav.skills') }}
              </button>
              <button @click="scrollToSection('proyectos')" @mouseenter="playHover" 
                      class="px-3 py-1.5 text-sm border border-cyan-500/30 rounded-full whitespace-nowrap hover:bg-cyan-500/10">
                📁 {{ t('nav.projects') }}
              </button>
              <button @click="scrollToSection('contacto')" @mouseenter="playHover" 
                      class="px-3 py-1.5 text-sm border border-cyan-500/30 rounded-full whitespace-nowrap hover:bg-cyan-500/10">
                📞 {{ t('nav.contact') }}
              </button>
            </div>
          </div>

          <!-- Menú desktop (horizontal) - SOLO DESKTOP -->
          <div class="hidden md:flex items-center gap-8">
            <button @click="scrollToSection('inicio')" @mouseenter="playHover" 
                    class="text-sm font-medium hover:text-cyan-400 transition relative group">
              {{ t('nav.home') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button @click="scrollToSection('experiencia')" @mouseenter="playHover" 
                    class="text-sm font-medium hover:text-cyan-400 transition relative group">
              {{ t('nav.experience') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button @click="scrollToSection('habilidades')" @mouseenter="playHover" 
                    class="text-sm font-medium hover:text-cyan-400 transition relative group">
              {{ t('nav.skills') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button @click="scrollToSection('proyectos')" @mouseenter="playHover" 
                    class="text-sm font-medium hover:text-cyan-400 transition relative group">
              {{ t('nav.projects') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button @click="scrollToSection('contacto')" @mouseenter="playHover" 
                    class="text-sm font-medium hover:text-cyan-400 transition relative group">
              {{ t('nav.contact') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="pt-28 md:pt-20">
      <section id="inicio"><HeroVapor /></section>
      <section id="experiencia"><ExperienceTimeline /></section>
      <section id="habilidades"><SkillsNeon /></section>
      <section id="proyectos"><ProjectsGrid /></section>
      <section id="contacto"><ContactForm /></section>
    </main>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (max-width: 480px) {
  .pt-28 {
    padding-top: 7rem;
  }
}

@media (min-width: 768px) {
  .pt-28 {
    padding-top: 5rem;
  }
}
</style>
