<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Request</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    /* Mobile Responsive Styles */
    @media only screen and (max-width: 600px) {
      .container {
        width: 100% !important;
        padding: 15px !important;
      }
      h2 {
        font-size: 20px !important;
        margin-bottom: 10px !important;
      }
      p {
        font-size: 14px !important;
        margin-bottom: 8px !important;
      }
      .additional-notes {
        padding: 15px !important;
      }
    }
  </style>
</head>
<body style="background-color: #f4f6f9; margin: 0; padding: 0; font-family: 'Roboto', sans-serif;">
  <div class="container" style="background-color: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto;">
    <h2 style="color: #1a3a6e; margin-bottom: 20px; font-size: 24px; font-weight: 600;">New Appointment Request 📅</h2>

    <p style="margin-bottom: 12px; font-size: 16px; font-weight: 500; color: #1a3a6e;"><strong>👤 NAME:</strong> {{user_name}}</p>
    <p style="margin-bottom: 12px; font-size: 16px; font-weight: 500; color: #1a3a6e;"><strong>✉️ EMAIL:</strong> {{user_email}}</p>
    <p style="margin-bottom: 12px; font-size: 16px; font-weight: 500; color: #1a3a6e;"><strong>📞 PHONE:</strong> {{user_phone}}</p>

    <div style="margin: 20px 0; background: #e0e5ec; height: 1px;"></div>

    <p style="margin-bottom: 12px; font-size: 16px; font-weight: 500; color: #1a3a6e;"><strong>🛎️ SERVICE TYPE:</strong> {{service_type}}</p>
    <p style="margin-bottom: 12px; font-size: 16px; font-weight: 500; color: #1a3a6e;"><strong>📅 APPOINTMENT DATE:</strong> {{appointment_date}}</p>
    <p style="margin-bottom: 20px; font-size: 16px; font-weight: 500; color: #1a3a6e;"><strong>⏰ PREFERRED TIME:</strong> {{appointment_time}}</p>

    <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 5px solid #4e8cff; margin-bottom: 20px;">
      <p style="margin: 0; color: #495057; font-size: 16px; font-weight: 600;">📝 Additional Notes:</p>
      <p style="margin-top: 10px; color: #6c757d; font-size: 15px; line-height: 1.5; white-space: pre-line;">{{message}}</p>
    </div>
  </div>

  <div style="margin-top: 30px; text-align: center; color: #6c757d; font-size: 14px;">
    <hr style="border: none; border-top: 1px solid #e0e5ec; margin-bottom: 20px;">
    <p style="margin: 0; font-weight: 500; color: #495057;">🚀 Sent from <a href="http://www.compusindia.com" style="color: #1a3a6e; text-decoration: none;">www.compusindia.com</a></p>
    <p style="margin: 5px 0 0; color: #6c757d;">⏱️ Received at: {{date_now}}</p>
  </div>
</body>
</html>
