const express = require('express');
const { BlogItems } = require('../mockData');
const { defaultGet } = require('../helpers');

const blogRouter = express.Router();

blogRouter.get('/blog-items', defaultGet(BlogItems));

module.exports = blogRouter;
