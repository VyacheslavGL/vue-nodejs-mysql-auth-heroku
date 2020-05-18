<template>
  <div class="hello">
    <h1>This is homepage</h1>
    <h2>{{msg}}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis consequatur distinctio dolorem doloremque ducimus eius enim eveniet exercitationem fuga harum, hic iste labore laborum, magni maiores minima minus nihil non numquam omnis quas qui quia quo quod reiciendis repellat reprehenderit repudiandae rerum saepe similique soluta suscipit tempore totam, vitae voluptas voluptate. Alias atque consequatur cum ducimus ea ex excepturi fuga id, illo ipsum iure mollitia nam neque nesciunt nihil nostrum numquam officia officiis omnis quas repudiandae saepe tempore unde veniam, voluptatibus. Cumque dolore earum ex itaque non nulla, quis quo. Dolor eligendi eum illo maxime rem! Dolore, ex, quasi.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
