<template>
  <section class="py-16 sm:py-20">
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
        <a
          href="/contact"
          class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {{ t('cta.button') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
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
