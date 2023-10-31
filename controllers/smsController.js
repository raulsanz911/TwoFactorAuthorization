const { getDb } = require('../models/codeModel');
const { CODE_LIFETIME, MAX_CODES_PER_PHONE } = require('../config/config');



exports.sendCode = (phone, callback) => {
    const collection = getDb().collection('TwoFactorAuth');
    collection.countDocuments({ phone }, (err, count) => {
        if (count < MAX_CODES_PER_PHONE) {
            const code = Math.floor(1000 + Math.random() * 9000).toString();
            const expirationDate = new Date();
            expirationDate.setSeconds(expirationDate.getSeconds() + CODE_LIFETIME);
            collection.insertOne({ phone, code, expirationDate });
            console.log(`DEBUG: Code for ${phone}: ${code}`);
            callback(null, true);
        } else {
            callback(new Error("Max codes limit reached."), false);
        }
    });
};
function isValidPhone(phone) {
    const regex = /^\d+$/;
    return regex.test(phone);
}
exports.isValidPhone = isValidPhone;


exports.checkCode = (phone, code, callback) => {
    const collection = getDb().collection('TwoFactorAuth');
    collection.findOne({ phone, code }, (err, doc) => {
        if (doc && new Date(doc.expirationDate) > new Date()) {
            callback(null, true);
        } else {
            callback(new Error("Invalid or expired code."), false);
        }
    });
};
