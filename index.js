const db = require("./db");


async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tb_usuarios;');
    return rows;
}
 

(async () => {
    const db = require("./db");
    
 
    console.log('SELECT * FROM tb_usuarios');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();



(async () => {
    const db = require("./db");
    

    console.log('INSERT INTO tb_usuarios');
    const result = await db.insertCustomer({login: "João", senha: "testando"});
    console.log(result);
 
    console.log('SELECT * FROM tb_usuarios');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();
