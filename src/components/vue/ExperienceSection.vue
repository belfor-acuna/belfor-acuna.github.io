<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col gap-12 sm:gap-16">
        <div class="text-left">
          <h2 class="text-3xl font-medium tracking-tight sm:text-4xl mb-4">{{ t('experience.title') }}</h2>
          <p class="text-primary-950/70 dark:text-primary-200/70 text-lg max-w-3xl">
            {{ t('experience.subtitle') }}
          </p>
        </div>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-700 hidden lg:block"></div>
          
          <div class="space-y-12">
            <div
              v-for="(exp, index) in experiences"
              :key="exp.id"
              class="relative flex flex-col lg:flex-row gap-8 lg:gap-12"
            >
              <!-- Timeline dot -->
              <div class="hidden lg:flex absolute left-6 w-5 h-5 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-primary-950 shadow-lg"></div>
              
              <!-- Icon and period -->
              <div class="flex-shrink-0 lg:ml-16">
                <div class="flex items-center gap-4 mb-4 lg:mb-0">
                  <div :class="`p-3 rounded-xl bg-${exp.color}-100 dark:bg-${exp.color}-900/30`">
                    <Icon :icon="exp.icon" width="32" height="32" />
                  </div>
                  <div class="lg:hidden">
                    <p class="text-sm font-medium text-primary-600 dark:text-primary-400">{{ exp.period }}</p>
                    <p class="text-xs text-primary-950/60 dark:text-primary-200/60">{{ exp.location }} • {{ exp.type }}</p>
                  </div>
                </div>
                <div class="hidden lg:block text-center">
                  <p class="text-sm font-medium text-primary-600 dark:text-primary-400">{{ exp.period }}</p>
                  <p class="text-xs text-primary-950/60 dark:text-primary-200/60 mt-1">{{ exp.location }}</p>
                  <span :class="`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full bg-${exp.color}-100 dark:bg-${exp.color}-900/30 text-${exp.color}-800 dark:text-${exp.color}-200`">
                    {{ exp.type }}
                  </span>
                </div>
              </div>
              
              <!-- Content -->
              <div class="flex-1 bg-white dark:bg-primary-900/50 rounded-2xl p-6 lg:p-8 shadow-sm border border-primary-100 dark:border-primary-800">
                <div class="mb-4">
                  <h3 class="text-xl font-semibold text-primary-950 dark:text-primary-100 mb-1">{{ exp.role }}</h3>
                  <p class="text-primary-600 dark:text-primary-400 font-medium">{{ exp.company }}</p>
                  <div class="lg:hidden mt-2">
                    <span :class="`inline-block px-2 py-1 text-xs font-medium rounded-full bg-${exp.color}-100 dark:bg-${exp.color}-900/30 text-${exp.color}-800 dark:text-${exp.color}-200`">
                      {{ exp.type }}
                    </span>
                  </div>
                </div>
                
                <p class="text-primary-950/70 dark:text-primary-200/70 mb-6">{{ exp.description }}</p>
                
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-primary-950 dark:text-primary-100 mb-3">{{ t('experience.labels.achievements') }}</h4>
                  <ul class="space-y-2">
                    <li
                      v-for="achievement in exp.achievements"
                      :key="achievement"
                      class="flex items-start gap-3"
                    >
                      <svg class="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-sm text-primary-950/70 dark:text-primary-200/70">{{ achievement }}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="text-sm font-semibold text-primary-950 dark:text-primary-100 mb-3">{{ t('experience.labels.technologies') }}</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in exp.technologies"
                      :key="tech"
                      class="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200 rounded-full"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
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

// Experiences computed property
const experiences = computed(() => [
  {
    id: 'exp-1',
    company: t('experience.items.etransparencia.company'),
    role: t('experience.items.etransparencia.role'),
    period: t('experience.items.etransparencia.period'),
    location: t('experience.items.etransparencia.location'),
    type: t('experience.items.etransparencia.type'),
    description: t('experience.items.etransparencia.description'),
    achievements: t('experience.items.etransparencia.achievements'),
    technologies: ['Kubernetes (k3s)', 'Traefik', 'Helm', 'ArgoCD', 'GitHub Actions', 'Kubeseal', 'PostgreSQL', 'Cloudflare'],
    icon: 'logos:kubernetes',
    color: 'blue'
  },
  {
    id: 'exp-2',
    company: t('experience.items.tendify.company'),
    role: t('experience.items.tendify.role'),
    period: t('experience.items.tendify.period'),
    location: t('experience.items.tendify.location'),
    type: t('experience.items.tendify.type'),
    description: t('experience.items.tendify.description'),
    achievements: t('experience.items.tendify.achievements'),
    technologies: ['Vue 3', 'NestJS', 'Flask', 'Express', 'Kubernetes (k3s)', 'GitLab CI/CD', 'OpenAI API', 'Cloudflare R2'],
    icon: 'logos:vue',
    color: 'green'
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
