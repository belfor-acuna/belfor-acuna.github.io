<template>
  <!-- Navigation links -->
  <nav class="flex flex-col gap-3">
      <transition-group
        name="stagger"
        tag="div"
        class="flex flex-col gap-3"
        appear
      >
      <a
        v-for="(link, index) in links"
        :key="link.ref"
        :href="link.href"
        class="group relative overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none"
        :style="{ transitionDelay: `${index * 50}ms` }"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
        @click="(e) => {
          if (!handleNavigation(link.href)) {
            e.preventDefault()
          }
        }"
      >
      <!-- Background gradient that appears on hover -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-primary-400/15 to-primary-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>

      <!-- Border glow effect -->
      <div
        class="absolute inset-0 rounded-2xl border border-primary-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>

      <!-- Main content -->
      <div class="relative bg-primary-50/80 dark:bg-primary-900/50 backdrop-blur-sm border border-primary-200/30 dark:border-primary-700/30 rounded-2xl px-5 py-5 sm:px-7 sm:py-6 transition-all duration-300 group-hover:bg-primary-100/80 dark:group-hover:bg-primary-800/60 group-hover:border-primary-300/40 dark:group-hover:border-primary-600/40 group-hover:shadow-lg group-hover:shadow-primary-500/10">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <!-- Reference number with enhanced styling -->
            <span
              class="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500/10 dark:bg-primary-400/10 text-xs font-medium text-primary-600 dark:text-primary-400 transition-all duration-300 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-400/20 group-hover:scale-110"
            >
              {{ link.ref }}
            </span>

            <!-- Link name with improved typography -->
            <span
              class="text-xl sm:text-2xl font-medium tracking-tight text-primary-950 dark:text-primary-200 transition-all duration-300 group-hover:text-primary-900 dark:group-hover:text-primary-100"
            >
              {{ link.name }}
            </span>
          </div>

          <!-- Arrow with enhanced animation -->
          <div class="relative">
            <svg
              class="h-5 w-5 text-primary-600 dark:text-primary-400 transition-all duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-300 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>

            <!-- Subtle glow effect behind arrow -->
            <div
              class="absolute inset-0 rounded-full bg-primary-500/20 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
          </div>
        </div>

        <!-- Subtle bottom accent line -->
        <div
          class="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></div>
      </div>
    </a>
    </transition-group>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { translations } from '../../translations/index.js'

const currentLang = ref('en')
const hoveredIndex = ref(null)

// Function to close menu (communicates with Alpine.js)
const closeMenu = () => {
  // Dispatch custom event to close menu
  window.dispatchEvent(new CustomEvent('close-menu'))
}

// Function to handle navigation with smooth scroll
const handleNavigation = (href) => {
  if (href.startsWith('/#')) {
    // Handle anchor links with smooth scroll
    const targetId = href.substring(2) // Remove '/#'
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Close menu first
      closeMenu()

      // Wait a bit for menu to close, then scroll
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 300)

      return false // Prevent default navigation
    }
  }

  // For regular links, close menu and navigate normally
  closeMenu()
  return true
}

// Translation function
const t = (key) => {
  const keys = key.split('.')
  let value = translations[currentLang.value]
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k]
    } else {
      return key
    }
  }
  
  return value || key
}

// Links computed property
const links = computed(() => [
  {
    ref: '01',
    name: t('nav.expertise'),
    href: '/#expertise',
  },
  {
    ref: '02',
    name: t('nav.achievements'),
    href: '/#achievements',
  },
  {
    ref: '03',
    name: t('nav.experience'),
    href: '/#experience',
  },
  {
    ref: '04',
    name: t('nav.about'),
    href: '/about',
  },
])

// Language change handler
const handleLanguageChange = () => {
  const savedLang = localStorage.getItem('portfolio-language')
  if (savedLang && ['en', 'es'].includes(savedLang)) {
    currentLang.value = savedLang
  }
}

// Listen for storage changes
const handleStorageChange = (e) => {
  if (e.key === 'portfolio-language' && ['en', 'es'].includes(e.newValue)) {
    currentLang.value = e.newValue
  }
}

onMounted(() => {
  handleLanguageChange()
  window.addEventListener('storage', handleStorageChange)
  window.addEventListener('languageChanged', handleLanguageChange)
})

onUnmounted(() => {
  window.removeEventListener('storage', handleStorageChange)
  window.removeEventListener('languageChanged', handleLanguageChange)
})
</script>

<style scoped>
/* Staggered enter animations */
.stagger-enter-active {
  transition: all 0.4s ease-out;
}

.stagger-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.stagger-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Subtle pulse animation for the reference numbers */
.group:hover span:first-child {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Enhanced focus styles */
.group:focus-visible {
  outline: 2px solid theme('colors.primary.500');
  outline-offset: 4px;
}
</style>
