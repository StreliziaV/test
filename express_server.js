const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.get('/user', (req, res) => {
    res.send({name: 'zs', age: 20, gender: 'male'});
    console.log(req.query.email + ' ' + req.query.code);

    let transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: '1779598903@qq.com',
        // 这里密码不是qq密码，是你设置的smtp授权码
        pass: 'gtzxxfhhtaryfhig',
    }
    });

    let mailOptions = {
    from: '"狗子的爸爸" <1779598903@qq.com>', // sender address
    to: req.query.email, // list of receivers
    subject: 'Hello', // Subject line
    // 发送text或者html格式
    // text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
    });
})

app.post('/user', (req, res) => {
    res.send('request success');
})

app.listen(80, () => {
    console.log('127.0.0.1:80');
})