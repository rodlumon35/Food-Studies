<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <div class="brand-logo">
          <img src="img/logo vectorial.svg" alt="logo" id="logo" />
        </div>
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
            <router-link class="nav-link" to="/user/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user/register"
              >Register</router-link
            >
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
          <router-link to="/user/register" class="btn btn-lg text-light"
            >Try now</router-link
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
<style>
body {
  background-image: linear-gradient(
    to right top,
    #f5fdea,
    #effff8,
    #defbff,
    #c6f0ee,
    #cdf3e3
  );
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  width: 100%;
}

#logo {
  width: 13vw;
  min-width: 150px;
}

nav {
  background-color: #e5f0ff;
}

.nav-link {
  font-size: 1.5rem;
}

footer {
  background-color: #e5f0ff;
}

.btn {
  background-color: #3ddd92;
}

.illustration img {
  width: 50vw;
  min-width: 300px;
}

.logo div img {
  width: 40vw;
  min-width: 300px;
}
</style>
