<template>
  <main
    v-if="!registered"
    id="register-form"
    class="shadow d-flex flex-xl-row flex-lg-row flex-md-column flex-column justify-content-between align-item-center bg-white container p-4 rounded"
  >
    <section
      class="logo col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-item-center"
    >
      <div>
        <img :src="logo" alt="logo" />
      </div>
    </section>
    <section
      class="login col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center"
    >
      <div class="my-4">
        <h1 class="display-2 text-center">Register</h1>
      </div>
      <div>
        <div class="form-group justify-content-between row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
              v-model="user.username"
              :class="
                user.checks.username ? 'bg-light' : 'bg-danger text-light'
              "
              @keyup="checkUsername()"
            />
            <small v-if="!user.checks.username" class="form-text text-muted"
              >Username is not available</small
            >
          </div>
          <div
            class="d-xl-none d-lg-none d-md-none d-sm-none d-block w-100 col-12 my-2"
          ></div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <input
              type="password"
              class="form-control bg-light"
              v-model="user.password"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group justify-content-between row">
          <div class="col-12">
            <input
              type="text"
              class="form-control bg-light"
              v-model="user.fullName"
              id="full-name"
              placeholder="Full name"
            />
          </div>
        </div>
        <div class="form-group justify-content-between align-item-center row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <textarea
              class="form-control bg-light"
              id="Interests"
              rows="3"
              placeholder="Interests"
            ></textarea>
          </div>
          <div
            class="d-xl-none d-lg-none d-md-none d-sm-none d-block w-100 col-12 my-2"
          ></div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <select class="form-control bg-light" id="university">
              <option>university</option>
              <option>university</option>
              <option>university</option>
              <option>university</option>
              <option>university</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12 d-flex justify-content-center align-item-center">
            <button @click="register" class="btn btn-lg text-light">
              Register
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="text-center">
          <router-link to="/user/login">Do you have an account?</router-link>
        </div>
      </div>
    </section>
  </main>
  <div v-else class="d-flex justify-content-center">
    <div class="btn btn-lg text-light" style="font-size: 5vw">
      Go To My Profile
    </div>
  </div>
</template>

<script scope>
import logo from "../../public/img/logo vectorial.svg";
// const apiRoot = "http://localhost:8000/user/";

const apiRoot = "https://food-studies-api.herokuapp.com/api/user/";

export default {
  name: "register-form",
  data() {
    return {
      logo: logo,
      registered: false,
      availableUsernames: [],
      user: {
        username: "",
        password: "",
        fullName: "",
        checks: {
          username: true,
        },
      },
    };
  },
  methods: {
    async register() {
      if (this.user.checks.username && this.user.password != "") {
        const _user = {
            username: this.user.username,
            password: this.user.password,
            fullName: this.user.fullName,
          },
          settings = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(_user),
          };
        let response = await fetch(`${apiRoot}register`, settings),
          data = await response.json();
        this.registered = true;
      }
    },
    async getAvailableUsernames() {
      let response = await fetch(apiRoot),
        data = await response.json();
      data.forEach((user) => {
        this.availableUsernames.push(user.username);
      });
    },
    checkUsername() {
      let matches = this.availableUsernames.includes(this.user.username);
      !matches
        ? (this.user.checks.username = true)
        : (this.user.checks.username = false);
    },
  },
  mounted() {
    this.registered = false;
    this.getAvailableUsernames();
  },
};
</script>