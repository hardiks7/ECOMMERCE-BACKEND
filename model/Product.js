const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    price: { type: Number, min: [1, 'wrong min price'], max: [10000, 'wrong max price'] },
    discountPercentage: { type: Number, min: [0, 'wrong min price'], max: [99, 'wrong max price'] },
    rating: { type: Number, min: [0, 'wrong min discount'], max: [5, 'wrong max discount'], default: 0 },
    stock: { type: Number, min: [0, 'wrong min stock'], default: 0 },
    brand: { type: String, require: true },
    category: { type: String, require: true },
    thumbnail: { type: String, require: true },
    images: { type: [String], require: true },
    deleted: { type: Boolean, default: false },
})

const virtual = productSchema.virtual('id');
virtual.get(function() {
    return this._id;
})
productSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc,ret) { delete ret._id}
})

exports.Product = mongoose.model('Product', productSchema)