<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t } = useI18n();

// TU EXPERIENCIA REAL COMPLETA del CV (¡TODAS!)
const experiences = [
  {
    id: 1,
    company: "Instituto Profesional Icap (FUCAP)",
    role: "Docente Académico en Ciberseguridad",
    period: "2024 - Presente",
    location: "Valparaíso, Chile",
    description:
      "Docente en Ciberseguridad Experto con REUF de SENSE. Materias: Formación básica, Transformación Digital, Gestión de la Ciberseguridad, Seguridad del Software y Hardware, Redes, Hacking Ético, Malware, Análisis Forense.",
    achievements: [
      "Diseño y ejecución de programa de ciberseguridad integral",
      "Capacitación en diferentes sistemas operativos",
      "Simulaciones realistas de ciberataques",
    ],
    technologies: [
      "Ethical Hacking",
      "Análisis Forense",
      "Redes",
      "Malware",
      "Kali Linux",
    ],
  },
  {
    id: 2,
    company: "CISO Global Inc (Cuatroi SPA)",
    role: "Consultor TI / Gestión de Proyectos",
    period: "2021 - 2023",
    location: "Santiago, Chile",
    description:
      "Liderazgo de Gestión de Proyecto en desarrollo DevOps Front-End y Back-End mediante metodologías KANBAN y SCRUM.",
    achievements: [
      "Desarrollo de www.simplehealth.cl (React Native) - Plataforma de telemedicina",
      "Desarrollo de app para www.grupomedical.cl - Sistema para especialistas médicos",
      "Desarrollo de www.pescorental.com (Angular) - Control de flota con GPS",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "MySQL Heatwave",
      "AWS",
      "SCRUM",
      "KANBAN",
    ],
  },
  {
    id: 3,
    company: "SEREMI de Salud - Región de Tarapacá",
    role: "BAC – Investigador Epidemiológico",
    period: "2021",
    location: "Iquique, Chile",
    description:
      "Seguimiento y búsqueda de trazabilidad COVID-19. Manejo de plataforma Epivigila.",
    achievements: [
      "Implementación de mejoras en manejo de planillas Excel",
      "Desarrollo de plataforma de alertas en React Native",
      "Desarrollo de Intranet para departamento CISE en arquitectura LAMP",
    ],
    technologies: ["React Native", "MySQL Heatwave", "PHP", "Excel Avanzado"],
  },
  {
    id: 4,
    company: "Redsalud Clínica Iquique S.A.",
    role: "Informático, IT Service desk, Gestión de Proyectos",
    period: "2017 - 2021",
    location: "Iquique, Chile",
    description:
      "Responsable de Optimización de Procesos y Análisis de Datos en Sector Salud.",
    achievements: [
      "Mantenimiento y desarrollo del portal web www.redsalud.cl",
      "Soporte en software clínico Medic e IMED",
      "Liderazgo en proyecto GEOVICTORIA",
      "Administración DBA en ORACLE y SQL SERVER",
    ],
    technologies: ["LAMP", "Oracle", "SQL Server", "PHP", "JavaScript"],
  },
  {
    id: 5,
    company: "Universidad Arturo Prat del Estado (UNAP)",
    role: "Docente Académico Vespertino",
    period: "2015 - 2017",
    location: "Iquique, Chile",
    description:
      "Docente en Informática y computación, certificaciones ICDL (IC3).",
    achievements: [
      "Cursos avanzados de Excel con tablas dinámicas y macros en VBA",
      "Fundamentos de la computación, Aplicaciones Claves y Vida en línea",
    ],
    technologies: ["IC3", "Excel VBA", "Computación Básica"],
  },
  {
    id: 6,
    company: "Gusal Ingeniería y Mantención Ltda.",
    role: "IT Manager",
    period: "2014 - 2017",
    location: "Iquique, Chile",
    description:
      "Responsable del departamento de soporte informático y desarrollo web.",
    achievements: [
      "Desarrollo de página web corporativa www.gusal.cl y www.staffservice.cl",
      "Desarrollo de aplicaciones web en plataforma LAMP",
      "Soporte avanzado en Ofimática",
    ],
    technologies: ["LAMP", "PHP", "MySQL", "HTML", "CSS"],
  },
  {
    id: 7,
    company: "Clínica Iquique S.A.",
    role: "Analista Programador",
    period: "2013 - 2014",
    location: "Iquique, Chile",
    description: "Desarrollo, depuración y mantención de portal web clínico.",
    achievements: [
      "Programación de software personalizado de cobranza",
      "Implementación de sistema web de resultados de exámenes",
      "Modificaciones en sistemas auxiliares clínicos en ASP y Java",
    ],
    technologies: ["PHP", "ASP", "Java", "MySQL"],
  },
  {
    id: 8,
    company: "Ilustre Municipalidad de El Quisco",
    role: "Jefe del Departamento de Informática",
    period: "2011 - 2012",
    location: "El Quisco, Chile",
    description:
      "Soporte y mantención de la arquitectura de tecnologías de gestión municipal.",
    achievements: [
      "Nueva infraestructura de servidores",
      "Implementación de Software de Gestión Municipal CAS-CHILE",
      "Creación nuevo sitio web www.elquisco.cl",
      "Diseño y programación de Intranet",
    ],
    technologies: ["PHP", "MySQL", "CAS-CHILE", "Redes"],
  },
  {
    id: 9,
    company: "IGE S.A. (Ideas Geniales)",
    role: "Jefe de Proyectos Informáticos",
    period: "2008 - 2011",
    location: "Santiago, Chile",
    description: "Mantención y desarrollo de portales web.",
    achievements: [
      "Portal de Restaurantes de EMOL",
      "Portal Hemisferio Sur",
      "MAF TOYOTA (Chile-Perú)",
      "DBA en SQL SERVER 2010",
    ],
    technologies: ["PHP", "SQL Server", "Flash", "Diseño Web"],
  },
  {
    id: 10,
    company: "Terra Network Chile S. A. (Fusiona S.A.)",
    role: "Analista Programador Computacional",
    period: "2007 - 2008",
    location: "Santiago, Chile",
    description:
      "Desarrollador y mantención del Portal de Televisión Digital de Telefónica Chile.",
    achievements: [
      "Programación y actualizaciones de contenido",
      "Manejo de base de datos PostgreSQL",
    ],
    technologies: ["PHP", "PostgreSQL", "HTML", "CSS"],
  },
];

