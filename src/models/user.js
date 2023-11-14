let mongoose = require('mongoose');
let validator = require('validator')
let timestampPlugin = require('./plugins/timestamp')

let userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    age: Number,
    // createdAt: Date,
    // updatedAt: Date
})
userSchema.virtual('full_name').get(function() {
    return this.first_name + ' ' + this.last_name
})

userSchema.virtual('full_name').set(function(name) {
    let str = name.split(' ')
    
    this.first_name = str[0]
    this.last_name = str[1]
})

userSchema.methods.getInitials = function() {
    return this.first_name[0] + this.last_name[0]
}

userSchema.statics.getUsers = function() {
    return new Promise((resolve, reject) => {
        this.find({}).then(doc => {
            console.log('Doc', doc)
            resolve(doc)
        }).catch(err => {
            console.error(err)
            return reject(err)
        })
    })
}

// userSchema.pre('save', function (next) {
//     let now = Date.now()
//     this.updatedAt = now
//     // Set a value for createdAt only if it is null
//     if (!this.createdAt) {
//         this.createdAt = now
//     }
//     // Call the next function in the pre-save chain
//     next()    
// })

userSchema.plugin(timestampPlugin)
module.exports = mongoose.model('users', userSchema)