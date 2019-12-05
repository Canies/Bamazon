var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "bianca",

    // Your password
    password: "Password88$",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log(connection.threadId)
    start();
});

// function which prompts the user for what action they should take
function start() {

    connection.query("SELECT * FROM products",function(err,response){
                   console.table(response)

                   inquirer
                   .prompt({
                       name: "Inventory",
                       type: "input",
                       message: "Which item_id number would you like to purchase?"
                       
                   })
                   .then(function (answer) {
                        console.log(answer.Inventory)
                        connection.query(`SELECT * FROM products where item_id= ${answer.Inventory}`,function(err,response){
                            console.table(response)
                        }) 
                   });
           
           
    })


  


}

