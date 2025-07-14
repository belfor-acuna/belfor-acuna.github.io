<template>
  <section id="contact" class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
      <div
        class="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10"
      >
        <div class="flex flex-col gap-4 sm:gap-6">
          <h2 class="mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl">
            {{ t('cta.title') }}
          </h2>
          <p class="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-2xl text-lg">
            {{ t('cta.description') }}
          </p>
        </div>
        <!-- Contact Links -->
        <div class="flex items-center justify-center gap-8 sm:gap-12">
          <!-- LinkedIn -->
          <a
            href="https://linkedin.com/in/belfor-acuna"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
          >
            <div class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 flex items-center justify-center rounded-full p-4 transition-colors">
              <Icon icon="mdi:linkedin" class="h-8 w-8 text-white dark:text-primary-950" />
            </div>
            <span class="text-sm font-medium text-primary-950 dark:text-primary-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              LinkedIn
            </span>
          </a>

          <!-- Email -->
          <a
            href="mailto:b.acuna.cas@gmail.com"
            class="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
          >
            <div class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 flex items-center justify-center rounded-full p-4 transition-colors">
              <Icon icon="mdi:email" class="h-8 w-8 text-white dark:text-primary-950" />
            </div>
            <span class="text-sm font-medium text-primary-950 dark:text-primary-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              Email
            </span>
          </a>

          <!-- Discord -->
          <a
            href="https://discord.gg/QQDgfvEYZZ"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
          >
            <div class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 flex items-center justify-center rounded-full p-4 transition-colors">
              <Icon icon="ic:baseline-discord" class="h-8 w-8 text-white dark:text-primary-950" />
            </div>
            <span class="text-sm font-medium text-primary-950 dark:text-primary-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              Discord
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
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
