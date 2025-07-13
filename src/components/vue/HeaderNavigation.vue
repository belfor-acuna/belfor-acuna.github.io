<template>
  <div class="flex items-center gap-x-8">
    <nav class="hidden lg:flex lg:gap-x-8" aria-label="Global">
      <a
        v-for="link in links"
        :key="link.ref"
        :href="link.href"
        class="text-sm font-medium text-primary-950 transition hover:text-primary-900 dark:text-primary-200 dark:hover:text-primary-300"
      >
        {{ link.name }}
      </a>
    </nav>
  </div>
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

// Links computed property
const links = computed(() => [
  {
    ref: '01',
    name: t('nav.home'),
    href: '/',
  },
  {
    ref: '02',
    name: t('nav.about'),
    href: '/about',
  },
  {
    ref: '03',
    name: t('nav.contact'),
    href: '/contact',
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
