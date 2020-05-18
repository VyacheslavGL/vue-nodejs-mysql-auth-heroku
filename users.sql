-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 17 2020 г., 15:11
-- Версия сервера: 5.7.25
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `us_states`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `user_pass` varchar(60) DEFAULT NULL,
  `is_admin` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `user_pass`, `is_admin`) VALUES
(6, 'user', 'user@user.ru', '$2b$08$ySjkJvtLtlS3krM6HE1.fO1S6vpWA6ooMzJVpjwwHHd0YEtBs3io.', 1),
(7, 'user1', 'user1@user.ru', '$2b$08$J0jC58vH9iF40nxgHDvh7e.LjUxYRIR2Ud3SCMbP8VXRuiW/f9eTa', 0),
(8, 'user2', 'user2@user.ru', '$2b$08$Kt6KqLMEqGEmY.mFBMjl.uWjcUlegIk668GmP5jnXKVDSqmuhvaFy', 1),
(9, 'user3', 'user3@user.ru', '$2b$08$d9N6yz.w6hVylk7zTakYiuY/yQwZCxWfpCFUlLTySDWc8aM25MPNa', 0),
(10, 'user4', 'user4@user.ru', '$2b$08$KVCt8f.0C8IwsPqlggynO.GR1xm/YI1Cd3feQ8DJoDXkJ8Uakmq/i', 1),
(11, 'user5', 'user5@user.ru', '$2b$08$O9NQnlbmKj.O7raVIVJZxekG8urxllQzeBGJW9uuyMbTOg4GTxFfu', 0),
(12, 'user6', 'user6@user.ru', '$2b$08$vWH3xE1EGNIvhxYR1z6ce.d0PVZnHvPvwAwb1A26tPosMXG8pKHjS', 0),
(13, 'user7', 'user7@user.ru', '$2b$08$.dPnr.fO43hFQYEG1vZyWecAKuHVvqJx8RrdnF4Z17b.U5UK7us8u', 0),
(14, 'user8', 'user8@user.ru', '$2b$08$EJJ5MFVB.gudi4igT/Iyqeo/fjs1Cv7SA5lB0MOfy6Cc5zbn5scba', 0),
(15, 'user9', 'user9@user.ru', '$2b$08$r3mL8WfPtErn9.Nvex1ayOgrFTm8IP5JFUlwo.O5pdLJEji9ZwkcO', 0),
(16, 'user10', 'user10@user.ru', '$2b$08$kDMNlNx3bOLPHv9OeyxpHOLEGsZqebnrVOvIhld94/gvwKD5.eCT.', 0),
(17, 'user11', 'user11@user.ru', '$2b$08$i3E7mXzkKAhRKoLdZOs.sOp1y4WP1c7BR136uwQxNjR20XplhIqUK', 0),
(18, 'user12', 'user12@user.ru', '$2b$08$cX.4eQpmP28iOF.LCYjWo.A5iEDLO9onR4JzxPhQqEqPhkgvv2GLq', 0),
(19, 'user13', 'user13@user.ru', '$2b$08$CM1eKSp2vMBHbYF2bXjhiOH3dIGzHCMJ5bwQEVPM/OCHZPpD3uRCm', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
