<template>
  <div>
    <div class="content">
      <div class="bg-white m-auto max-w-screen-xl p-8 rounded-md w-full flex">
        <div class="w-1/3 text-left">
          <div class="pb-10 mb-10 border-b border-gray-300">
            <div class="mb-10">
              <label for="avatarFileInput" class="w-100">
                <div
                  class="m-auto flex justify-center"
                  style="max-width: 200px;"
                >
                  <img
                    id="avatar"
                    :src="profile.avatar.secure_url"
                    :alt="profile.firstName"
                    class="avatar max-w-full"
                    v-if="
                      profile.avatar !== null && profile.avatar !== undefined
                    "
                  />
                  <font-awesome-icon icon="handshake" class="text-6xl" v-else />
                </div>
                <div class="avatar-link cursor-pointer text-center">
                  <input
                    class="hidden"
                    type="file"
                    ref="file"
                    accept="image/*"
                    id="avatarFileInput"
                    @change="onChosenFile"
                  />
                  Byt logotyp/profilbild
                </div>
              </label>
              <div class="chosen-avatar-box" v-if="chosenAvatar !== ''">
                <span>Välj bild: {{ chosenAvatar.name }}</span>
                <span>
                  <button
                    @click.prevent="onAvatarUpload"
                    class="btn btn-primary"
                    :disabled="
                      chosenAvatar === '' || chosenAvatar === undefined
                    "
                  >
                    Ladda upp
                  </button>
                </span>
              </div>
            </div>

            <div class="mb-6">
              <input
                id="grid-first-name"
                type="text"
                placeholder="Förnamn"
                v-model="profile.firstName"
                :class="{ 'border-red-500': $v.profile.firstName.$error }"
                @blur="$v.profile.firstName.$touch()"
                class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <p
                v-if="$v.profile.firstName.$error"
                class="text-red-500 text-xs italic"
              >
                Fältet är obligatoriskt
              </p>
            </div>
            <div class="mb-6">
              <input
                id="grid-last-name"
                type="text"
                placeholder="Efternamn"
                v-model="profile.lastName"
                :class="{ 'border-red-500': $v.profile.lastName.$error }"
                @blur="$v.profile.lastName.$touch()"
                class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <p
                v-if="$v.profile.lastName.$error"
                class="text-red-500 text-xs italic"
              >
                Fältet är obligatoriskt
              </p>
            </div>
            <div class="mb-6">
              <input
                id="grid-username"
                type="email"
                placeholder="E-post"
                v-model="profile.username"
                :class="{ 'border-red-500': $v.profile.username.$error }"
                @blur="$v.profile.username.$touch()"
                class="w-full appearance-none block bg-gray-200 text-gray-700 mb-3 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <p
                v-if="$v.profile.username.$error"
                class="text-red-500 text-xs italic"
              >
                Fältet är obligatoriskt
              </p>
            </div>
            <div class="flex justify-between items-center mb-6">
              <div class="relative">
                <select
                  v-model="profile.city"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  :class="{ 'border-red-500': $v.profile.city.$error }"
                  @change="$v.profile.city.$touch()"
                >
                  <option value>Välj ort</option>
                  <option value="falkenberg">Falkenberg</option>
                  <option value="halmstad">Halmstad</option>
                  <option value="varberg">Varberg</option>
                </select>
                <p
                  v-if="$v.profile.city.$error"
                  class="text-red-500 text-xs italic"
                ></p>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center mb-6">
              <div class="relative">
                <select
                  v-model="profile.accountType"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  :class="{ 'border-red-500': $v.profile.accountType.$error }"
                  @change="$v.profile.accountType.$touch()"
                >
                  <option value="1">Företag</option>
                  <option value="2">Förening</option>
                  <option value="3">Privatperson</option>
                </select>
                <p
                  v-if="$v.profile.accountType.$error"
                  class="text-red-500 text-xs italic"
                ></p>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex justify-end">
              <button class="btn btn-blue" @click="onUpdateProfile">
                Uppdatera profil
              </button>
            </div>
          </div>

          <div class="pb-10 mb-10">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  for="grid-password"
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Lösenord
                  <span class="required">*</span>
                </label>
                <input
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                  v-model="passwordForm.password"
                  :class="{ 'border-red-500': $v.passwordForm.password.$error }"
                  @blur="$v.passwordForm.password.$touch()"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                <p
                  v-if="$v.passwordForm.password.$error"
                  class="text-red-500 text-xs italic"
                >
                  Lösenordet matchar inte med kraven
                </p>
                <p class="text-gray-600 text-xs italic">
                  Kräver minst
                  {{ $v.passwordForm.password.$params.minLen.min }} tecken
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  for="grid-confirm-password"
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Bekräfta lösenord
                  <span class="required">*</span>
                </label>
                <input
                  id="grid-confirm-password"
                  type="password"
                  placeholder="******************"
                  v-model="passwordForm.confirmPassword"
                  :class="{
                    'border-red-500': $v.passwordForm.confirmPassword.$error,
                  }"
                  @blur="$v.passwordForm.confirmPassword.$touch()"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                <p
                  v-if="$v.passwordForm.confirmPassword.$error"
                  class="text-red-500 text-xs italic"
                >
                  Lösenordet matchar inte med kraven
                </p>
              </div>
            </div>
            <div class="flex justify-end">
              <button class="btn btn-blue" @click="onUpdatePassword">
                Uppdatera lösenord
              </button>
            </div>
          </div>
        </div>
        <div class="w-2/3 pl-8">
          <div class="grid gap-4">
            <Card :url="{ name: 'EditPost', params: { postId: 1 } }">
              <template slot="logo">
                <img
                  id="avatar"
                  :src="profile.avatar.secure_url"
                  :alt="profile.firstName"
                  class="avatar max-w-full"
                  v-if="profile.avatar !== null && profile.avatar !== undefined"
                />
                <font-awesome-icon icon="handshake" class="text-6xl" v-else />
              </template>
              <template slot="header">
                <div class="flex justify-between">
                  <div>Havanna</div>
                  <button class="appearance-none text-base avatar-link">
                    Redigera
                  </button>
                </div>
              </template>
              <template slot="ingress">
                Kom och köp lunch hos oss! Erbjuder givetsvis take away till
                rabatterat pris.
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Card from "../components/Card";
import axios from "axios";

