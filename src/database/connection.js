import Sequelize from 'sequelize'
import config from '../config/config'

import User from '../models/User'
import Product from '../models/Product'
import Order from '../models/Order'

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  connection = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging:  true //false
  })
} else {
  // the application is executed on the local machine ... use mysql
  connection = new Sequelize(config)
}

User.init(connection)
Product.init(connection)
Order.init(connection)

Order.associate(connection.models)
Product.associate(connection.models)

export default connection
