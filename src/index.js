import app from './app.js'
import { MYSQL_PORT } from "./config.js"


app.listen(MYSQL_PORT)
console.log('port listening 3000')