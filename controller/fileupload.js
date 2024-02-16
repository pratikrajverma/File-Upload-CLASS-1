const Files = require('../modals/File')

const localFileUpload = async (req, res) =>{
try{
    //fetching user media files
    const { file } = req.files;    //Toh, req.files property ko pehle se req object ke andar nahi hota, lekin ye property dynamic taur pe generate hoti hai jab koi file upload request hoti hai.

    console.log('user dwara di gaii media file  ', file);
 

    let path = __dirname + "/files/" + Date.now()+ `.${file.name.split('.')[1]}`;  // 1.   __dirname ek Node.js ka global variable hai jo current file ya directory ka path provide karta hai
                                                    // 2.   Date.now()  Yeh ek JavaScript function hai jo current timestamp ko milliseconds mein return karta hai. Har baar jab aap isko call karte hain, aapko ek naya timestamp milta hai, jo unique hota hai.
                                                    // 3.    Yeh puri line humein batata hai ki kis path par hum file ko save karenge. Ismein hum current directory ka path __dirname se lete hain, usmein "/files/" string aur current timestamp (Date.now()) ko add karte hain.
    
    file.mv(path, (err) => {        //1. file.mv() ek function hai jo file ko move karta hai ya copy karta hai, jaise ki uska naam suggest karta hai ("mv" shayad "move" ka short form hai). Ye function file ko ek naye location par move karta hai. 
                                    //2.  path: Yeh argument woh naya path hai jahan par humein file ko move karna hai. Jaise ki aapne pehle discuss kiya, yeh __dirname + "/files/" + Date.now() se generate kiya gaya hai, jo ek unique location provide karta hai.
                                    //3.  (err) => {...}: Yeh ek callback function hai jo file move hone ke baad execute hota hai. Agar file move karne mein koi error aata hai, to yeh callback function error ko handle karta hai. Agar koi error nahi hota hai, to yeh function kuch nahi karta.
            console.log(err);   
        } );     
 
    res.json({
        success: true,
        message: 'Local MediaFile uploaded successfully',
        path: path
    })



}catch(error) {
    console.log(error);

}

    



    
}

module.exports = {localFileUpload}
