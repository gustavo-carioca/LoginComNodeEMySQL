async function connect(){ 
    
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

    const mysql = require("mysql2/promise");
    const connection = mysql.createConnection("mysql://root@127.0.0.1:3306/tb_login")
    console.log("Conectou ao banco")
    global.connection = connection
    return connection
}
connect();
module.exports = {}


async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tb_usuarios;');
    return rows;
}


async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO tb_usuarios(login,senha) VALUES (?,?);';
    const values = [customer.login, customer.senha];
    return await conn.query(sql, values);
}

module.exports = {selectCustomers, insertCustomer}