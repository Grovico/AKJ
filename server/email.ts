import nodemailer from "nodemailer";
import type { InsertInquiry } from "@shared/schema";

const COMPANY_EMAIL = "akjeyamtraders6@gmail.com";

// Create transporter - configure with your Gmail credentials
// For Gmail, you'll need to use an App Password (not your regular password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || COMPANY_EMAIL,
    pass: process.env.EMAIL_PASSWORD || "", // Use App Password here
  },
});

// Email template for company notification
function getCompanyEmailTemplate(inquiry: InsertInquiry) {
  return {
    from: `"Jeyam Traders Website" <${COMPANY_EMAIL}>`,
    to: COMPANY_EMAIL,
    subject: `New Inquiry from ${inquiry.companyName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9fafb; padding: 20px; margin-top: 0; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb; }
            .field:last-child { border-bottom: none; }
            .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; }
            .value { color: #4b5563; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
            .message-box { background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Inquiry Received</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Company Name:</div>
                <div class="value">${inquiry.companyName}</div>
              </div>
              <div class="field">
                <div class="label">Contact Person:</div>
                <div class="value">${inquiry.contactPerson}</div>
              </div>
              <div class="field">
                <div class="label">Phone Number:</div>
                <div class="value">${inquiry.phone}</div>
              </div>
              <div class="field">
                <div class="label">Email Address:</div>
                <div class="value"><a href="mailto:${inquiry.email}">${inquiry.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Material Type:</div>
                <div class="value">${inquiry.materialType}</div>
              </div>
              ${inquiry.quantity ? `
              <div class="field">
                <div class="label">Estimated Quantity:</div>
                <div class="value">${inquiry.quantity}</div>
              </div>
              ` : ""}
              ${inquiry.message ? `
              <div class="field">
                <div class="label">Additional Details:</div>
                <div class="message-box">${inquiry.message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ""}
            </div>
            <div class="footer">
              <p><strong>Action Required:</strong> Please respond to the customer within 24 hours.</p>
              <p>This inquiry was submitted through the Jeyam Traders website contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Inquiry Received

Company Name: ${inquiry.companyName}
Contact Person: ${inquiry.contactPerson}
Phone: ${inquiry.phone}
Email: ${inquiry.email}
Material Type: ${inquiry.materialType}
${inquiry.quantity ? `Quantity: ${inquiry.quantity}\n` : ""}
${inquiry.message ? `Message:\n${inquiry.message}\n` : ""}

Please respond to the customer within 24 hours.
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim(),
  };
}

// Email template for customer confirmation
function getCustomerEmailTemplate(inquiry: InsertInquiry) {
  return {
    from: `"Jeyam Traders" <${COMPANY_EMAIL}>`,
    to: inquiry.email,
    subject: "Thank You for Your Inquiry - Jeyam Traders",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 30px 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #ffffff; padding: 30px 20px; border: 1px solid #e5e7eb; }
            .message { margin: 20px 0; }
            .contact-info { background-color: #f9fafb; padding: 20px; margin-top: 20px; border-radius: 5px; border-left: 4px solid #2563eb; }
            .inquiry-details { background-color: #eff6ff; padding: 15px; margin: 20px 0; border-radius: 5px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
            .highlight { color: #2563eb; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">Thank You for Your Inquiry!</h2>
            </div>
            <div class="content">
              <p>Dear ${inquiry.contactPerson},</p>
              
              <div class="message">
                <p>Thank you for contacting <strong>Jeyam Traders</strong>. We have received your inquiry regarding <span class="highlight">${inquiry.materialType}</span> and appreciate your interest in our premium construction materials.</p>
                
                <p>Our team will review your inquiry and get back to you within <strong>24 hours</strong> with:</p>
                <ul>
                  <li>Competitive pricing for your requirements</li>
                  <li>Availability and delivery options</li>
                  <li>Any additional information you may need</li>
                </ul>
              </div>
              
              <div class="inquiry-details">
                <h3 style="margin-top: 0; color: #1f2937;">Your Inquiry Summary:</h3>
                <p><strong>Company:</strong> ${inquiry.companyName}</p>
                <p><strong>Material Type:</strong> ${inquiry.materialType}</p>
                ${inquiry.quantity ? `<p><strong>Quantity:</strong> ${inquiry.quantity}</p>` : ""}
                <p><strong>Reference Number:</strong> ${new Date().getTime()}</p>
              </div>
              
              <div class="contact-info">
                <h3 style="margin-top: 0; color: #1f2937;">Need Immediate Assistance?</h3>
                <p><strong>📞 Phone:</strong> +91 7867086626 / +91 9442233290</p>
                <p><strong>📧 Email:</strong> akjeyamtraders6@gmail.com</p>
                <p><strong>🕐 Business Hours:</strong> Monday - Saturday, 8:00 AM - 6:00 PM</p>
                <p><strong>📍 Location:</strong> Ramanathapuram District, Tamil Nadu, India</p>
              </div>
              
              <p style="margin-top: 30px;">We look forward to serving you and being part of your construction project!</p>
              
              <p>Best regards,<br>
              <strong>Jeyam Traders Team</strong><br>
              <em>35 Years of Excellence in Construction Materials</em></p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Jeyam Traders. All rights reserved.</p>
              <p>Ramanathapuram District, Tamil Nadu, India</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Thank You for Your Inquiry!

Dear ${inquiry.contactPerson},

Thank you for contacting Jeyam Traders. We have received your inquiry regarding ${inquiry.materialType} and appreciate your interest in our premium construction materials.

Our team will review your inquiry and get back to you within 24 hours with competitive pricing, availability, and delivery options.

Your Inquiry Summary:
- Company: ${inquiry.companyName}
- Material Type: ${inquiry.materialType}
${inquiry.quantity ? `- Quantity: ${inquiry.quantity}\n` : ""}
- Reference Number: ${new Date().getTime()}

Need Immediate Assistance?
Phone: +91 7867086626 / +91 9442233290
Email: akjeyamtraders6@gmail.com
Business Hours: Monday - Saturday, 8:00 AM - 6:00 PM
Location: Ramanathapuram District, Tamil Nadu, India

We look forward to serving you!

Best regards,
Jeyam Traders Team
35 Years of Excellence in Construction Materials

© ${new Date().getFullYear()} Jeyam Traders. All rights reserved.
    `.trim(),
  };
}

export async function sendInquiryEmails(inquiry: InsertInquiry): Promise<void> {
  try {
    // Verify transporter configuration
    if (!process.env.EMAIL_PASSWORD) {
      console.warn("EMAIL_PASSWORD not set. Emails will not be sent. Please configure Gmail App Password in .env file.");
      return;
    }

    // Send email to company
    const companyEmail = getCompanyEmailTemplate(inquiry);
    await transporter.sendMail(companyEmail);
    console.log(`✓ Company notification email sent to ${COMPANY_EMAIL}`);
    
    // Send confirmation email to customer
    const customerEmail = getCustomerEmailTemplate(inquiry);
    await transporter.sendMail(customerEmail);
    console.log(`✓ Confirmation email sent to ${inquiry.email}`);
    
    console.log(`✓ All emails sent successfully for inquiry from ${inquiry.companyName}`);
  } catch (error) {
    console.error("Error sending emails:", error);
    // Don't throw error - we still want to save the inquiry even if email fails
    // This ensures the inquiry is stored even if email service is temporarily unavailable
  }
}

