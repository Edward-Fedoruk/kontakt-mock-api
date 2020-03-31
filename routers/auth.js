const express = require('express');
const { defaultGet } = require('../helpers');
const jwt =  require('jsonwebtoken');

const authRouter = express.Router();

const private_key = 'secret';

const users = [
  {
    email: 'testemail@gmail.com',
    password: '123456qwerty',
    name: 'Test',
    surname: 'Testovich',
  }
];

authRouter.get('/sign-in/', (req, res) => {
  const { email, password } = req.query;
  
  const accountSecrets = users.find((account) => account.email === email);
  
  if (accountSecrets !== undefined) {
    const isCredentialsCorrect = 
      email.trim() === accountSecrets.email && 
      password.trim() === accountSecrets.password;
    const token = jwt.sign(accountSecrets, private_key, { expiresIn: '1d' });

    isCredentialsCorrect
      ? res.status(200).send({ token, ...accountSecrets })
      : res.status(400).send({ error: 'invalid email or password' });
  } else {
    res.status(400).send({ error: 'user doesn\'t exist' });
  }
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
