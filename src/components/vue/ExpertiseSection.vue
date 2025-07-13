<template>
  <section class="py-16 sm:py-20" :id="id">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">{{ t('expertise.title') }}</h2>
        <div class="lg:col-span-2">
          <dl class="-mt-3">
            <div
              v-for="(feature, index) in features"
              :key="feature.id"
              class="rounded-3xl px-4 transition"
              :class="{ 'bg-primary-500/10 dark:bg-primary-400/10': selectedIndex === index }"
            >
              <dt
                class="border-b text-lg transition"
                :class="{
                  'border-transparent': selectedIndex === index || selectedIndex === index + 1,
                  'border-primary-900/10 dark:border-primary-300/10': !(selectedIndex === index || selectedIndex === index + 1)
                }"
              >
                <button
                  type="button"
                  class="group block w-full py-6 text-left transition focus-visible:outline-none"
                  :aria-controls="feature.id"
                  @click="toggle(index)"
                  :aria-expanded="selectedIndex === index"
                >
                  <div class="flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200">
                    <div class="flex gap-x-6 items-center">
                      <span class="font-medium">{{ feature.name }}</span>
                      <div class="flex items-center justify-between gap-x-6">
                        <div
                          v-for="icon in feature.icons"
                          :key="icon.name"
                          class="relative"
                          :title="icon.name"
                        >
                          <div class="p-2 hover:bg-primary-100 dark:hover:bg-primary-800 rounded-lg transition-colors duration-200">
                            <Icon :icon="icon.icon" width="24" height="24" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <span class="ml-6 flex h-7 items-center">
                      <svg
                        class="h-6 w-6 rotate-0 transform text-primary-600 transition duration-200 ease-in-out dark:text-primary-400"
                        :class="{ '-rotate-180': selectedIndex === index, 'rotate-0': selectedIndex !== index }"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" />
                      </svg>
                    </span>
                  </div>
                </button>
              </dt>
              <dd
                v-show="selectedIndex === index"
                class="pb-6 pr-6"
                :id="feature.id"
              >
                <p class="text-base text-primary-950/70 dark:text-primary-200/70">
                  {{ feature.description }}
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { translations } from '../../translations/index.js'

// Props
const props = defineProps({
  id: String
})

const currentLang = ref('en')
const selectedIndex = ref(null)

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

// Features computed property
const features = computed(() => [
  {
    id: 'expertise-1',
    name: t('expertise.items.containers.name'),
    icons: [
      { name: 'Kubernetes', icon: 'logos:kubernetes' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Helm', icon: 'logos:helm' },
      { name: 'Google Kubernetes Engine', icon: 'logos:google-cloud' },
      { name: 'Amazon EKS', icon: 'skill-icons:aws-light' },
    ],
    description: t('expertise.items.containers.description'),
  },
  {
    id: 'expertise-2',
    name: t('expertise.items.cicd.name'),
    icons: [
      { name: 'ArgoCD', icon: 'logos:argo-icon' },
      { name: 'GitLab CI', icon: 'logos:gitlab' },
      { name: 'GitHub Actions', icon: 'logos:github-actions' },
      { name: 'Bash', icon: 'logos:bash-icon' },
    ],
    description: t('expertise.items.cicd.description'),
  },
  {
    id: 'expertise-3',
    name: t('expertise.items.monitoring.name'),
    icons: [
      { name: 'ArgoCD', icon: 'logos:argo-icon' },
      { name: 'Prometheus', icon: 'logos:prometheus' },
      { name: 'Grafana', icon: 'logos:grafana' },
    ],
    description: t('expertise.items.monitoring.description'),
  },
  {
    id: 'expertise-4',
    name: t('expertise.items.cloud.name'),
    icons: [
      { name: 'Google Cloud', icon: 'logos:google-cloud' },
      { name: 'AWS', icon: 'skill-icons:aws-light' },
      { name: 'Firebase', icon: 'devicon:firebase' },
    ],
    description: t('expertise.items.cloud.description'),
  },
  {
    id: 'expertise-5',
    name: t('expertise.items.networking.name'),
    icons: [
      { name: 'Traefik', icon: 'logos:traefik' },
      { name: 'Nginx', icon: 'logos:nginx' },
      { name: 'Cloudflare', icon: 'devicon:cloudflare' },
      { name: 'Linux', icon: 'logos:linux-tux' },
    ],
    description: t('expertise.items.networking.description'),
  },
  {
    id: 'expertise-6',
    name: t('expertise.items.fullstack.name'),
    icons: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'React', icon: 'logos:react' },
      { name: 'NestJS', icon: 'logos:nestjs' },
      { name: 'Express', icon: 'skill-icons:expressjs-dark' },
      { name: 'Spring Boot', icon: 'simple-icons:springboot' },
    ],
    description: t('expertise.items.fullstack.description'),
  },
])

// Toggle function
const toggle = (index) => {
  selectedIndex.value = selectedIndex.value === index ? null : index
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
