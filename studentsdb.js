const Pool=require('pg').Pool;

const pool=new Pool ({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "Lof77884",
    port: 5432,
});

module.exports=pool;