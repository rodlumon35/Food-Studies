<template>
  <div
    class="d-flex flex-column justify-content-center align-item-center"
    id="register-form"
  >
    <main
      class="shadow d-flex flex-xl-row flex-lg-row flex-md-column flex-column justify-content-between align-item-center bg-white container p-4 rounded"
    >
      <section
        class="logo col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-item-center"
      >
        <div>
          <img src="img/logo vectorial.svg" alt="logo" />
        </div>
      </section>
      <section
        class="login col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-item-middle"
      >
        <div class="my-4">
          <h1 class="display-2 text-center">Register</h1>
        </div>
        <form action="">
          <div class="form-group justify-content-between row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div
              class="d-xl-none d-lg-none d-md-none d-sm-none d-block w-100 col-12 my-2"
            ></div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group justify-content-between row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div
              class="d-xl-none d-lg-none d-md-none d-sm-none d-block w-100 col-12 my-2"
            ></div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <input
                type="text"
                class="form-control"
                id="full-name"
                placeholder="Full name"
              />
            </div>
          </div>
          <div class="form-group justify-content-between align-item-center row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <textarea
                class="form-control"
                id="Interests"
                rows="3"
                placeholder="Interests"
              ></textarea>
            </div>
            <div
              class="d-xl-none d-lg-none d-md-none d-sm-none d-block w-100 col-12 my-2"
            ></div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <select class="form-control" id="university">
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
              <button type="submit" class="btn btn-lg text-light">
                Register
              </button>
            </div>
          </div>
        </form>
        <div>
          <div class="text-center">
            <a href="#" @click="changePage('login')">Do you have an account?</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "register-form",
  methods: {
    changePage(page) {
      this.$emit("change-page", page);
    },
  },
};
</script>