const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');

router.post('/send_code', (req, res) => {
    const phone = req.body.phone;
    console.log("Phone:: ", req.body);
    console.log("Phone: ", phone);

    if (!smsController.isValidPhone(phone)) {
        return res.status(400).json({ success: false, message: "Invalid phone number." });
    }
    smsController.sendCode(phone, (err, success) => {
        if (err) {
            return res.status(400).json({ success: false, message: err.message });
        }
        res.json({ success: true, message: "Code sent successfully." });
    });
});

router.post('/check_code', (req, res) => {
    const phone = req.body.phone;
    const code = req.body.code;

    if (!smsController.isValidPhone(phone)) {
        return res.status(400).json({ success: false, message: "Invalid phone number." });
    }
    smsController.checkCode(phone, code, (err, success) => {
        if (err) {
            return res.status(400).json({ success: false, message: err.message });
        }
        res.json({ success: true, message: "Code verified successfully." });
    });
});

module.exports = router;
