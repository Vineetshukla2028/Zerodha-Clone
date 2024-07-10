const { Schema } = require("mongoose")

const OrdersSchema = new Schema({

    name: String,
    price: Number,
    percent: String,
    model: String,
  },
)

module.exports = { OrdersSchema }