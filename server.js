const express = require("express");
const morgan = require("morgan");
const { PORT, NODE_ENV } = require("./config");
const { DBConnection } = require("./config/db");
const StudentRoutes = require("./routes/student");
const cors=require("cors")
const app = express();

let StartServer = async () => {
  /*---------------Database Connection Starts Here---------------------*/
  DBConnection();
  /*---------------Database Connection Ends Here-----------------------*/

  /*------------------Middleware Section Starts Here --------------*/
  if (NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use(express.json());
  app.use(cors())
  /*------------------Middleware Section Ends Here ---------------*/

  /*-----------load Routes Starts Here--------------------*/
  app.use("/api/students/", StudentRoutes);
  /*-----------load Routes Ended Here---------------------*/
    
  /*-------------listen Port Starts Here ------------------------------*/
  app.listen(PORT, err => {
    if (err) throw err;
    console.log("server is running on port number 5000");
  });
  /*-------------listen Port Ends Here ------------------------------*/
    
};

StartServer();
