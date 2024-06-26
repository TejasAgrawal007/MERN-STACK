const { z, string } = require('zod')


// Create a Object Schema
const signUpSchama = z.object({
    username : z.string({required_error : "Name is required!"})
    .trim().min(3, {message : "Name must be atlest 3 Characters"})
    .max(25, "Name must not be more than 25 Characters"),


    email : z.string({required_error : "email is required!"})
    .trim().email({message : "Invalid email address"}).min(5, {message : " email must be atlest 3 characters"})
    .max(25, "email must not be more than 25 Characters"),

    phone : z.string({required_error : "phone is required!"})
    .trim().min(10, {message : "password must be atlest 10 digits"})
    .max(12, "phone must not be more than 12 digits"),

    password : z.string({required_error : "password is required!"})
    .trim().min(6, {message : "password atlest of 6 characters"})
    .max(10, "password must not be more than 10 characters"),

})

module.exports = signUpSchama