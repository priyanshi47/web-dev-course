const File = require("../models/file");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async(req,res)=>{
    try{

        const file = req.files.file;
        console.log(file);

        let path = __dirname + "/files/" + Date.now() + '.' + `${file.name.split('.')[1]}`;

        file.mv(path, (err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:"File Uploaded !!"
        })
    }catch(err){
        console.log(err);
    }
}

function isSupportedType(type, supportedTypes){
    return supportedTypes.includes(type);
}


async function uploadFileToCloudinary(file, folder, quality){
    const options = {folder};
    options.resource_type = "auto";

    if(quality)
    {
        options.quality  = quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async(req,res)=>{
        try{
            const {name, tags, email} = req.body;
            console.log(name, tags, email);

            const file= req.files.imageFile;
            // console.log(file);

            const supportedTypes = ["jpg", "jpeg", "png"];
            const type = file.name.split('.')[1].toLowerCase();

            if(!isSupportedType(type, supportedTypes)){
                return res.status(400).json(
                    {
                        success:false,
                        message:"File format not supported!"
                    }
                )
            }
    const response = await uploadFileToCloudinary(file,"priyanshi");
    console.log(response);

    const fileData = await File.create({
        name,
        tags,
        email,
        imageUrl:response.secure_url
    })

    res.json({
        success:true,
        imageurl:response.secure_url,
        message:"Image successfully uploaded"
    })
           
        }
        catch(err){
            console.error(err);

            res.status(400).json({
                success:false,
                message:"Something went wrong"
            })
        }
}



exports.videoUpload = async(req,res)=>{
    try{
        const {name, tags, email} = req.body;
            console.log(name, tags, email);

            const file= req.files.videoFile;

            const supportedTypes = ["mp4", "mov"];
            const type = file.name.split('.')[1].toLowerCase();
//ADD LIMIT TO ULOAD ONLY TILL 5MB

            if(!isSupportedType(type, supportedTypes)){
                return res.status(400).json(
                    {
                        success:false,
                        message:"File format not supported!"
                    }
                )
            }


   const response = await uploadFileToCloudinary(file,"priyanshi");
    console.log(response);

    const fileData = await File.create({
        name,
        tags,
        email,
        imageUrl:response.secure_url
    })
   


res.json({
    success:true,
    imageurl:response.secure_url,
    message:"Video successfully uploaded"
})
       
    }
    catch(err){
        console.error(err);

        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}


exports.imageReduceUpload = async(req,res)=>{
    try{

        const {name, tags, email} = req.body;
        console.log(name, tags, email);

        const file= req.files.videoFile;

        const supportedTypes = ["jpeg", "jpg", "png"];
        const type = file.name.split('.')[1].toLowerCase();


        if(!isSupportedType(type, supportedTypes)){
            return res.status(400).json(
                {
                    success:false,
                    message:"File format not supported!"
                }
            )
        }

//compress it using height also
const response = await uploadFileToCloudinary(file,"priyanshi", 30);
console.log(response);

const fileData = await File.create({
    name,
    tags,
    email,
    imageUrl:response.secure_url
})



res.json({
success:true,
imageurl:response.secure_url,
message:"Image successfully compressed and uploaded"
})
    }
    catch(err){
        console.error(err);

        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}