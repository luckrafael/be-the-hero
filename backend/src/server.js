const app = require('./app');

app.listen(config.port, () =>{
    console.log(`Server is up and running at port ${config.port}`);
});