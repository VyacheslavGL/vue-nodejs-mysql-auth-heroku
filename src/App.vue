<template>
  <div id="app">
    <div id="nav">
     <!-- <router-link to="/">Home</router-link>
      <router-link v-if="jwt == null" to="/login"> | Login  </router-link>
      <router-link v-if="!jwt" to="/register"> | Register  </router-link>
      <router-link v-if="jwt" to="/dashboard"> | Dashboard | </router-link>
      <router-link v-if="jwt && auth === 1" to="/admin"> Admin  | </router-link>
      <button v-if="jwt" @click="logout">logout</button>-->

      <router-link to="/">Home</router-link>
      <router-link to="/login"> | Login  </router-link>
      <router-link to="/register"> | Register  </router-link>
      <router-link to="/dashboard"> | Dashboard | </router-link>
      <router-link to="/admin"> Admin  | </router-link>
      <button >logout</button>

<!--      <router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<!--Здесь раздела script вообще не было-->
<!--<script>
  export default {
    data(){
      return{
        auth: '',
        jwt:''
      }
    },
    watch:{
      $route(){
        if(localStorage.getItem('user') && localStorage.getItem('jwt')){
          // console.log('router - ', e);
          let admin = JSON.parse(localStorage.getItem('user'));
          this.auth = admin[0].is_admin;
          // this.auth = admin;
          this.auth = Number.parseInt(this.auth);

          this.jwt = localStorage.getItem('jwt');
          // console.log('this.auth - ', this.auth);
          // console.log('this.jwt - ', this.jwt);
          // console.log('admin - ', admin[0]);
        }
      },
     /* jwt(e){
        console.log('jwt watch - ', e);
      }*/
    },
    computed:{

    },
    methods:{
      logout(){
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        this.jwt = null;
        // this.$router.push({name: 'HelloWorld'})
        // this.$router.push('/')

      }
    },
    created() {
      this.jwt = localStorage.getItem('jwt');
      // console.log('this.jwt - ', this.jwt);
      if(localStorage.getItem('user') && localStorage.getItem('jwt')){
        // console.log('jwt - ', jwt);
        let user = JSON.parse(localStorage.getItem('user'));
        // this.jwt = JSON.parse(localStorage.getItem('jwt'));
        this.auth = user[0].is_admin;
        // console.log('auth - ', this.auth);
        // console.log('auth === 1 - ', this.auth === 1);
        // console.log('this.jwt - ', this.jwt);
        // console.log('typeOf - ', typeof jwt);
        // console.log('this.jwt - ', this.jwt);
        // console.log('router - ', this.$route.path);
      }


    }
  }
</script>-->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
