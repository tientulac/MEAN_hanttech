const stmp =  require('../configs/stmp');
const handleError = require('../commons/handleErrors');
const printStacktrace = handleError.PrintStacktrace;
const response = require('../models/outputModels/responseBase');
const nodeMailer = require('nodemailer');
const mailConfig = require('../commons/email/mailConfig');
const emailService = require('../utils/services/interfaces/emailService');

exports.SendEmail = async (req, res) => {
    try {
        const {to, subject, body} = req.body;
        const result = await emailService.sendEmail(to, subject, body);
        if (!result) {
            printStacktrace.errorNotFound(req, res);
        }
        else {
            response.ResponseBase(req, res, res.statusCode, "Thành công !", result);
        }    
    }
    catch (ex) {
        printStacktrace.throwException(req, res, ex);
    }
  }
  