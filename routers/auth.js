const express = require('express');
const { defaultGet } = require('../helpers');
const jwt =  require('jsonwebtoken');

const authRouter = express.Router();

const private_key = 'secret';
const accountSecrets = {
  email: 'testemail@gmail.com',
  password: '123456qwerty',
  name: 'Test',
  surname: 'Testovich',
};

const users = [accountSecrets];

authRouter.get('/sign-in/', (req, res) => {
  const { email, password } = req.query;
  
  const token = jwt.sign({ email, password }, private_key, { expiresIn: '1d' });

  const isCredentialsCorrect = 
    email.trim() === accountSecrets.email && 
    password.trim() === accountSecrets.password;

  isCredentialsCorrect
    ? res.status(200).send({ token })
    : res.status(400).send({ error: 'invalid email or password' });
}); 

authRouter.get('/sign-up/', (req, res) => {
  const { email, password, name, surname } = req.query;

  if (users.find((u) => u.email === email)) {
    res.status(400).send({ error: 'user already exist' });
  } else {
    const token = jwt.sign({ email, password, surname, name }, private_key, { expiresIn: '1d' });
    users.push({ email, password, name, surname });
    res.status(200).send({ token });
  }
})

module.exports = authRouter
