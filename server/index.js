const express = require('express');
require('dotenv').config();
const routes = require('./src/routes/routes');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require('cors');


app.use(bodyParser.json());
app.use(
	cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		allowedHeaders: '*',
	})
);
app.use('/api',routes);
app.listen(port,()=>{
    console.log(`Server is listening on the port http://localhost:${port}`)
});

