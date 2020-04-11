<template>
  <div>
    <div class="content">
      <form class="bg-white m-auto max-w-lg p-16 rounded-md w-full" @submit.prevent="onLogin">
        <div class="w-full">
          <label
            for="grid-username"
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
          >Användarnamn (E-post)</label>
          <input
            id="grid-username"
            type="email"
            placeholder="Användarnamn"
            v-model="username"
            :class="{ 'border-red-500': $v.username.$error }"
            @blur="$v.username.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 mb-3 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div class="w-full">
          <label
            for="grid-password"
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
          >Lösenord</label>
          <input
            id="grid-password"
            type="password"
            placeholder="******************"
            v-model="password"
            :class="{ 'border-red-500': $v.password.$error }"
            @blur="$v.password.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div class="flex justify-end items-center mt-5">
          <button class="btn btn-blue" @click="onLogin">Logga in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onLogin() {
      this.$v.$touch();

      if (this.$v.$error) return;

      this.$store.dispatch("auth/login", {
        username: this.username,
        password: this.password
      });
    }
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  }
};
</script>

<style scoped>
.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

input.invalid {
  border: 1px solid red;
  background-color: #ffc9aa;
}

span.required {
  color: red;
}
</style>
