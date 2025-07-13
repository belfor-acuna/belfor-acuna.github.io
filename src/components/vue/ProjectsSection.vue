<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col gap-12 sm:gap-16">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">{{ t('projects.title') }}</h2>
        <div class="grid gap-8 lg:grid-cols-3">
          <a
            v-for="(project, index) in projects"
            :key="project.id"
            :href="project.link"
            class="block"
          >
            <div class="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8 hover:bg-primary-500/20 dark:hover:bg-primary-400/20 transition-colors">
              <p class="text-sm">{{ project.step }}</p>
              <div class="flex flex-col gap-4">
                <h3 class="text-xl font-medium">{{ project.name }}</h3>
                <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { translations } from '../../translations/index.js'

const currentLang = ref('en')

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

// Projects computed property
const projects = computed(() => [
  {
    id: 'picbox',
    step: '01',
    name: t('projects.items.picbox.name'),
    description: t('projects.items.picbox.description'),
    link: "/picbox"
  },
  {
    id: 'stochastics',
    step: '02',
    name: t('projects.items.stochastics.name'),
    description: t('projects.items.stochastics.description'),
    link: "/stochastics"
  },
  {
    id: 'uxdesign',
    step: '03',
    name: t('projects.items.uxdesign.name'),
    description: t('projects.items.uxdesign.description'),
    link: "/uxdesign"
  },
  {
    id: 't2r2',
    step: '04',
    name: t('projects.items.t2r2.name'),
    description: t('projects.items.t2r2.description'),
    link: "/t2r2"
  },
  {
    id: 'playground',
    step: '05',
    name: t('projects.items.playground.name'),
    description: t('projects.items.playground.description'),
    link: undefined // No link for playground
  }
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
