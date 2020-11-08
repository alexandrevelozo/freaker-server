import { Model, DataTypes } from 'sequelize'

class Order extends Model {
  static init (sequelize) {
    super.init(
      {
        status: DataTypes.STRING
      },
      {
        sequelize,
        tableName: 'orders'
      }
    )
  }

  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' })
    this.hasMany(models.Product, {
      foreignKey: 'product_id',
      as: 'products'

      // through: 'order_items',
      // as: 'products',
      // foreignKey: 'order_id'
    })
  }
}

export default Order
