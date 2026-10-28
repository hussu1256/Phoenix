import nodemailer from 'nodemailer';

export interface AppointmentEmailData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  treatmentType: string;
  hospitalPreference?: string;
  message?: string;
}

// Create transporter (lazy — only created on first use)
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for port 465, false for others
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Email to ADMIN — notifies of new appointment request
export async function sendAppointmentToAdmin(data: AppointmentEmailData) {
  const transporter = createTransporter();
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #0a1628, #1a3a6b); padding: 2.5rem 2rem; text-align: center; }
        .header h1 { color: #ffffff; font-size: 1.5rem; margin: 0; font-weight: 300; letter-spacing: 0.5px; }
        .header p { color: rgba(255,255,255,0.6); font-size: 0.85rem; margin: 0.5rem 0 0; }
        .logo { color: #c9a96e; font-size: 2rem; margin-bottom: 0.75rem; }
        .body { background: #ffffff; padding: 2rem; }
        .tag { display: inline-block; background: #ecfdf5; color: #0e7490; padding: 4px 12px; border-radius: 100px; font-size: 12px; font-weight: 500; margin-bottom: 1.5rem; }
        .row { display: flex; margin-bottom: 1rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 1rem; }
        .label { color: #94a3b8; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; width: 160px; flex-shrink: 0; padding-top: 2px; }
        .value { color: #1e293b; font-size: 14px; flex: 1; }
        .message-box { background: #f8fafc; border-left: 3px solid #0e7490; padding: 1rem; border-radius: 0 8px 8px 0; margin-top: 0.5rem; color: #475569; font-size: 14px; line-height: 1.6; }
        .footer { background: #0a1628; padding: 1.5rem 2rem; text-align: center; }
        .footer p { color: rgba(255,255,255,0.4); font-size: 12px; margin: 0; }
        .btn { display: inline-block; margin-top: 1.5rem; padding: 0.75rem 2rem; background: #0e7490; color: white; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <div class="logo">Φ</div>
          <h1>New Appointment Request</h1>
          <p>Phoenix Global Wellness — Patient Enquiry</p>
        </div>
        <div class="body">
          <div class="tag">New Lead</div>
          <div class="row"><div class="label">Patient Name</div><div class="value"><strong>${data.fullName}</strong></div></div>
          <div class="row"><div class="label">Email</div><div class="value"><a href="mailto:${data.email}" style="color:#0e7490">${data.email}</a></div></div>
          <div class="row"><div class="label">Phone</div><div class="value">${data.phone}</div></div>
          <div class="row"><div class="label">Country</div><div class="value">${data.country}</div></div>
          <div class="row"><div class="label">Treatment</div><div class="value">${data.treatmentType}</div></div>
          ${data.hospitalPreference ? `<div class="row"><div class="label">Hospital Pref.</div><div class="value">${data.hospitalPreference}</div></div>` : ''}
          ${data.message ? `<div class="row" style="flex-direction:column"><div class="label" style="margin-bottom:0.5rem">Message</div><div class="message-box">${data.message}</div></div>` : ''}
          <div style="text-align:center">
            <a href="mailto:${data.email}" class="btn">Reply to Patient</a>
          </div>
        </div>
        <div class="footer">
          <p>Received via phoenixglobalwellness.com | ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"Phoenix Global Wellness" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: `🏥 New Appointment Request — ${data.fullName} (${data.treatmentType})`,
    html,
    replyTo: data.email,
  });
}

// Confirmation email to PATIENT
export async function sendConfirmationToPatient(data: AppointmentEmailData) {
  const transporter = createTransporter();

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #0a1628, #1a3a6b); padding: 2.5rem 2rem; text-align: center; }
        .header h1 { color: #ffffff; font-size: 1.5rem; margin: 0; font-weight: 300; }
        .logo { color: #c9a96e; font-size: 2rem; margin-bottom: 0.75rem; }
        .body { background: #ffffff; padding: 2rem; }
        .greeting { font-size: 1.1rem; color: #0a1628; font-weight: 400; margin-bottom: 1rem; }
        p { color: #475569; font-size: 14px; line-height: 1.7; margin-bottom: 1rem; }
        .highlight { background: #ecfdf5; border-radius: 12px; padding: 1.25rem 1.5rem; margin: 1.5rem 0; }
        .highlight p { color: #0e7490; margin: 0; font-size: 14px; font-weight: 500; }
        .steps { list-style: none; padding: 0; margin: 1.5rem 0; }
        .steps li { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 1rem; color: #475569; font-size: 14px; }
        .step-num { width: 24px; height: 24px; background: #0e7490; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0; }
        .contact-box { background: #0a1628; border-radius: 12px; padding: 1.25rem 1.5rem; margin-top: 1.5rem; }
        .contact-box p { color: rgba(255,255,255,0.7); margin: 0; }
        .contact-box a { color: #c9a96e; }
        .footer { background: #060f1e; padding: 1.5rem 2rem; text-align: center; }
        .footer p { color: rgba(255,255,255,0.4); font-size: 12px; margin: 0; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <div class="logo">Φ</div>
          <h1>Request Received</h1>
        </div>
        <div class="body">
          <p class="greeting">Dear ${data.fullName},</p>
          <p>Thank you for reaching out to <strong>Phoenix Global Wellness</strong>. We have received your appointment request for <strong>${data.treatmentType}</strong> and our medical coordinator will be in touch with you within <strong>24 hours</strong>.</p>
          <div class="highlight"><p>✅ Your enquiry has been successfully received and assigned to our coordination team.</p></div>
          <p><strong>What happens next:</strong></p>
          <ul class="steps">
            <li><div class="step-num">1</div><div>A dedicated patient coordinator will contact you via email or WhatsApp within 24 hours.</div></li>
            <li><div class="step-num">2</div><div>We will review your medical requirements and prepare a tailored treatment plan with cost estimates.</div></li>
            <li><div class="step-num">3</div><div>Once confirmed, we handle visa invitation letters, airport transfers, and accommodation arrangements.</div></li>
          </ul>
          <div class="contact-box">
            <p>Need immediate assistance? Contact us at:<br>
            📞 <a href="tel:+917867868687">+91 786 786 8687</a> (WhatsApp available)<br>
            ✉️ <a href="mailto:info@phoenixglobalwellness.com">info@phoenixglobalwellness.com</a></p>
          </div>
        </div>
        <div class="footer">
          <p>Phoenix Global Wellness Private Ltd | Mumbai, India</p>
          <p style="margin-top:4px">This is an automated confirmation. Do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"Phoenix Global Wellness" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: `Your Appointment Request — Phoenix Global Wellness`,
    html,
  });
}
