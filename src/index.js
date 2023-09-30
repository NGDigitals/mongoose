let database = require('./database')
// let EmailModel = require('./models/email')
let UserModel = require('./models/user')
let timestampPlugin = require('./models/plugins/timestamp')

// let email = new EmailModel({
//     email: 'ada.lovelace@gmail.com'
// })
let user = new UserModel({
    first_name: 'Wale',
    last_name: 'Thompson',
    phone: '0701234568425',
    email: 'walle.g@gmail.com'
})

// user.save()
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.error(err)
//     });

// UserModel.find({
//       email: 'ada.lovelace@gmail.com'   // search query
//     })
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.error(err)
//     })

// UserModel
//     .findOneAndUpdate(
//     {
//         email: 'ada.lovelace@gmail.com'  // search query
//     }, 
//     {
//         first_name: 'Sly',
//         last_name: 'Mario'   // field:values to update
//     },
//     {
//         new: true,                       // return updated doc
//         runValidators: true              // validate before update
//     })
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.error(err)
//     })

// user.full_name = 'Thomas Anderson'
// user.first_name = 'Thomas'
// user.last_name = 'Anderson'
// console.log(user.toJSON())  // Output model fields as JSON
// console.log()
// console.log(user.full_name)  // Output the full name

// let initials = user.getInitials()
// console.log(initials) // This will output: TA

// UserModel.getUsers()
//     .then(docs => {
//         console.log(docs)
//     })
//     .catch(err => {
//         console.error(err)
//     })

// userSchema.plugin(timestampPlugin)

UserModel.find()                   // find all users
         .skip(1)                // skip the first 100 items
         .limit(10)                // limit to 10 items
         .sort({first_name: 'desc'})      // sort ascending by firstName
         .select({first_name: true, last_name: true}) // select firstName only
         .exec()                   // execute the query
            .then(docs => {
                console.log(docs)
            });
