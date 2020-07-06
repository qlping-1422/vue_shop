const mysql = require('mysql')

//创建连接池
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'971225',
    port:3306,
    database:'my',
    multipleStatements:true
})

// pool.query('select * from userinf',function(error,rows){
//     console.log(rows);
// });
module.exports=function query(sql){
    return new Promise((resolve,reject)=>{
        pool.query(sql,(err,result)=>{
            if(err) {
                
                reject(err)
            }
            resolve(result)
        })
    })
}

