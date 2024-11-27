<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center mt-5">
      <div class="hidden md:block">
        <NuxtLink
          to="/"
          class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >Moses Pöhls</NuxtLink
        >
      </div>
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
      <Menu />
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style>
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
