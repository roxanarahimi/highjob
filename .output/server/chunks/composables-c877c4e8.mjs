import { u as useNuxtApp } from './server.mjs';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}

export { useHead as u };
//# sourceMappingURL=composables-c877c4e8.mjs.map
