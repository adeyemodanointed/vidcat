const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const 

const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))