export default {
  data() {
    return {
      profile: {
        firstName: "",
        lastName: "",
        username: "",
        city: "",
        accountType: 1,
        avatar: null,
      },
      chosenAvatar: "",
      passwordForm: {
        password: null,
        confirmPassword: null,
      },
      post: {},
    };
  },
  methods: {
    async onUpdateProfile() {
      this.$v.profile.$touch();

      if (this.$v.profile.$error) {
        console.log(this.$v.profile.$error);
        return;
      }

      const response = await this.$store.dispatch("profile/editProfile", {
        username: this.profile.username,
        firstName: this.profile.firstName,
        lastName: this.profile.lastName,
        city: this.profile.city,
        accountType: this.profile.accountType,
      });

      if (!response) {
        alert("Något gick fel vid sparandet");
        return;
      }

      alert("Sparat!");
    },
    async onUpdatePassword() {
      this.$v.passwordForm.$touch();

      if (this.$v.passwordForm.password.$error) {
        alert("The password requires at least 6 characters");
        return;
      }

      if (this.$v.passwordForm.confirmPassword.$error) {
        alert("The passwords does not match");
        return;
      }

      const response = await this.$store.dispatch(
        "auth/changePassword",
        this.passwordForm.password
      );

      if (!response) {
        alert("Något gick fel vid sparandet");
        return;
      }

      this.$v.passwordForm.$reset();
      this.passwordForm.password = "";
      this.passwordForm.confirmPassword = "";
      alert("Sparat!");
    },
    onChosenFile() {
      if (this.$refs.file.files[0] === undefined) {
        return false;
      }
      this.chosenAvatar = this.$refs.file.files[0];
    },

    onAvatarUpload() {
      if (this.chosenAvatar === "") {
        alert("Choose an image");
        return;
      }

      this.uploadAvatar(this.chosenAvatar);
    },

    async uploadAvatar(file = null) {
      if (file === null) {
        alert("Somethings wrong! Try again");
        return;
      }

      const url = "https://api.cloudinary.com/v1_1/letstravel/upload";
      let formData = new FormData();
      formData.append("upload_preset", "solidarity_avatars");
      formData.append("tags", "avatar_upload");
      formData.append("file", file);

      const response = await axios
        .post(url, formData)
        .then((res) => res.data)
        .catch((err) => console.log(err));

      this.$store.dispatch("profile/editAvatar", response);
      this.chosenAvatar = "";
      this.profile.avatar = { ...response };
    },
  },
  validations: {
    profile: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      city: {
        required,
      },
      accountType: {
        required,
      },
      username: {
        required,
        email,
      },
    },
    passwordForm: {
      password: {
        required,
        minLen: minLength(6),
      },
      confirmPassword: {
        sameAs: sameAs("password"),
      },
    },
  },
  created() {
    this.profile.userId = this.$store.getters["auth/getUserId"];
    this.profile = this.$store.getters["profile/getProfile"];
    this.post = this.$store.getters["post/getPost"];
    console.log(this.profile);
  },
  components: {
    Card,
  },
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
.chosen-avatar-box {
  display: grid;
  text-align: center;
}
.avatar-container {
  position: absolute;
  margin: 0 auto;
  right: 0;
  left: 0;
  top: -55px;
}

.form-control.light-weight {
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
}

.avatar-box {
  height: 75px;
  width: 75px;
  margin: 0 auto;
  border-radius: 50%;
  background: blue;
  z-index: 9999;
  overflow: hidden;
}

.avatar-placeholder {
  font-size: 3rem;
  line-height: 75px;
  text-align: center;
  color: #fff;
}
.avatar-link {
  color: #3490dc;
}

.avatar-link:hover {
  text-decoration: underline;
}

.profile-information {
  padding-top: 60px;
}
</style>
