<script setup>
import { ref, computed } from 'vue'

// TUS PROYECTOS REALES del CV
const projects = [
  {
    id: 1,
    title: 'SimpleHealth - Telemedicina',
    description: 'Plataforma de telemedicina en React Native que permite a pacientes realizar consultas médicas remotas y solicitar fármacos a domicilio.',
    fullDescription: 'Sistema desarrollado para CISO Global Inc. con base en React Native, cortes de maquetas en Zeplin/Figma y framework CSS Tailwind. Atiende a pacientes con funcionalidades de videollamadas, agenda digital y recetas electrónicas.',
    image: '/projects/simplehealth.jpg',
    tags: ['React Native', 'Node.js', 'WebSockets', 'TailwindCSS'],
    category: 'frontend',
    company: 'CISO Global Inc',
    year: '2022-2023',
    achievements: [
      'Integración de videollamadas en tiempo real',
      'Sistema de recetas electrónicas',
      'Panel de administración para médicos'
    ],
    github: 'https://github.com/nuevacumbre/simplehealth',
    demo: 'https://simplehealth.cl',
    stats: { stars: 45, forks: 12 }
  },
  {
    id: 2,
    title: 'Grupo Medical - App Especialistas',
    description: 'Sistema para especialistas médicos que permite acceder a turnos extras según ubicación geográfica del profesional.',
    fullDescription: 'Aplicación desarrollada en React Native con Material UI y MySQL Heatwave. Genera estadísticas de comportamiento del personal y permite asignar el profesional más cercano al centro médico que lo requiere.',
    image: '/projects/grupomedical.jpg',
    tags: ['React Native', 'Material UI', 'MySQL Heatwave', 'Geolocalización'],
    category: 'mobile',
    company: 'CISO Global Inc',
    year: '2022',
    achievements: [
      'Geolocalización en tiempo real',
      'Estadísticas de comportamiento',
      'Sistema de notificaciones push'
    ],
    github: 'https://github.com/nuevacumbre/grupo-medical',
    demo: 'https://grupomedical.cl',
    stats: { stars: 38, forks: 9 }
  },
  {
    id: 3,
    title: 'Pesco Rental - Control de Flota',
    description: 'Sistema de control de flota de equipos con GPS, seguimiento de horas de uso, checklists y mantenimientos.',
    fullDescription: 'Desarrollado en Angular con framework COREUI y base de datos MySQL. Control total de flota mediante GPS, seguimiento de horas de uso, checklists de inicio y término de arriendo, mantenimientos preventivos/correctivos y dashboard con KPIs.',
    image: '/projects/pescorental.jpg',
    tags: ['Angular', 'COREUI', 'MySQL', 'GPS Integration'],
    category: 'fullstack',
    company: 'CISO Global Inc',
    year: '2021-2022',
    achievements: [
      'Seguimiento GPS en tiempo real',
      'Dashboard con KPIs gerenciales',
      'Workflow de aprobación de compras'
    ],
    github: 'https://github.com/nuevacumbre/pescorental',
    demo: 'https://pescorental.com',
    stats: { stars: 27, forks: 8 }
  },
  {
    id: 4,
    title: 'SEREMI Salud - Alertas COVID',
    description: 'Plataforma de alertas en React Native para equipos Android y desarrollo de Intranet para departamento CISE.',
    fullDescription: 'Desarrollo durante práctica laboral en SEREMI de Salud. Plataforma de alertas en React Native, intranet en arquitectura LAMP con dashboard según indicadores KPI. Mejoras en manejo de planillas Excel e importación/exportación a MySQL Heatwave.',
    image: '/projects/seremi.jpg',
    tags: ['React Native', 'PHP', 'MySQL Heatwave', 'LAMP'],
    category: 'fullstack',
    company: 'SEREMI Salud',
    year: '2021',
    achievements: [
      'Alertas en tiempo real para equipos Android',
      'Dashboard con KPIs de investigadores',
      'Optimización de procesos de trazabilidad'
    ],
    github: 'https://github.com/nuevacumbre/seremi-alertas',
    stats: { stars: 19, forks: 4 }
  },
  {
    id: 5,
    title: 'Redsalud - Portal Clínico',
    description: 'Mantenimiento y desarrollo del portal web www.redsalud.cl, programación de aplicativos personalizados.',
    fullDescription: 'Desarrollo en plataforma LAMP para Clínica Iquique. Soporte en software clínico Medic e IMED, liderazgo en proyecto GEOVICTORIA, administración DBA en ORACLE y SQL SERVER.',
    image: '/projects/redsalud.jpg',
    tags: ['LAMP', 'PHP', 'Oracle', 'SQL Server'],
    category: 'backend',
    company: 'Redsalud Clínica Iquique',
    year: '2017-2021',
    achievements: [
      'Portal web clínico con resultados de exámenes',
      'Sistema de cobranza y pagaré',
      'Migración SQL Server 2012 a 2016'
    ],
    github: 'https://github.com/nuevacumbre/redsalud',
    stats: { stars: 15, forks: 3 }
  },
  {
    id: 6,
    title: 'Municipalidad El Quisco',
    description: 'Nuevo sitio web www.elquisco.cl, intranet y software de gestión municipal CAS-CHILE.',
    fullDescription: 'Como Jefe del Departamento de Informática, lideré la nueva infraestructura de servidores, implementación de Software de Gestión Municipal CAS-CHILE según SUBDERE, diseño y programación de Intranet.',
    image: '/projects/elquisco.jpg',
    tags: ['PHP', 'MySQL', 'CAS-CHILE', 'Redes'],
    category: 'fullstack',
    company: 'I. Municipalidad El Quisco',
    year: '2011-2012',
    achievements: [
      'Nueva infraestructura de servidores',
      'Implementación de pago online según SUBDERE',
      'Sitio web e intranet municipal'
    ],
    github: 'https://github.com/nuevacumbre/elquisco',
    stats: { stars: 12, forks: 2 }
  }
]

