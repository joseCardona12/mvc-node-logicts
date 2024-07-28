import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host:"",
    port: "",
    user: "",
    password:"",
    database:""
});

const testConnection = async()=>{
    try{
        const connection = await pool.getConnection();
        console.log({message:"Connection with database", connection})
        connection.release();

    }catch(error){
        console.log({message:"Error with the connection database", error})
    }
}

testConnection();