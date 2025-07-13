<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col gap-12 sm:gap-16">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">{{ t('certifications.title') }}</h2>

        <!-- Certifications Section -->
        <div class="flex flex-col gap-8">
          <h3 class="text-2xl font-medium tracking-tight">Certifications</h3>
          <div class="grid gap-6 lg:grid-cols-1">
            <div
              v-for="cert in certifications"
              :key="cert.id"
              class="bg-white dark:bg-primary-400/10 border border-primary-200 dark:border-primary-400/20 flex flex-col gap-6 rounded-3xl px-6 py-8 shadow-sm"
            >
              <div class="flex flex-col lg:flex-row items-start gap-6">
                <div class="flex-shrink-0">
                  <Icon :icon="cert.icon" width="48" height="48" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <h4 class="text-xl font-medium text-primary-950 dark:text-primary-100">{{ cert.name }}</h4>
                    <span
                      v-if="cert.badge"
                      class="bg-primary-600 dark:bg-primary-400 text-white dark:text-primary-950 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      Certified
                    </span>
                  </div>
                  <p class="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {{ cert.issuer }} • {{ cert.date }}
                  </p>
                  <p class="text-primary-950/70 dark:text-primary-200/70 text-base mb-4">
                    {{ cert.description }}
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span
                      v-for="skill in cert.skills"
                      :key="skill"
                      class="bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm"
                    >
                      {{ skill }}
                    </span>
                  </div>
                  <div v-if="cert.certificateUrl" class="flex gap-3 mb-4">
                    <a
                      :href="cert.certificateUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 text-white dark:text-primary-950 px-4 py-2 rounded-lg text-sm font-medium transition inline-flex items-center gap-2"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      {{ t('certifications.cert.buttons.certificate') }}
                    </a>
                    <a
                      v-if="cert.credlyBadgeId"
                      :href="`https://www.credly.com/badges/${cert.credlyBadgeId}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 text-white dark:text-primary-950 px-4 py-2 rounded-lg text-sm font-medium transition inline-flex items-center gap-2"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      {{ t('certifications.cert.buttons.badge') }}
                    </a>
                  </div>
                </div>
                <div v-if="cert.credlyBadgeId" class="flex-shrink-0 hidden lg:block">
                  <div class="credly-badge-container">
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      :data-share-badge-id="cert.credlyBadgeId"
                      data-share-badge-host="https://www.credly.com"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements Section -->
        <div class="flex flex-col gap-8">
          <h3 class="text-2xl font-medium tracking-tight">{{ t('certifications.achievements.title') }}</h3>
          <div class="grid gap-6 lg:grid-cols-2">
            <div
              v-for="achievement in achievements"
              :key="achievement.id"
              class="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col gap-4 rounded-3xl px-6 py-8"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <Icon :icon="achievement.icon" width="32" height="32" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <h4 class="text-lg font-medium">{{ achievement.name }}</h4>
                    <span class="bg-primary-200 dark:bg-primary-700 text-primary-800 dark:text-primary-200 px-2 py-1 rounded text-xs font-medium">
                      {{ achievement.category }}
                    </span>
                  </div>
                  <p class="text-primary-950/70 dark:text-primary-200/70 text-sm">
                    {{ achievement.description }}
                  </p>
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

// Certifications computed property
const certifications = computed(() => [
  {
    id: 'cert-1',
    name: t('certifications.cert.title'),
    issuer: t('certifications.cert.issuer'),
    date: t('certifications.cert.year'),
    badge: true,
    description: t('certifications.cert.description'),
    icon: 'logos:kubernetes',
    skills: [
      t('certifications.cert.topics.fundamentals'),
      t('certifications.cert.topics.orchestration'),
      t('certifications.cert.topics.cloudNative'),
      t('certifications.cert.topics.podManagement'),
      t('certifications.cert.topics.networking')
    ],
    certificateUrl: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/0c0cf1ac-6d97-476c-a294-2cc068b44a94-belfor-acua-ad566f2d-f2c4-4f19-a0c7-11c5a15a1c44-certificate.pdf',
    credlyBadgeId: 'b6f48d73-8034-4991-8d09-fc2484b02d5b'
  }
])

// Achievements computed property
const achievements = computed(() => [
  {
    id: 'achievement-1',
    name: t('certifications.achievements.items.k8sMigration.name'),
    description: t('certifications.achievements.items.k8sMigration.description'),
    icon: 'logos:kubernetes',
    category: t('certifications.achievements.items.k8sMigration.category')
  },
  {
    id: 'achievement-2',
    name: t('certifications.achievements.items.secureCI.name'),
    description: t('certifications.achievements.items.secureCI.description'),
    icon: 'logos:github-actions',
    category: t('certifications.achievements.items.secureCI.category')
  },
  {
    id: 'achievement-3',
    name: t('certifications.achievements.items.incidentResolution.name'),
    description: t('certifications.achievements.items.incidentResolution.description'),
    icon: 'logos:postgresql',
    category: t('certifications.achievements.items.incidentResolution.category')
  },
  {
    id: 'achievement-4',
    name: t('certifications.achievements.items.gitops.name'),
    description: t('certifications.achievements.items.gitops.description'),
    icon: 'logos:argo-icon',
    category: t('certifications.achievements.items.gitops.category')
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
  
  // Load Credly badge script
  if (typeof window !== 'undefined' && !window.credlyBadgeLoaded) {
    const script = document.createElement('script')
    script.src = '//cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    document.head.appendChild(script)
    window.credlyBadgeLoaded = true
  }
})

onUnmounted(() => {
  window.removeEventListener('storage', handleStorageChange)
  window.removeEventListener('languageChanged', handleLanguageChange)
})
</script>
