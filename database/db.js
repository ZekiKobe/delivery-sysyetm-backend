const mongooose = require('mongoose');

const db_connect = async () =>{
    try {
        await mongooose.connect(process.env.MONGO_DB_URI)
        console.log('connected to database'); 
    } catch (error) {
        console.log('error connecting to database',error.message);
        process.exit(1);
    }
   
}

module.exports = db_connect