DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;
CREATE TABLE departments(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL, 
    salary INT NOT NULL, 
    department_id INT NOT NULL 
);
CREATE TABLE employees(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL, 
    last_name VARCHAR(255) NOT NULL, 
    role_id INT NOT NULL,
    manager_id INT 
);