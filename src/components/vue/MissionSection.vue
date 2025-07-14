<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <!-- Image -->
        <img
          class="mx-auto w-full max-w-xl rounded-3xl"
          width="576"
          height="500"
          src="/assets/hackathon.jpeg"
          alt="Me working on a project"
        />

        <!-- Content -->
        <div class="flex flex-col gap-10">
          <!-- Mission/Introduction -->
          <div class="space-y-8 sm:space-y-12">
            <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">{{ t('mission.title') }}</h2>
            <div class="space-y-6">
              <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                {{ t('mission.content.intro') }}
              </p>
              <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                {{ t('mission.content.evolution') }}
              </p>
              <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                {{ t('mission.content.passion') }}
              </p>
              <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                {{ t('mission.content.responsibility') }}
              </p>
              <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                {{ t('mission.content.personal') }}
              </p>
            </div>
          </div>

          <!-- Stats -->
          <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6">
              <dt class="text-base">{{ t('mission.stats.age.label') }}</dt>
              <dd class="text-3xl font-medium tracking-tight">{{ t('mission.stats.age.value') }}</dd>
            </div>
            <div class="border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6">
              <dt class="text-base">{{ t('mission.stats.pipelines.label') }}</dt>
              <dd class="text-3xl font-medium tracking-tight">{{ t('mission.stats.pipelines.value') }}</dd>
            </div>
            <div class="border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6">
              <dt class="text-base">{{ t('mission.stats.cats.label') }}</dt>
              <dd class="text-3xl font-medium tracking-tight">{{ t('mission.stats.cats.value') }}</dd>
            </div>
            <div class="border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6">
              <dt class="text-base">{{ t('mission.stats.programming.label') }}</dt>
              <dd class="text-3xl font-medium tracking-tight">{{ t('mission.stats.programming.value') }}</dd>
            </div>
          </dl>
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

// Listen for storage changes
const handleStorageChange = (e) => {
  if (e.key === 'portfolio-language' && ['en', 'es'].includes(e.newValue)) {
    currentLang.value = e.newValue
  }
}

// Listen for custom language change events
const handleCustomLanguageChange = (e) => {
  if (['en', 'es'].includes(e.detail)) {
    currentLang.value = e.detail
  }
}

onMounted(() => {
  handleLanguageChange()
  window.addEventListener('storage', handleStorageChange)
  window.addEventListener('languageChanged', handleCustomLanguageChange)
})

onUnmounted(() => {
  window.removeEventListener('storage', handleStorageChange)
  window.removeEventListener('languageChanged', handleCustomLanguageChange)
})
</script>
