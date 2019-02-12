const crypto = require("crypto");

function filename(req, file, cb){
    return `${Date.now()}-${hash().toString("hex")}--${file.originalname}`;    
}

function has(){
    return crypto.randomBytes(16, (err, hash) => {
        if (err){
            throw ex;
        }

        return hash;
    });
}

module.exports = filename;