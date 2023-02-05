// assuming top-level await for brevity
import { SMTPClient } from "emailjs";

async function sendmail(otp) {
  const client = new SMTPClient({
    user: "sendjackcourier@gmail.com",
    password: "uoeoijxpdxqscgns",
    host: "smtp.gmail.com",
    ssl: true,
  });

  const message = {
    text: "Your OTP IS: ",
    from: "sendjackcourier@gmail.com",
    to: "newrocker2468@gmail.com",
    subject: "testing emailjs",
    attachment: [
      {
        data: `<!DOCTYPE HTML PUBLIC '-//W3C//DTD XHTML 1.0 Transitional //EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
      <html xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>
      <head>
      
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta name='x-apple-disable-message-reformatting'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title></title>
        
          <style type='text/css'>
            @media only screen and (min-width: 520px) {
        .u-row {
          width: 500px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }
      
        .u-row .u-col-100 {
          width: 500px !important;
        }
      
      }
      
      @media (max-width: 520px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }
      
      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }
      
      p {
        margin: 0;
      }
      
      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }
      
      * {
        line-height: inherit;
      }
      
      a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
      }
      
      table, td { color: #000000; } </style>
        
        
      
      </head>
      
      <body class='clean-body u_body' style='margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #fcfcfc;color: #000000'>
        
        
        <table style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #fcfcfc;width:100%' cellpadding='0' cellspacing='0'>
        <tbody>
        <tr style='vertical-align: top'>
          <td style='word-break: break-word;border-collapse: collapse !important;vertical-align: top'>
          
          
      
      <div class='u-row-container' style='padding: 0px;background-color: transparent'>
        <div class='u-row' style='Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;'>
          <div style='border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;'>
            
            
      
      <div class='u-col u-col-100' style='max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;'>
        <div style='height: 100%;width: 100% !important;'>
        <div style='box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;'>
        
      <table style='font-family:arial,helvetica,sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
        <tbody>
          <tr>
            <td style='overflow-wrap:break-word;word-break:break-word;padding:12px;font-family:arial,helvetica,sans-serif;' align='left'>
              
      <table width='100%' cellpadding='0' cellspacing='0' border='0'>
        <tr>
          <td style='padding-right: 0px;padding-left: 0px;' align='center'>
            
            <img align='center' border='0' src='images/image-1.png' alt='' title='' style='outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 39%;max-width: 185.64px;' width='185.64'/>
            
          </td>
        </tr>
      </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style='font-family:arial,helvetica,sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
        <tbody>
          <tr>
            <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;' align='left'>
              
        <table height='0px' align='center' border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
          <tbody>
            <tr style='vertical-align: top'>
              <td style='word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
                <span> </span>
              </td>
            </tr>
          </tbody>
        </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style='font-family:arial,helvetica,sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
        <tbody>
          <tr>
            <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;' align='left'>
              
        <h1 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 28px; '>Hey There!</h1>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style='font-family:arial,helvetica,sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
        <tbody>
          <tr>
            <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;' align='left'>
              
        <div style='line-height: 140%; text-align: left; word-wrap: break-word;'>
          <p style='line-height: 140%;'>Here is Your One Time Password (OTP) For Creating SendJack Account:</p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style='font-family:arial,helvetica,sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
        <tbody>
          <tr>
            <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;' align='left'>
              
        <h1 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; '>${otp}</h1>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style='font-family:arial,helvetica,sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
        <tbody>
          <tr>
            <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;' align='left'>
              
        <div style='color: #ff0000; line-height: 130%; text-align: center; word-wrap: break-word;'>
          <p style='line-height: 130%;'>You Can Safely Disregard this Email if You did not request for this OTP.</p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style='font-family:arial,helvetica,sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
        <tbody>
          <tr>
            <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;' align='left'>
              
        <table height='0px' align='center' border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
          <tbody>
            <tr style='vertical-align: top'>
              <td style='word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
                <span> </span>
              </td>
            </tr>
          </tbody>
        </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        </div>
        </div>
      </div>
      
            
          </div>
        </div>
      </div>
      
      
      
      <div class='u-row-container' style='padding: 0px;background-color: transparent'>
        <div class='u-row' style='Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;'>
          <div style='border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;'>
            
            
      
      <div class='u-col u-col-100' style='max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;'>
        <div style='height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;'>
        <div style='box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;'>
        
      <table style='font-family:arial,helvetica,sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
        <tbody>
          <tr>
            <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;' align='left'>
              
        <div style='line-height: 140%; text-align: left; word-wrap: break-word;'>
          <p style='line-height: 140%;'>Any Issues? Contact us At support@sendjack.com</p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style='font-family:arial,helvetica,sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
        <tbody>
          <tr>
            <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;' align='left'>
              
        <div style='line-height: 140%; text-align: left; word-wrap: break-word;'>
          <p style='line-height: 140%;'>Regards, </p>
      <p style='line-height: 140%;'>The SendJack Team</p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        </div>
        </div>
      </div>
      
            
          </div>
        </div>
      </div>
      
      
          
          </td>
        </tr>
        </tbody>
        </table>
        
        
      </body>
      
      </html>`,
        alternative: true,
      },
    ],
  };

  // send the message and get a callback with an error or details of the message that was sent
  client.send(message, function (err, message) {
    console.log(err || message);
  });
}

export default sendmail;
