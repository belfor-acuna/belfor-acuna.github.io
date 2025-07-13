<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col gap-16">
        <div class="flex flex-col items-start gap-8 sm:gap-10">
          <div class="flex max-w-xl flex-col items-start gap-4 sm:gap-6">
            <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              {{ t('hero.greeting') }} <span class="text-primary-600 dark:text-primary-400">{{ t('hero.name') }}</span> - {{ t('hero.title') }} 🐱
            </h1>
            <p class="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">
              {{ t('hero.subtitle') }}
            </p>
          </div>
          <a
            href="/contact"
            class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {{ t('hero.cta.contact') }}
          </a>
        </div>
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

// Listen for storage changes (when language changes in other components)
const handleStorageChange = (e) => {
  if (e.key === 'portfolio-language' && ['en', 'es'].includes(e.newValue)) {
    currentLang.value = e.newValue
  }
}

onMounted(() => {
  handleLanguageChange()
  window.addEventListener('storage', handleStorageChange)
  
  // Also listen for custom language change events
  window.addEventListener('languageChanged', handleLanguageChange)
})

onUnmounted(() => {
  window.removeEventListener('storage', handleStorageChange)
  window.removeEventListener('languageChanged', handleLanguageChange)
})
</script>
