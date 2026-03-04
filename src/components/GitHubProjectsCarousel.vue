<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Tus repositorios destacados de GitHub
const githubProjects = [
  {
    id: 1,
    name: "m2l6API-CNE-CHILE",
    description: "Dashboard API CNE - Chile",
    language: "HTML",
    stars: 2,
    forks: 1,
    url: "https://github.com/nuevacumbre/m2l6API-CNE-CHILE",
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "simulador-bursatil",
    description:
      "📈 SIMULADOR BURSÁTIL CON VUE.JS + FIREBASE + DATOS REALES API",
    language: "Vue",
    stars: 2,
    forks: 1,
    url: "https://github.com/nuevacumbre/simulador-bursatil",
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "m7l2cryptoFormulario",
    description:
      "🛡️ Taller de Ciberseguridad: Vue + Crypto + Protección de datos",
    language: "Vue",
    stars: 2,
    forks: 2,
    url: "https://github.com/nuevacumbre/m7l2cryptoFormulario",
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "m4l3practico2",
    description: "Ejercicio que ordena y busca el mayor y menor de un arreglo",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/nuevacumbre/m4l3practico2",
    color: "bg-yellow-500",
  },
  {
    id: 5,
    name: "m4l4ALUlocalstorage",
    description: "Ejercicio que muestra el uso del localstorage",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/nuevacumbre/m4l4ALUlocalstorage",
    color: "bg-yellow-500",
  },
  {
    id: 6,
    name: "m5l4PROminiBlackHole",
    description: "Mini Black Hole JS",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/nuevacumbre/m5l4PROminiBlackHole",
    color: "bg-yellow-500",
  },
  {
    id: 7,
    name: "real-time-market",
    description: "Proyecto de mercado en tiempo real",
    language: "JavaScript",
    stars: 4,
    forks: 0,
    url: "https://github.com/nuevacumbre/real-time-market",
    color: "bg-yellow-500",
  },
];

const scrollContainer = ref(null);

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: "smooth" });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: "smooth" });
  }
};
</script>

<template>
  <div class="py-12 px-4 bg-gray-900/50">
    <div class="container mx-auto">
      <h3
        class="text-2xl font-bold text-cyan-400 mb-6 font-mono flex items-center gap-2"
      >
        <span>📦</span> GitHub Projects
        <span class="text-xs bg-cyan-500/20 px-2 py-1 rounded-full ml-2"
          >74 repositorios</span
        >
      </h3>

      <!-- Carrusel con scroll horizontal -->
      <div class="relative group">
        <!-- Botones de navegación -->
        <button
          @click="scrollLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-neon-cyan"
        >
          ←
        </button>
        <button
          @click="scrollRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-neon-cyan"
        >
          →
        </button>

        <!-- Contenedor scrolleable -->
        <div
          ref="scrollContainer"
          class="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory"
          style="scrollbar-width: none; -ms-overflow-style: none"
        >
          <div
            v-for="repo in githubProjects"
            :key="repo.id"
            class="flex-none w-80 snap-start"
          >
            <a
              :href="repo.url"
              target="_blank"
              class="block cyber-card bg-black/60 p-5 hover:shadow-neon-cyan transition-all duration-300 hover:-translate-y-1"
            >
              <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">📁</span>
                  <h4 class="font-bold text-white truncate">{{ repo.name }}</h4>
                </div>
                <div class="flex items-center gap-2 text-xs">
                  <span class="flex items-center gap-1 text-yellow-400">
                    ⭐ {{ repo.stars }}
                  </span>
                  <span class="flex items-center gap-1 text-gray-400">
                    🍴 {{ repo.forks }}
                  </span>
                </div>
              </div>

              <p class="text-sm text-gray-300 mb-4 line-clamp-2">
                {{ repo.description }}
              </p>

              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full" :class="repo.color"></span>
                <span class="text-xs text-gray-400">{{ repo.language }}</span>
              </div>

              <!-- Efecto hover cyberpunk -->
              <div
                class="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-xl transition-all duration-300 pointer-events-none"
              ></div>
            </a>
          </div>

          <!-- Card "Ver más en GitHub" -->
          <div class="flex-none w-80 snap-start">
            <a
              href="https://github.com/nuevacumbre"
              target="_blank"
              class="flex flex-col items-center justify-center h-full cyber-card bg-gradient-to-br from-purple-900/40 to-cyan-900/40 p-5 hover:shadow-neon-purple transition-all duration-300 min-h-[160px]"
            >
              <span class="text-4xl mb-2">🐙</span>
              <span class="text-lg font-bold text-white"
                >Ver todos en GitHub</span
              >
              <span class="text-sm text-cyan-400">github.com/nuevacumbre</span>
              <span class="text-xs text-gray-400 mt-2">74+ repositorios</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Estadísticas rápidas -->
      <div class="flex flex-wrap gap-4 mt-6 justify-center">
        <div
          class="px-4 py-2 bg-black/40 rounded-full border border-cyan-500/20 text-sm"
        >
          <span class="text-cyan-400">⭐</span>
          <span class="text-white">Total estrellas: 13</span>
        </div>
        <div
          class="px-4 py-2 bg-black/40 rounded-full border border-purple-500/20 text-sm"
        >
          <span class="text-purple-400">📊</span>
          <span class="text-white">Lenguaje principal: JavaScript</span>
        </div>
        <div
          class="px-4 py-2 bg-black/40 rounded-full border border-green-500/20 text-sm"
        >
          <span class="text-green-400">📅</span>
          <span class="text-white">Último commit: 2026</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
