
const cloudinary = require("cloudinary").v2;

const cloudinaryConnect = ()=>{
    try{
        cloudinary.config({
            cloud_name : process.env.Cloud_Name,
            api_key : process.env.API_Key,          //api_key Cloudinary ke API ko access karne ke liye use hota hai. Jab aap kisi request ko Cloudinary ke servers par bhejte hain, to aap apne api_key ka use karte hain tak ki Cloudinary aapko pehchaan sake ki yeh request aapka hi hai. Har user ke paas apna unique api_key hota hai.
            api_secret : process.env.API_Secret     //Ye key secure communication aur authentication ko ensure karta hai.
        })


    }catch(error){ 
        console.log(error);
    }
}



module.exports = cloudinaryConnect;