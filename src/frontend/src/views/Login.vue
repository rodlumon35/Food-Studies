<template>
  <div id="login">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "../components/Login";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
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

#login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#logo {
  width: 12vw;
  min-width: 100px;
}

.nav-link {
  font-size: 1.5rem;
}

.btn {
  background-color: #3ddd92;
}
</style>
