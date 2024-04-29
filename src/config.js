import  {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.PORT || 'localhost'
export const DB_USER = process.env.DB_USER || 'emilio'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'emilio123'
export const DB_DATABASE = process.env.DB_DATABASE || 'appdb'
export const DB_PORT = process.env.DB_PORT || 3306

