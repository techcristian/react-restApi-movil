import dotenv from 'dotenv';

dotenv.config()

export const MYSQL_ROOT=process.env.MYSQL_ROOT
export const MYSQL_PASSWORD=process.env.MYSQL_PASSWORD
export const MYSQL_PORT=process.env.MYSQL_PORT || 3001