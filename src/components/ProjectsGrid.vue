<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import GitHubProjectsCarousel from './GitHubProjectsCarousel.vue'

const { t } = useI18n()

// TODOS TUS PROYECTOS (10+)
const projects = [
  {
    id: 1,
    title: 'SimpleHealth - Telemedicina',
    description: 'Plataforma de telemedicina en React Native',
    fullDescription: 'Sistema desarrollado para CISO Global Inc.',
    situation: 'La pandemia COVID-19 evidenció la necesidad de consultas médicas remotas seguras.',
    task: 'Desarrollar una plataforma de telemedicina con videoconsultas, recetas electrónicas y solicitud de fármacos.',
    action: 'Implementé la app en React Native con OAuth2, WebSockets y encriptación de datos sensibles.',
    result: 'Plataforma procesando más de 1000 consultas mensuales con cero brechas de seguridad.',
    image: '/projects/simplehealth.jpg',
    tags: ['React Native', 'Node.js', 'WebSockets', 'TailwindCSS', 'OAuth2'],
    category: 'frontend',
    company: 'CISO Global Inc',
    year: '2022-2023',
    github: 'https://github.com/nuevacumbre/simplehealth',
    demo: 'https://simplehealth.cl',
    stats: { stars: 45, forks: 12 }
  },
  {
    id: 2,
    title: 'Grupo Medical - App Especialistas',
    description: 'Sistema para especialistas médicos con geolocalización',
    fullDescription: 'Aplicación desarrollada en React Native con Material UI y MySQL Heatwave.',
    situation: 'Hospitales necesitaban cubrir turnos de especialistas de manera eficiente.',
    task: 'Crear un sistema de asignación de turnos basado en geolocalización.',
    action: 'Desarrollé app en React Native con Google Maps API, backend en Node.js y MySQL Heatwave.',
    result: 'Reducción del 40% en tiempo de cobertura de turnos de emergencia.',
    image: '/projects/grupomedical.jpg',
    tags: ['React Native', 'Material UI', 'MySQL Heatwave', 'Geolocalización', 'JWT'],
    category: 'mobile',
    company: 'CISO Global Inc',
    year: '2022',
    github: 'https://github.com/nuevacumbre/grupo-medical',
    demo: 'https://grupomedical.cl',
    stats: { stars: 38, forks: 9 }
  },
  {
    id: 3,
    title: 'Pesco Rental - Control de Flota',
    description: 'Sistema de control de flota con GPS',
    fullDescription: 'Desarrollado en Angular con framework COREUI y MySQL.',
    situation: 'Empresa perdía control de mantenimientos y ubicación de su flota.',
    task: 'Implementar sistema de tracking en tiempo real con gestión de mantenimientos.',
    action: 'Construí dashboard en Angular con COREUI, integración GPS y reportes con KPIs.',
    result: 'Reducción del 60% en tiempo de inactividad de equipos.',
    image: '/projects/pescorental.jpg',
    tags: ['Angular', 'COREUI', 'MySQL', 'GPS Integration', 'RBAC'],
    category: 'fullstack',
    company: 'CISO Global Inc',
    year: '2021-2022',
    github: 'https://github.com/nuevacumbre/pescorental',
    demo: 'https://pescorental.com',
    stats: { stars: 27, forks: 8 }
  },
  {
    id: 4,
    title: 'SEREMI Salud - Alertas COVID',
    description: 'Plataforma de alertas COVID en React Native',
    fullDescription: 'Desarrollo durante práctica laboral en SEREMI de Salud.',
    situation: 'Necesidad de alertas tempranas de COVID y dashboard de KPIs.',
    task: 'Desarrollar app de alertas Android e intranet con dashboard.',
    action: 'Implementé app en React Native con notificaciones push, intranet en LAMP.',
    result: 'Sistema utilizado por 50+ investigadores, reduciendo tiempo de respuesta.',
    image: '/projects/seremi.jpg',
    tags: ['React Native', 'PHP', 'MySQL Heatwave', 'LAMP', 'Push Notifications'],
    category: 'fullstack',
    company: 'SEREMI Salud',
    year: '2021',
    github: 'https://github.com/nuevacumbre/seremi-alertas',
    stats: { stars: 19, forks: 4 }
  },
  {
    id: 5,
    title: 'Redsalud - Portal Clínico',
    description: 'Portal web clínico con resultados de exámenes',
    fullDescription: 'Desarrollo en plataforma LAMP para Clínica Iquique.',
    situation: 'Necesidad de portal web con resultados de exámenes y sistema de cobranza.',
    task: 'Desarrollar portal web clínico con acceso seguro a resultados.',
    action: 'Implementé en LAMP con PHP, Oracle y SQL Server, migración a 2016.',
    result: 'Portal con más de 5000 pacientes activos, 100% uptime.',
    image: '/projects/redsalud.jpg',
    tags: ['LAMP', 'PHP', 'Oracle', 'SQL Server', 'JavaScript'],
    category: 'backend',
    company: 'Redsalud Clínica Iquique',
    year: '2017-2021',
    github: 'https://github.com/nuevacumbre/redsalud',
    stats: { stars: 15, forks: 3 }
  },
  {
    id: 6,
    title: 'Municipalidad El Quisco',
    description: 'Nuevo sitio web e intranet municipal',
    fullDescription: 'Como Jefe del Departamento de Informática.',
    situation: 'Municipalidad necesitaba modernizar su infraestructura digital.',
    task: 'Implementar nuevo sitio web, intranet y software de gestión CAS-CHILE.',
    action: 'Lideré nueva infraestructura de servidores, implementación de CAS-CHILE según SUBDERE.',
    result: 'Sitio web con pago online, intranet funcional para 200+ funcionarios.',
    image: '/projects/elquisco.jpg',
    tags: ['PHP', 'MySQL', 'CAS-CHILE', 'Redes', 'Linux'],
    category: 'fullstack',
    company: 'I. Municipalidad El Quisco',
    year: '2011-2012',
    github: 'https://github.com/nuevacumbre/elquisco',
    stats: { stars: 12, forks: 2 }
  },
  {
    id: 7,
    title: 'IGE S.A. - Portales Web',
    description: 'Desarrollo de portales para EMOL, Toyota, etc.',
    fullDescription: 'Mantención y Desarrollo de Portales Web.',
    situation: 'Empresas necesitaban portales web dinámicos y automatizados.',
    task: 'Desarrollar y mantener múltiples portales corporativos.',
    action: 'Programación de administradores, mantenedores, automatizaciones en PHP y SQL Server.',
    result: 'Portales con alta disponibilidad y tráfico de millones de usuarios.',
    image: '/projects/ige.jpg',
    tags: ['PHP', 'SQL Server', 'JavaScript', 'Flash', 'Diseño Web'],
    category: 'frontend',
    company: 'IGE S.A.',
    year: '2008-2011',
    github: 'https://github.com/nuevacumbre/ige',
    stats: { stars: 8, forks: 1 }
  },
  {
    id: 8,
    title: 'Terra Network - TV Digital',
    description: 'Portal de Televisión Digital de Telefónica Chile',
    fullDescription: 'Desarrollador en Terra Network Chile.',
    situation: 'Telefónica necesitaba portal de TV digital con contenido actualizable.',
    task: 'Mantener y desarrollar el portal de televisión digital.',
    action: 'Programación de actualizaciones de contenido en PHP y PostgreSQL.',
    result: 'Portal con miles de visitas diarias y contenido actualizado.',
    image: '/projects/terra.jpg',
    tags: ['PHP', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    company: 'Terra Network Chile',
    year: '2007-2008',
    github: 'https://github.com/nuevacumbre/terra',
    stats: { stars: 5, forks: 0 }
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
    <!-- Fondo cyberpunk -->
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
          {{ cat === 'todos' ? 'TODOS' : cat.toUpperCase() }}
        </button>
      </div>

      <!-- Grid de proyectos - 3 columnas en desktop -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in filteredProjects" :key="project.id"
             @click="openProjectModal(project)"
             class="group relative cyber-card bg-black/40 p-5 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-neon-cyan">
          
          <!-- Imagen placeholder -->
          <div class="relative h-48 overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
            <span class="text-4xl opacity-30">{{ project.title.charAt(0) }}</span>
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
          
          <!-- Resultado -->
          <p class="text-sm text-gray-400 mb-3 line-clamp-2">
            <span class="text-green-400">✓</span> {{ project.result }}
          </p>

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

      <!-- CARRUSEL DE GITHUB -->
      <GitHubProjectsCarousel />

      <!-- Modal de proyecto -->
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
           @click.self="selectedProject = null">
        <div class="cyber-card bg-gray-900 max-w-3xl w-full p-6">
          <h3 class="text-2xl font-bold text-cyan-400 mb-2">{{ selectedProject.title }}</h3>
          <p class="text-purple-400 mb-4">{{ selectedProject.company }} • {{ selectedProject.year }}</p>
          
          <!-- MÉTODO STAR -->
          <div class="space-y-4 mb-4">
            <div>
              <h4 class="text-cyan-400 font-mono text-sm mb-1">// SITUACIÓN</h4>
              <p class="text-gray-300 text-sm">{{ selectedProject.situation }}</p>
            </div>
            <div>
              <h4 class="text-cyan-400 font-mono text-sm mb-1">// TAREA</h4>
              <p class="text-gray-300 text-sm">{{ selectedProject.task }}</p>
            </div>
            <div>
              <h4 class="text-cyan-400 font-mono text-sm mb-1">// ACCIÓN</h4>
              <p class="text-gray-300 text-sm">{{ selectedProject.action }}</p>
            </div>
            <div>
              <h4 class="text-cyan-400 font-mono text-sm mb-1">// RESULTADO</h4>
              <p class="text-green-400 text-sm">{{ selectedProject.result }}</p>
            </div>
          </div>

          <!-- Tecnologías -->
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
