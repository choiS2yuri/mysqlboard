import db from 'mysql2/promise';


const connectDB = db.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rlarlfdla46!',
    database: 'choiyul'
}) 

export default connectDB