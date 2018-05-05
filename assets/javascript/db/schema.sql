CREATE DATABASE new_patient_db;
USE new_patient_db;

CREATE TABLE newPatient
(
    id int NOT NULL AUTO_INCREMENET,
    patient_Lastname varchar(50),
    patient_Firstname varchar(50),
    patient_DOB DATE,
    patient_Sex varchar(1),
    primaryDoc varchar(50),
    City varchar(50),
    ST varchar(2),
    tel int (10),
    emgContact varchar(50),

    PRIMARY (id)
);

