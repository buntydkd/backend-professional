import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const videoSchema = new Schema({
     videoFile:{
        type:String,
        required : true
     },
     thumbnail:{
        type:String,
        required : true
     },
     title:{
        type:String,
        required : true
     },
     description:{
        type:String,
        required : true
     },
     duration:{
        type:Number,
        required : true
     },
     views:{
        type:String,
        required : true
     },
     isPublished:{
        type : Boolean,
        default : true
     },
     owner:{
        type : Schema.Types.ObjectId,
        ref : "User"
     }


},{timestamps:true})

userSchema.pre("save",async function(next) {
    

})

export const User = mongoose.model("User",userSchema)