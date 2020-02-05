'use strict'

const db = require('./index')
const debug = require('debug')('spiderverse:db:setup')

async function setup () {
  const config = {
    database: process.env.dbname || 'spiderverse_db',
    username: process.env.username || 'spiderverse' || 'dmr1204',
    password: process.env.password || 'admin1204',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)
  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.status)
  process.exit(1)
}

setup()
