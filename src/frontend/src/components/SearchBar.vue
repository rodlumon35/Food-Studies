<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <router-link to="/user/home"
        ><img :src="logo" id="logo" alt="logo"
      /></router-link>
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
      class="collapse navbar-collapse align-content-center"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav">
        <li>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn text-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </li>
        <li class="nav-item">
          <a class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import logo from "../../public/img/logo vectorial.svg";

export default {
  name: "search-bar",
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style scoped>
nav {
  background-color: #e5f0ff;
}

.nav-link {
  font-size: 1.5rem;
}

.btn {
  background-color: #3ddd92;
}
</style>