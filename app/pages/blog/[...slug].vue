<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentDoc>
      <template #not-found>
        <h1>Content not Found (404)</h1>
        <p>This blog posts could not be found.</p>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{ 'col-span-4': doc.toc, 'col-span-6': !doc.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div class="col-span-2 not-prose" v-if="doc.toc">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Table of contents</div>
              <nav><TocLinks :links="doc.body.toc.links" /></nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
const route = useRoute();
console.log(route.params.slug);
</script>
