-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2023 at 01:33 AM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `phone` int(11) NOT NULL,
  `email` text NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `active` tinyint(1) NOT NULL,
  `permLevel` int(11) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `phone`, `email`, `name`, `surname`, `active`, `permLevel`, `token`) VALUES
(1, 'Root', '$2b$10$mH6CtFagOmjB5KIj12YWVuAVcjXUcdEGC7cQhFVFdurjRO2sAlzYq', 123456789, 'root@localhost.com', 'Root', 'Root', 1, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJSb290IiwiZW1haWwiOiJyb290QGxvY2FsaG9zdC5jb20iLCJpYXQiOjE3MDIzNDA4NTQsImV4cCI6MTcwMjM0NDQ1NH0.n5fKSlyK9RlVOgsl0wI95zCzPAKq5HNMn9hv8pL8vIQ'),
(2, 'User', '$2b$10$Ug6rDbd53fGJ1NZhuVqGL.NVEVtKkV8gG9terTFrf/RYsFtcHffl.', 123456789, 'user@localhost.com', 'User', 'User', 1, 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJVc2VyIiwiZW1haWwiOiJ1c2VyQGxvY2FsaG9zdC5jb20iLCJpYXQiOjE3MDIzMTMxMDQsImV4cCI6MTcwMjMxNjcwNH0.QZjx-iqJn7ohGkzuIgwr9k-4tiNxvGQH_arp-7vNUOg');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
