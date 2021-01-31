const { Pool } = require('pg')
const config = require('configuration')
const migrate = require('./migrations')

exports.start = async function() {
    const host = config.get('PGHOST')
    const user = config.get('PGUSER')
    const password = config.get('PGPASSWORD')
    const database = config.get('PGDATABASE')
    const port  = config.get('PGPORT')

    await migrate.run({user, host, database, password, port})

    this.pool = new Pool({user, host, database, password, port})
}

exports.close = async function() {
    return this.pool.end()
}

exports.query = async function(q, data) {
    return this.pool.query(q, data)
}

exports.queryOne = async function(q, data) {
    return this.pool.query(q, data).then(r => r.rows[0])
}
