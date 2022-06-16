<template>
  <div class="flex justify-center">
    <div class="p-10 bg-gray-600 w-1/2 rounded">
      <div class="w-full flex pb-5">
        <h1 class="text-white font-bold">USUARIOS</h1>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-900 dark:text-gray-400"
          >
            <tr class="text-white">
              <th scope="col" class="px-6 py-3">Nombre</th>
              <th scope="col" class="px-6 py-3">Curso</th>
              <th scope="col" class="px-6 py-3">Edad</th>
              <th scope="col" class="px-6 py-3">
                <span>Opciones</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in users"
              :key="user.name"
              class="text-white border-b bg-gray-700 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-white dark:text-white whitespace-nowrap"
              >
                {{ user.name }}
              </th>
              <td class="px-6 py-4">{{ user.course }}</td>
              <td class="px-6 py-4">{{ user.age }}</td>
              <td class="px-6 py-4">
                <NuxtLink to="/courses">
                  <span class="font-medium text-blue-300 hover:underline"
                    >Formulario curso</span
                  ></NuxtLink
                >
                <NuxtLink :to="`/courses/${user.name}`">
                  <span class="font-medium text-blue-300 hover:underline ml-3"
                    >show</span
                  ></NuxtLink
                >
                <NuxtLink :to="`/courses/edit`">
                  <span class="font-medium text-blue-300 hover:underline ml-3"
                    >edit</span
                  ></NuxtLink
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeLandingCard",
  data() {
    return {
      users: [
        {
          name: "Pablo",
          course: "programacion",
          age: "30",
        },
        {
          name: "Pedro",
          course: "Turismo",
          age: "22",
        },
        {
          name: "Juan",
          course: "Mecatronica",
          age: "19",
        },
        {
          name: "Mateo",
          course: "Ingles",
          age: "20",
        },
      ],
    };
  },
};
</script>
