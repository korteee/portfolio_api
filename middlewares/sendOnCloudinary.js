const cloudinary = require('cloudinary');
const path = require('path');
const appDir = path.dirname(require.main.filename);
const fs = require('fs');
const cloudinaryCredentials = require('./../cloudinary.credentials.json');

cloudinary.config({
    cloud_name: cloudinaryCredentials.name,
    api_key: cloudinaryCredentials.key,
    api_secret: cloudinaryCredentials.secret
});

module.exports = new class SendOnCloudinary {
    constructor() {
        return (req, res, next) => {

            const fileUrl = path.join(appDir, req.file.path);

            cloudinary.uploader.upload(fileUrl, (result) => {
                Object.assign(req.body, {
                    img_url: result.url
                });
                fs.unlink(fileUrl, (err) => {
                    if (err) console.log("Error", err);
                    console.log(`Successfully deleted ${fileUrl}`);
                });
                next();
            });
        }
    }
}