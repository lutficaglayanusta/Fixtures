import mongoose from "mongoose";
import bcrypt from "bcrypt"

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default:"user"
    }
})
UserSchema.pre("save", function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const User = mongoose.model("User", UserSchema)

export default User