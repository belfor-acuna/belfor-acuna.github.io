<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
    @click="closeModal"
  >
    <div
      class="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ title }}
        </h3>
        <button
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- PDF Content -->
      <div class="p-4 h-[calc(90vh-120px)]">
        <iframe
          :src="pdfUrl"
          class="w-full h-full border-0 rounded shadow-inner"
          title="PDF Document"
          loading="lazy"
        ></iframe>
      </div>
      
      <!-- Footer -->
      <div class="flex justify-end p-4 border-t border-gray-200 dark:border-gray-700">
        <a
          :href="pdfUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 text-white dark:text-primary-950 px-4 py-2 rounded-lg text-sm font-medium transition inline-flex items-center gap-2 mr-3"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          {{ currentLang === 'es' ? 'Descargar PDF' : 'Download PDF' }}
        </a>
        <button
          @click="closeModal"
          class="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          {{ currentLang === 'es' ? 'Cerrar' : 'Close' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  pdfUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Document'
  }
})

const currentLang = ref('en')

// Language change handler
const handleLanguageChange = () => {
  const savedLang = localStorage.getItem('portfolio-language')
  if (savedLang && ['en', 'es'].includes(savedLang)) {
    currentLang.value = savedLang
  }
}

// Check current language
onMounted(() => {
  handleLanguageChange()
  window.addEventListener('languageChanged', handleLanguageChange)
})

// Emits
const emit = defineEmits(['close'])

// Methods
const closeModal = () => {
  emit('close')
}

// Handle escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

// Watch for modal open/close to handle body scroll
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleEscape)
  }
})

onUnmounted(() => {
  window.removeEventListener('languageChanged', handleLanguageChange)
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>
