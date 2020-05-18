

CREATE DATABASE us_states;
show databases;
USE us_states;

CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(60), `email` varchar(60), `user_pass` varchar(60), `is_admin` int(1));