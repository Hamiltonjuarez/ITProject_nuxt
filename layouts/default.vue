<template>
  <div class="'my-20 h-screen lg:grid bg-gray-800 lg:grid-cols-6'">
    <div class="my-12 py-12">
      <main class="lg:relative lg:col-span-5">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  middleware: ['auth-routes'],
};
</script>
