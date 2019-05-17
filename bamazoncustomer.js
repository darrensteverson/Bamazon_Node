var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ste4erson",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllProducts();
    placeOrder();
});

function queryAllProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("-----------------------------------");
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price) + res[i].stock_quantity + " | ";
        }
        console.log("-----------------------------------");
    });
};

function placeOrder() {
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
            "Type the ID of the product they would like to buy",
            "How many units of the product they would like to buy?"
        ]
    }).then(function(answer) {
        switch (answer.action) {
        case "Type the ID of the product they would like to buy":
          productSearch();
          break;
  
        case "How many units of the product they would like to buy?":
          break;
        }
    });
};

function productSearch() {


};




