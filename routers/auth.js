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

authRouter.post('/sign-in/', (req, res) => {
  const { email, password } = req.body;
  
  const accountSecrets = users.find((account) => account.email === email);
  
  if (accountSecrets === undefined) {
    res.status(400).send({ error: 'this email isn\'t registered yet, pls sign up' });
  } else if(
    email.trim() === accountSecrets.email && 
    password.trim() === accountSecrets.password
  ) {
    const token = jwt.sign(accountSecrets, private_key, { expiresIn: '1d' });
    res.status(200).send({ token, ...accountSecrets })
  } else {
    res.status(400).send({ error: 'invalid email or password' });
  }
}); 

authRouter.post('/sign-up/', (req, res) => {
  console.log(req.query, req.body)
  const { email, password, name, surname } = req.body;
  if (users.find((u) => u.email === email)) {
    res.status(400).send({ error: 'user already exist' });
  } else {
    const token = jwt.sign({ email, password, surname, name }, private_key, { expiresIn: '1d' });
    users.push({ email, password, name, surname });
    res.status(200).send({ token, email, name, surname });
  }
})

module.exports = authRouter
