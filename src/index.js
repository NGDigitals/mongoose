let database = require('./database')
let EmailModel = require('./models/email')

let UserModel = require('./models/user')
// let timestampPlugin = require('./models/plugins/timestamp')

let email = new EmailModel({
    // email: 'ada.lovelace@gmail.com',
    name: 'Ajala Jalingo',

})

email.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });

EmailModel
    .find({
        // _id: '5377839nhrf934',
        // email: 'ada.lovelace@gmail.com'   // search query
    })
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })

EmailModel
    .findOneAndUpdate(
        {
            email: 'ada.lovelace@gmail.com'  // search query
        }, 
        {
            email: 'theoutlander@live.com',
            department: 'COMputer'   // field:values to update
        },
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        })
    .then((d) => {
        console.log(d)
    })
    .catch(err => {
        console.error(err)
    })

let user = new UserModel({
    first_name: 'Wale',
    last_name: 'Thompson',
    // full_name: 'Tope Alabi',
    phone: '0701234568425',
    email: 'walle.g@gmail.com'
})

user.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });

// UserModel.find({
//       email: 'ada.lovelace@gmail.com'   // search query
//     })
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.error(err)
//     })

UserModel
    .findOneAndUpdate(
    {
        email: 'ada.lovelace@gmail.com'  // search query
    }, 
    {
        first_name: 'Sly',
        last_name: 'Mario'   // field:values to update
    },
    {
        new: true,                       // return updated doc
        runValidators: true              // validate before update
    })
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })

user = new UserModel()
user.full_name = 'Thomas Anderson'
user.first_name = 'Thomas'
user.last_name = 'Anderson'
console.log(user.toJSON())  // Output model fields as JSON
console.log(user.first_name)
console.log(user.last_name)
console.log('Fullname', user.full_name)  // Output the full name

let initials = user.getInitials()
console.log(initials) // This will output: TA

UserModel.getUsers()
    .then(docs => {
        console.log(docs)
    })
    .catch(err => {
        console.error(err)
    })

// userSchema.plugin(timestampPlugin)

UserModel.find()                   // find all users
         .skip(1)                // skip the first 100 items
         .limit(10)                // limit to 10 items
         .sort({first_name: 'desc'})      // sort ascending by firstName
         .select({first_name: true, last_name: true, email: true}) // select firstName only
         .exec()                   // execute the query
            .then(docs => {
                console.log(docs)
            }).catch(err => {
                console.error(err)
            });
