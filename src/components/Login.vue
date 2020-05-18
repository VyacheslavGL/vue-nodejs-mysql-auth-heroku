<template>
    <div>
<!--        <h1 v-if="message">{{message}}</h1>-->
        <h2 id="mess" style="color: orangered"></h2>
        <h4>Login</h4>
        <form>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required autofocus>
            </div>
            <div>
                <label for="password" >Password</label>
                <div>
                    <input id="password" type="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="submit" @click="handleSubmit">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // message: '',
                email : "",
                password : ""
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault();
                if (this.password.length > 0) {
                    let mail = this.email;
                    this.$http.post('http://localhost:3000/login', {
                        email: this.email,
                        password: this.password
                    })
                        .then(response => {
                            let is_admin = response.data.user[0].is_admin;
                            localStorage.setItem('user',JSON.stringify(response.data.user));
                            localStorage.setItem('jwt',response.data.token);

                            if (localStorage.getItem('jwt') != null){
                                this.$emit('loggedIn');
                                if(this.$route.params.nextUrl != null){
                                    this.$router.push(this.$route.params.nextUrl)
                                }
                                else {
                                    if(is_admin == 1){
                                        this.$router.push('admin')
                                    }
                                    else {
                                        this.$router.push('dashboard')
                                    }
                                }
                            }

                        })
                        .catch(function (error) {
                            // console.log('error.response - ', error.response);
                            if (error.response && error.response.status === 400){
                                return document.getElementById('mess').innerText = error.response.data;
                            }
                            if (error.response && error.response.status === 401){
                                //выдает сообщение когда пароль был введен неверный
                                // return document.getElementById('mess').innerText = error.response.data.message;
                                return document.getElementById('mess').innerText = error.response.data;
                            }
                            if (error.response && error.response.status === 403){
                                //Эта ошибка появляется когда логин и пароль не правильные
                                // return document.getElementById('mess').innerText = error.response.data.message;
                                return document.getElementById('mess').innerText = error.response.data;
                            }
                            if(error.response && error.response.status === 500){
                                return document.getElementById('mess').innerText = error.response.data;
                            }
                            if (error){
                                // console.log('Error - ', error);
                                // console.log('error.response.data.message - ', error.response.data.message);
                                // return document.getElementById('mess').innerText = 'Данный пользователь еще не зарегистрирован';
                                return document.getElementById('mess').innerText = `Пользователь ${mail} еще не зарегистрирован на данном ресурсе`;
                            }
                            else return document.getElementById('mess').innerText = 'Не известная ошибка';
                            // return document.getElementById('mess').innerText = error.response.data.message;

                            // this.message = error.response.data.message;

                            // error.response.data()
                            // console.error('Login error status  - ', error.response.status);
                            // console.error('Login error data  - ', error.response.data);
                            // error.then(item => console.log('This item - ', item));

                            // console.log('error.response.data.message - ', error.response.data.message);
                            // console.error('Login error - ', error.response);

                            // console.log('error.response.data.message - ', error.response.data.message);
                        });
                }
            }
        }
    }
</script>

<style scoped>

</style>