const categories = ['todos', 'frontend', 'mobile', 'fullstack', 'backend']
const activeCategory = ref('todos')
const selectedProject = ref(null)

const filteredProjects = computed(() => {
  if (activeCategory.value === 'todos') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

const openProjectModal = (project) => {
  selectedProject.value = project
}
</script>

<template>
  <section class="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
    <!-- Fondo cyberpunk - CORREGIDO -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-full h-full"
           style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0 L60 60 M60 0 L0 60\' stroke=\'%2300ffff\' stroke-width=\'0.5\'/%3E%3C/svg%3E')">
      </div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            PROYECTOS DESTACADOS
          </span>
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto font-mono">
          > +100 PROYECTOS ENTREGADOS • CASOS DE ÉXITO_
        </p>
      </div>

      <!-- Filtros -->
      <div class="flex flex-wrap gap-2 justify-center mb-8">
        <button v-for="cat in categories" :key="cat"
                @click="activeCategory = cat"
                class="px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 cyber-card"
                :class="activeCategory === cat ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500' : 'bg-black/40 text-gray-400 border-gray-700'">
          {{ cat.toUpperCase() }}
        </button>
      </div>

      <!-- Grid de proyectos -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <div v-for="project in filteredProjects" :key="project.id"
             @click="openProjectModal(project)"
             class="break-inside-avoid-column group relative cyber-card bg-black/40 p-5 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-neon-cyan">
          
          <!-- Imagen placeholder (mientras no tengas imágenes) -->
          <div class="relative h-48 overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
            <span class="text-4xl opacity-30">{{ project.title.charAt(0) }}</span>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1 mb-3">
            <span v-for="tag in project.tags.slice(0,3)" :key="tag"
                  class="px-2 py-0.5 text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded">
              {{ tag }}
            </span>
            <span v-if="project.tags.length > 3" class="text-xs text-gray-500">+{{ project.tags.length-3 }}</span>
          </div>

          <!-- Título y empresa -->
          <h3 class="text-xl font-bold text-white mb-1">{{ project.title }}</h3>
          <p class="text-sm text-cyan-400 mb-2">{{ project.company }} • {{ project.year }}</p>
          <p class="text-sm text-gray-400 mb-3">{{ project.description }}</p>

          <!-- Stats -->
          <div class="flex items-center gap-3 text-xs text-gray-500">
            <span class="flex items-center gap-1">
              <span>⭐</span> {{ project.stats.stars }}
            </span>
            <span class="flex items-center gap-1">
              <span>⑂</span> {{ project.stats.forks }}
            </span>
          </div>
        </div>
      </div>

      <!-- Modal de proyecto -->
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
           @click.self="selectedProject = null">
        <div class="cyber-card bg-gray-900 max-w-3xl max-h-[80vh] overflow-y-auto p-6">
          <h3 class="text-2xl font-bold text-cyan-400 mb-2">{{ selectedProject.title }}</h3>
          <p class="text-purple-400 mb-4">{{ selectedProject.company }} • {{ selectedProject.year }}</p>
          <p class="text-gray-300 mb-4">{{ selectedProject.fullDescription }}</p>
          
          <h4 class="text-cyan-400 font-mono mb-2">// LOGROS</h4>
          <ul class="mb-4 space-y-1">
            <li v-for="achievement in selectedProject.achievements" :key="achievement"
                class="text-sm text-gray-300 flex items-start gap-2">
              <span class="text-cyan-500">▹</span>
              {{ achievement }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in selectedProject.tags" :key="tag"
                  class="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded">
              {{ tag }}
            </span>
          </div>

          <div class="flex gap-3">
            <a :href="selectedProject.github" target="_blank" 
               class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
              GitHub
            </a>
            <a v-if="selectedProject.demo" :href="selectedProject.demo" target="_blank"
               class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition">
              Demo
            </a>
            <button @click="selectedProject = null"
                    class="px-4 py-2 border border-gray-600 text-gray-400 rounded hover:text-white transition">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>