const certifications = [
  "Internet and Computing Core Certification (IC3) - CERTIPORT",
  "Ethical Hacking (CEH)",
  "Diplomado Design Thinking - UPLA",
  "Diplomado Growth Hacking - UPLA",
  "Diplomado Programación JavaScript, AngularJS, NodeJS - UPLA",
  "Diplomado Gestión de Proyectos con Metodologías Ágiles",
  "Maestría en Administración de Bases de Datos SQL 2005",
  "Maestría en Programación de Bases de Datos SQL 2005",
];

const selectedExp = ref(experiences[0]);
</script>

<template>
  <section class="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
    <!-- Fondo cyberpunk -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 left-0 w-full h-full"
        style="
          background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L60 60 M60 0 L0 60' stroke='%2300ffff' stroke-width='0.5'/%3E%3C/svg%3E&quot;);
        "
      ></div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span
            class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            TRAYECTORIA PROFESIONAL
          </span>
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto font-mono">
          > 19+ AÑOS DE EXPERIENCIA EN DESARROLLO, SEGURIDAD Y DOCENCIA_
        </p>
      </div>

      <!-- Stats rápidas -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
      >
        <div class="text-center p-4 cyber-card bg-black/40">
          <span class="block text-3xl font-bold text-cyan-400">19+</span>
          <span class="text-xs text-gray-400">Años Experiencia</span>
        </div>
        <div class="text-center p-4 cyber-card bg-black/40">
          <span class="block text-3xl font-bold text-purple-400">10+</span>
          <span class="text-xs text-gray-400">Empresas</span>
        </div>
        <div class="text-center p-4 cyber-card bg-black/40">
          <span class="block text-3xl font-bold text-pink-400">100+</span>
          <span class="text-xs text-gray-400">Proyectos</span>
        </div>
        <div class="text-center p-4 cyber-card bg-black/40">
          <span class="block text-3xl font-bold text-green-400">8</span>
          <span class="text-xs text-gray-400">Certificaciones</span>
        </div>
      </div>

      <!-- Timeline selector -->
      <div class="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          v-for="exp in experiences.slice(0, 5)"
          :key="exp.id"
          @click="selectedExp = exp"
          class="px-4 py-2 rounded-full text-sm font-mono transition-all duration-300"
          :class="
            selectedExp.id === exp.id
              ? 'bg-cyan-500 text-white shadow-neon-cyan'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          "
        >
          {{ exp.company }}
        </button>
      </div>

      <!-- Experiencia seleccionada (detalle) -->
      <div class="cyber-card bg-black/60 p-6 md:p-8 mb-12">
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Info principal -->
          <div class="md:col-span-2">
            <div class="flex items-start gap-3 mb-4">
              <span class="text-cyan-400 text-xl">&gt;</span>
              <div>
                <h3 class="text-2xl font-bold text-white">
                  {{ selectedExp.role }}
                </h3>
                <p class="text-cyan-400 font-mono">{{ selectedExp.company }}</p>
              </div>
            </div>

            <div
              class="flex items-center gap-4 mb-4 text-sm text-gray-400 font-mono"
            >
              <span>📅 {{ selectedExp.period }}</span>
              <span>📍 {{ selectedExp.location }}</span>
            </div>

            <p class="text-gray-300 mb-4">{{ selectedExp.description }}</p>

            <div class="mb-4">
              <h4 class="text-cyan-400 font-mono text-sm mb-2">// LOGROS</h4>
              <ul class="space-y-2">
                <li
                  v-for="achievement in selectedExp.achievements"
                  :key="achievement"
                  class="flex items-start gap-2 text-sm text-gray-300"
                >
                  <span class="text-cyan-500">▹</span>
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar tecnologías -->
          <div class="bg-black/40 p-4 rounded-lg border border-cyan-500/20">
            <h4 class="text-purple-400 font-mono text-sm mb-3">
              // TECNOLOGÍAS
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in selectedExp.technologies"
                :key="tech"
                class="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded"
              >
                {{ tech }}
              </span>
            </div>

            <h4 class="text-purple-400 font-mono text-sm mt-4 mb-3">
              // CERTIFICACIONES
            </h4>
            <ul class="space-y-1">
              <li
                v-for="cert in certifications.slice(0, 3)"
                :key="cert"
                class="text-xs text-gray-400 flex items-start gap-2"
              >
                <span class="text-purple-500">⚡</span>
                {{ cert.substring(0, 30) }}...
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Timeline visual -->
      <div class="relative">
        <div
          class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"
        ></div>

        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative flex items-center"
            :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
          >
            <div class="w-1/2 px-6">
              <div
                class="cyber-card bg-black/60 p-4 hover:shadow-neon-cyan transition-all duration-300"
                :class="{ 'md:ml-auto': index % 2 !== 0 }"
              >
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs font-mono text-cyan-400">{{
                    exp.period
                  }}</span>
                  <span
                    class="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded"
                    >{{ exp.location }}</span
                  >
                </div>
                <h4 class="font-bold text-white">{{ exp.role }}</h4>
                <p class="text-sm text-cyan-400 mb-2">{{ exp.company }}</p>
                <p class="text-xs text-gray-400">{{ exp.achievements[0] }}</p>
              </div>
            </div>

            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-neon-cyan z-20"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
