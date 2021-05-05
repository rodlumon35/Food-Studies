<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <router-link to="/user/home"
        ><img :src="logo" id="logo" alt="logo"
      /></router-link>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Profile <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Actions
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Events</a>
            <a class="dropdown-item" href="#">Universities</a>
          </div>
        </li>
      </ul>
      <form class="form-inline">
        <input
          id="searchBar"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn text-light my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
    <div
      class="collapse navbar-collapse align-content-center"
      id="navbarSupportedContent"
    ></div>

    <div><a class="nav-link" @click="logout">Logout</a></div>
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
  methods: {
    logout() {
      sessionStorage.removeItem("user");
    },
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
#searchBar {
  width: 1000px;
}
</style>