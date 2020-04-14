<template>
  <div class="bg-white content max-w-screen-xl mx-auto pb-8 pr-8">
    <div
      class="border-top bg-white border-gray-400 flex lg:max-w-full max-w-sm rounded-lg overflow-hidden w-full"
      v-if="!editMode"
    >
      <div class="flex flex-col items-center justify-center w-1/4">
        <div class="p-4">
          <img
            id="avatar"
            :src="profile.avatar.secure_url"
            :alt="profile.firstName"
            class="avatar max-w-full"
            v-if="profile.avatar !== null && profile.avatar !== undefined"
          />
          <font-awesome-icon icon="handshake" class="text-6xl" v-else />
        </div>
        <button class="btn btn-blue mb-4">0000-0000000</button>
        <button class="btn btn-blue mb-4">xxxxx @ xxxx . se</button>
        <a href="#" target="_blank" class="mb-4">wwww.wwww.ww</a>
      </div>
      <div class="p-4 text-left w-3/4">
        <div class="flex justify-between items-center">
          <h1 class="m-0 pb-8 pt-6">Havanna</h1>
          <button class="btn btn-blue h-full" @click="editMode = true">
            Redigera
          </button>
        </div>
        <div>
          Kom och köp lunch hos oss! Erbjuder givetsvis take away till
          rabatterat pris.
          <br />
          <br />Vi erbjuder även sittningar för större sällskap i egna rum.
          <br />
          <br />Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
        </div>
      </div>
    </div>
    <div
      class="border-top bg-white border-gray-400 flex lg:max-w-full max-w-sm rounded-lg overflow-hidden w-full"
      v-else
    >
      <div class="p-4 text-left w-3/4">
        <div class="flex justify-between items-center">
          <h1 class="m-0 pb-8 pt-6">Redigering av inlägg</h1>
          <div>
            <button class="btn bg-green-400 text-white h-full" @click="onSave">
              Spara
            </button>
            <button class="btn btn-gray h-full ml-4" @click="onCancel">
              Avbryt
            </button>
          </div>
        </div>
        <div class="mb-6">
          <label for="titleInput"
            >Typ av inlägg <span class="text-red-500">*</span></label
          >
          <div class="relative w-1/4">
            <select
              v-model="post.type"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              :class="{ 'border-red-500': $v.post.type.$error }"
              @change="$v.post.type.$touch()"
            >
              <option value="1">Behöver hjälp med</option>
              <option value="2">Kan hjälpa till med</option>
            </select>
            <p
              v-if="$v.post.type.$error"
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
        <div class="mb-6 form-group">
          <label for="titleInput"
            >Rubrik <span class="text-red-500">*</span></label
          >
          <input
            id="titleInput"
            type="text"
            placeholder="Rubrik"
            v-model="post.title"
            :class="{ 'border-red-500': $v.post.title.$error }"
            @blur="$v.post.title.$touch()"
            class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <small>Exempelvis namnet på ert företaget eller föreningen</small>
        </div>
        <div class="mb-6 form-group">
          <label for="ingressInput"
            >Ingress <span class="text-red-500">*</span></label
          >
          <textarea
            id="ingressInput"
            type="text"
            placeholder="Ingress"
            v-html="post.ingress"
            :class="{ 'border-red-500': $v.post.ingress.$error }"
            @blur="$v.post.ingress.$touch()"
            maxlength="100"
            class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-24"
          />
          <small
            >Kort beskrivning som kommer synas vid förhandsvisningen. Max 100
            tecken.</small
          >
        </div>
        <div class="mb-6 form-group">
          <label for="contentInput"
            >Innehåll <span class="text-red-500">*</span></label
          >
          <textarea
            id="contentInput"
            type="text"
            placeholder="Innehåll"
            v-model="post.content"
            :class="{ 'border-red-500': $v.post.content.$error }"
            @blur="$v.post.content.$touch()"
            class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
          />
          <small
            >Fritext för vad ni behöver hjälp med, kan bidra med, och/eller
            annan relevant information.</small
          >
        </div>
        <div class="mb-6 form-group">
          <label for="phoneInput">Telefonnummer</label>
          <input
            id="phoneInput"
            type="text"
            placeholder="Telefonnummer"
            v-model="post.phone"
            class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div class="mb-6 form-group">
          <label for="EmailInput"
            >E-post <span class="text-red-500">*</span></label
          >
          <input
            id="EmailInput"
            type="email"
            placeholder="E-post"
            v-model="post.email"
            :class="{ 'border-red-500': $v.post.email.$error }"
            @blur="$v.post.email.$touch()"
            class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div class="mb-6 form-group">
          <label for="websiteInput">Hemsida</label>
          <input
            id="websiteInput"
            type="text"
            placeholder="Hemsida"
            v-model="post.website"
            class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div class="flex justify-between items-center">
          <span class="text-red-500">* = obligatoriska fält</span>
          <div>
            <button class="btn bg-green-400 text-white h-full" @click="onSave">
              Spara
            </button>
            <button class="btn btn-gray h-full ml-4" @click="onCancel">
              Avbryt
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      editMode: false,
      profile: {},
      post: {
        title: "Havanna",
        ingress:
          "Kom och köp lunch hos oss! Erbjuder givetsvis take away till rabatterat pris. <br /><br />Vi erbjuder även sittningar för större sällskap i egna rum.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        type: 1,
        email: "xxxxx @ xxxx . se",
        phone: "0000-0000000",
        website: "wwww.wwww.ww",
      },
    };
  },
  methods: {
    async onSave() {
      this.$v.post.$touch();

      if (this.$v.post.$error) {
        console.log(this.$v.post.$error);
        return;
      }

      // const response = await this.$store.dispatch("post/editPost", {
      //   title: this.post.title,
      //   ingress: this.post.ingress,
      //   content: this.post.content,
      //   type: this.post.type,
      //   email: this.post.email,
      //   phone: this.post.phone,
      //   website: this.post.website,
      // });

      // if (!response) {
      //   alert("Något gick fel vid sparandet");
      //   return;
      // }

      alert("Sparat!");
    },
    onCancel() {
      this.editMode = false;
    },
  },
  validations: {
    post: {
      title: {
        required,
      },
      ingress: {
        required,
        maxLen: maxLength(100),
      },
      content: {
        required,
      },
      type: {
        required,
      },
      email: {
        required,
      },
    },
  },
  created() {
    this.profile = this.$store.getters["profile/getProfile"];
    // this.post = this.$store.getters["post/getPost"];
  },
};
</script>
