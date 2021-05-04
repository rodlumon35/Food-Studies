<template>
  <div
    v-if="!logged"
    class="d-flex flex-xl-row flex-lg-row flex-md-column flex-column justify-content-between align-item-center bg-white container p-4 rounded"
  >
    <section
      class="logo col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-item-center"
    >
      <div>
        <img :src="logo" alt="logo" />
      </div>
    </section>
    <section
      class="login col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-item-middle"
    >
      <div class="my-4">
        <h1 class="display-2 text-center">Login</h1>
      </div>
      <div>
        <div class="form-group row">
          <div class="col-12">
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12">
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group row d-flex justify-content-center">
          <small v-if="error" class="form-text text-muted"
            >Username or Password is incorrect</small
          >
        </div>
        <div class="form-group row">
          <div class="col-12 d-flex justify-content-center align-item-center">
            <button @click="login" class="btn btn-lg text-light">Login</button>
          </div>
        </div>
      </div>
      <div>
        <div class="text-center">
          <router-link to="/user/register">Need an account?</router-link>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="d-flex justify-content-center">
    <router-link
      to="/user/profile"
      class="btn btn-lg text-light"
      style="font-size: 5vw"
    >
      Go To My Profile
    </router-link>
  </div>
</template>

<script>
import logo from "../../public/img/logo vectorial.svg";
//const apiRoot = "http://localhost:8000/user/";
const apiRoot = "https://food-studies-api.herokuapp.com/api/user/";

export default {
  name: "login-form",
  data() {
    return {
      logo: logo,
      username: "",
      password: "",
      logged: false,
      error: false,
    };
  },
  methods: {
    async login() {
      if (this.username != "" && this.password != "") {
        const _user = {
            username: this.username,
            password: this.password,
          },
          settings = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(_user),
          };
        let response = await fetch(`${apiRoot}login`, settings),
          data = await response.json();
        if (data.status !== "ERROR") {
          localStorage.setItem("user_id", _user._id);
          this.logged = true;
          this.$router.push("/user/profile");
        } else {
          this.error = true;
        }
      }
    },
  },
};
</script>

<style>
nav {
  background-color: #e5f0ff;
}

.nav-link {
  font-size: 1.5rem;
}

.logo div img {
  width: 40vw;
  min-width: 300px;
}

.btn {
  background-color: #3ddd92;
}
</style>