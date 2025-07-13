<template>
  <nav class="divide-primary-900/10 dark:divide-primary-300/10 flex flex-col gap-1 divide-y">
    <a
      v-for="link in links"
      :key="link.ref"
      :href="link.href"
      class="text-primary-950 dark:text-primary-200 group inline-flex py-6 text-3xl font-medium tracking-tight transition focus-visible:outline-none sm:py-8 sm:text-4xl"
    >
      <div class="group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2">
        <div class="flex items-center gap-6">
          <span class="text-xs">{{ link.ref }}</span>
          <span>{{ link.name }}</span>
        </div>
        <svg
          class="h-6 w-6 text-primary-600 dark:text-primary-400"
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
      </div>
    </a>
  </nav>
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
