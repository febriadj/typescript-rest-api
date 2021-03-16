import mysql from 'mysql'

interface Configuration {
  dbHost: string, dbUser: string, dbPass: string, dbName: string
}

class Connection implements Configuration {
  dbHost: string
  dbUser: string
  dbPass: string
  dbName: string

  constructor(host: string, user: string, pass: string, name: string) {
    this.dbHost = host
    this.dbUser = user
    this.dbPass = pass
    this.dbName = name
  }

  dbCreate() {
    return mysql.createConnection({
      host: this.dbHost,
      user: this.dbUser,
      password: this.dbPass,
      database: this.dbName
    })
  }

  dbConnect() {
    const db = this.dbCreate()

    db.connect((err: any) => {
      if (err) return new Error(err)

      return console.log('mysql connected')
    })

    return db
  }
}

const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  pass: '',
  name: 'db_projects'
}

const { host, user, pass, name } = mysqlConfig
const conn = new Connection(host, user, pass, name).dbConnect()

export default conn