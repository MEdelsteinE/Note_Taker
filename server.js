const fs = require('fs');
const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/apiroutes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.use(express.static('public'));
app.use('/', htmlRoutes);



app.listen(PORT, () => console.log('Server started on port', PORT));

