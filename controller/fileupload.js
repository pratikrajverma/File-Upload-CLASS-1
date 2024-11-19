const Files = require('../modals/File')

const localFileUpload = async (req, res) =>{
try{ 
    //fetching user media files
    const { file } = req.files;    //Toh, req.files property ko pehle se req object ke andar nahi hota, lekin ye property dynamic taur pe generate hoti hai jab koi file upload request hoti hai.

    console.log('user dwara di gaii media file  ', file);
 

    let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;  // 1.   __dirname ek Node.js ka global variable hai jo current file ya directory ka path provide karta hai
                                                    // 2.   Date.now()  Yeh ek JavaScript function hai jo current timestamp ko milliseconds mein return karta hai. Har baar jab aap isko call karte hain, aapko ek naya timestamp milta hai, jo unique hota hai.
                                                    // 3.    Yeh puri line humein batata hai ki kis path par hum file ko save karenge. Ismein hum current directory ka path __dirname se lete hain, usmein "/files/" string aur current timestamp (Date.now()) ko add karte hain.
                                                    //4.   file.name: This presumably represents the name of the file being processed. For example, if file.name is "example.txt", then file.name.split('.') will split this string into an array ["example", "txt"] using the dot (.) as the separator.
                                                     //5.   file.name.split('.')[1]: This part of the expression extracts the file extension from the file name. Since we split the file name using the dot as the separator, the file extension will be the second element of the resulting array (index 1). So, in the example above, file.name.split('.')[1] would return "txt"
    
    file.mv(path, (err) => {        //1. file.mv() ek function hai jo file ko move karta hai ya copy karta hai, jaise ki uska naam suggest karta hai ("mv" shayad "move" ka short form hai). Ye function file ko ek naye location par move karta hai. 
                                    //2.  path: Yeh argument woh naya path hai jahan par humein file ko move karna hai. Jaise ki aapne pehle discuss kiya, yeh __dirname + "/files/" + Date.now() se generate kiya gaya hai, jo ek unique location provide karta hai.
                                    //3.  (err) => {...}: Yeh ek callback function hai jo file move hone ke baad execute hota hai. Agar file move karne mein koi error aata hai, to yeh callback function error ko handle karta hai. Agar koi error nahi hota hai, to yeh function kuch nahi karta.
                                    //4.  Jab aap kisi file ko move karte hain, to runtime environment ya file handling libraries us path ko resolve karne ke liye file system ke saath interaction karte hain. Is process mein, agar koi folder same path name se milta hai, to runtime environment  file ko us folder ke andar save karta hai.  Yadi provided path mein koi folder nahi hai, to runtime environment use file ka naya location maan leta hai aur file ko wahi save karta hai. Is tarah se, file ko move karte waqt runtime environment ke file handling logic ke dvara, provided path ka file ke liye unique naam ban jata hai
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
