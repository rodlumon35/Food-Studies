<template>
  <div id="index-page">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <a href="#" class="brand-logo"
          ><img id="logo" src="img/logo vectorial.svg" alt="logo"
        /></a>
      </div>
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        class="collapse navbar-collapse align-content-end justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" @click="changePage('login')">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="changePage('register')">Register</a>
          </li>
        </ul>
      </div>
    </nav>
    <section
      class="d-flex p-1 mt-4 flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column align-content-center justify-content-center"
    >
      <div
        class="info col-xl-4 col-lg-4 col-12 d-flex flex-column align-content-center justify-content-center p-4"
      >
        <h1 class="display-1">Food Studies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia
          ea maiores debitis, dolor accusamus perferendis, tenetur doloremque
          non corporis velit voluptatem dignissimos. Est rerum saepe temporibus!
          Exercitationem, tenetur incidunt!
        </p>
        <div>
          <a @click="changePage('register')" class="btn btn-lg text-light"
            >Try now</a
          >
        </div>
      </div>
      <div
        class="illustration col-xl-7 col-lg-7 col-12 d-flex align-content-center justify-content-center"
      >
        <img
          src="img/undraw_social_friends_nsbv.svg"
          alt="social network illustration"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "index-page",
  methods: {
    changePage(page) {
      this.$emit("change-page", page);
    },
  },
};
</script>