import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "F:/PROJECTS/2023/highjob/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}