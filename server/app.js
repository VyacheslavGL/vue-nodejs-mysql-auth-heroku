"use strict";
const express = require('express');
const mysql = require('mysql2');

//стандартный модуль ноды для работы с путями файлов
// const path = require('path');
// const serveStatic = require('serve-static');

const config = require('./config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();



// Create connection
/*const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'us_states',
    password: ''
});*/

const db = mysql.createConnection({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'bedd78861a3048',
    database: 'heroku_98f3c35031abbb1',
    password: '7cc36a86'
});

// Connect
db.connect((err) =>{
    if(err){
        throw err;
        // console.log('MySQL in not connected....');
    }
    console.log('MySQL Connected...');
});

// CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
};

app.use(allowCrossDomain);

//Данные строчки необходимы для возможности получения параметров с фронтенда
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
//Create DB
app.get('/createdb', (req, resp) => {
    let sql = 'CREATE DATABASE nodemysql';
   db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log('This result - ', result);
        resp.send('Database created...')
   })
});

//Create table
app.get('/createposttable', (req, resp) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log('Result - ', result);
        resp.send('Post table created..')
    })
});

//Insert post
app.get('/addpost1', (req, resp) =>{
    let post = {title: 'Post one', body: 'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log('Result - ', result);
        resp.send('Post 1 added...')
    })
});

//Select post
app.get('/getposts', (req, resp) =>{
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results)=>{
        if(err) throw err;
        console.log('Result - ', results);
        resp.send('Post fetched...')
    })
});

//Select single post
app.get('/getpost/:id', (req, resp) =>{
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log('Result - ', result);
        resp.send('Post fetched...')
    })
});

//Update post
app.get('/updatepost/:id', (req, resp) =>{
    let newTitle = 'Updated title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log('Result - ', result);
        resp.send('Post updated...')
    })
});

//Delete post
app.get('/deletepost/:id', (req, resp) =>{
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log('Result - ', result);
        resp.send('Post deleted...')
    })
});
*/

//Register user Admin
app.post('/register-admin', (req, res) => {
    let sql = 'INSERT INTO users (name, email, user_pass, is_admin) VALUES (?,?,?,?)';
    db.query(sql, [
        req.body.name,
        req.body.email,
        bcrypt.hashSync(req.body.password, 8),
        1
    ], (err) => {
        if (err) return res.status(500).send("Возникла проблема с регистрацией пользователя");
        db.query('SELECT * FROM users WHERE email = ?', req.body.email, (err, user) =>{
            if (err) return res.status(500).send("Возникла проблема с получением пользователя");
            if (user) return res.status(404).send('Данный пользователь уже есть в базе.');
            let token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token, user: user });
        })

    })
});

/*app.get('/', function(req, res){
    res.redirect('/login');
});*/


//Register user Admin
app.post('/register-admin', (req, res) => {
   let sql = 'SELECT * FROM users WHERE email = ?';
   db.query(sql, [req.body.email], (err, result)=>{
       if(err) return res.status(500).send('Error on the server.');
       if (result.length > 0) return res.status(404).send('Данный пользователь уже есть в базе.');
       if(result.length === 0){
           let sql = 'INSERT INTO users (name, email, user_pass, is_admin) VALUES (?,?,?,?)';
           db.query(sql, [
               req.body.name,
               req.body.email,
               bcrypt.hashSync(req.body.password, 8),
               1
           ], (error, user) => {
               if (error) return res.status(500).send("Возникла проблема с регистрацией пользователя");
                   // if (err) return res.status(500).send("Возникла проблема с получением пользователя");
               // if (user) return res.status(404).send('Данный пользователь уже есть в базе.');
               let token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400 // expires in 24 hours
                   });
               res.status(200).send({ auth: true, token: token, user: [{
                       name: req.body.name,
                       email: req.body.email,
                       user_pass: bcrypt.hashSync(req.body.password, 8),
                       is_admin: req.body.is_admin
                   }]
               });
           }
       )}
   })
});

//Register user
app.post('/register', (req, res) => {
   let sql = 'SELECT * FROM users WHERE email = ?';
   db.query(sql, [req.body.email], (err, result)=>{
       if(err) return res.status(500).send('Error on the server.');
       if (result.length > 0) return res.status(404).send('Данный пользователь уже есть в базе.');
       if(result.length === 0){
           let sql = 'INSERT INTO users (name, email, user_pass, is_admin) VALUES (?,?,?,?)';
           let data = [req.body.name, req.body.email, bcrypt.hashSync(req.body.password, 8), req.body.is_admin];
           db.query(sql, data, (error, user) => {
               if (error) return res.status(500).send("Возникла проблема с регистрацией пользователя");
               let token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400 // expires in 24 hours
                   });
               res.status(200).send({ auth: true, token: token, user: [{
                       name: req.body.name,
                       email: req.body.email,
                       user_pass: bcrypt.hashSync(req.body.password, 8),
                       is_admin: req.body.is_admin
                    }]
               });
           }
       )}
   })
});

//Login to app - рабочий вариант
app.post('/login', (req, res) => {
    let sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, req.body.email, (err, user) => {
        if (err) return res.status(500).send('Ошибка на сервере.');
        // if(user.length === 0) return res.status(403).send('Проверьте правильность ввода логина и пароля.');
        if(user.length === 0) return res.status(403).send(`Пользователь ${req.body.email} еще не зарегистрирован и не может авторизоваться, перейдите в раздел регистрация и зарегистрируйтесь!`);
        let passwordIsValid = bcrypt.compareSync(req.body.password, user[0].user_pass);
        if(user.length > 0 && !passwordIsValid) return res.status(401).send('Проверьте правильность ввода пароля.');
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null, message: 'Не правильный пароль!'});
        let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
        });
        // if (mess) return res.status(400).send(`Пользователя с почтой ${req.body.email} еще не зарегистрирован и не может авторизоваться!`);
        //Здесь нужно передавать либо только auth: true, либо в user только req.body.is_admin и где то его хранить
        res.status(200).send({ auth: true, token: token, user: user });
    })
});


let port = process.env.PORT || 3000;

//включаем сервер статических файлов из папки dist
// app.use(express.static(path.join(__dirname, 'dist')));

// app.use('/', serveStatic(path.join(__dirname, 'dist')));
// app.use(serveStatic(path.join(__dirname, 'dist')));
//на все запросы методом get отвечаем содержимым файлом index.html
//чтобы при обращении к несуществующим вайлам на сервере грузился именно index.html
// а дальше vue router сам разберется - вместо файла htaccess
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

app.listen(port, () => {
    console.log(`Сервер успешно запущен на порту ${port}`)
});