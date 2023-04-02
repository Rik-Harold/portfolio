// import { SMTPClient } from 'emailjs'

// module.exports = async (suite) => {
    
//     const client = new SMTPClient({
//         user: 'cdrikdodde@yahoo.com',
//         password: 'Amaterazu3',
//         host: 'smtp.yahoo.com',
//         ssl: true,
//     })
    
//     // send the message and get a callback with an error or details of the message that was sent
//     client.send(
//         {
//             text: 'i hope this works',
//             from: 'cdrikdodde@yahoo.com',
//             to: 'dndiaye389@gmail.com',
//             subject: 'testing emailjs',
//         },
//         (err, message) => {
//             console.log(err || message)
//             suite('ok')
//         }
//     )
// }