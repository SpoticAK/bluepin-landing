/**
 * BluePin Waitlist - Google Apps Script
 * 
 * This script handles waitlist submissions from your landing page
 * and captures referral data for engagement tracking.
 * 
 * Setup:
 * 1. Go to script.google.com
 * 2. Create new project
 * 3. Replace the code with this template
 * 4. Deploy as web app (execute as you, anyone can access)
 * 5. Replace SHEET_ID and SHEET_NAME below
 * 6. Update the deployment URL in your frontend
 */

// Configuration
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE"; // Replace with your sheet ID
const SHEET_NAME = "Waitlist"; // Your sheet name

/**
 * Main handler for POST requests from the frontend
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Parse form data
    const email = e.parameter.email?.trim();
    const ref = e.parameter.ref?.trim() || "organic"; // Default to "organic" if no ref
    const source = e.parameter.source?.trim() || "unknown";
    
    // Validation
    if (!email || !isValidEmail(email)) {
      return createResponse(400, "Invalid email address");
    }
    
    if (isDuplicate(sheet, email)) {
      return createResponse(200, "Email already exists");
    }
    
    // Append data to sheet
    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      email,
      ref,
      source,
      "subscribed", // Status
      "", // Notes (for manual tracking)
    ]);
    
    // Optional: Send confirmation email
    sendConfirmationEmail(email, ref);
    
    return createResponse(200, "Successfully added to waitlist");
    
  } catch (error) {
    Logger.log("Error: " + error);
    return createResponse(500, "Server error: " + error.toString());
  }
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Check if email already exists in sheet
 */
function isDuplicate(sheet, email) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][1]?.toLowerCase() === email.toLowerCase()) {
      return true;
    }
  }
  return false;
}

/**
 * Send confirmation email to user
 */
function sendConfirmationEmail(email, ref) {
  const subject = "Welcome to BluePin - You're on the Waitlist! 🚀";
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #070A6A;">Welcome to BluePin!</h2>
      <p>Thanks for joining our waitlist. You'll be among the first to get early access to real-time product intelligence and verified supplier discovery.</p>
      
      <div style="background: #f0f4ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0;"><strong>What's next?</strong></p>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>We'll send you exclusive updates</li>
          <li>Early access to beta features</li>
          <li>Special founder benefits</li>
        </ul>
      </div>
      
      <p style="color: #666; font-size: 12px;">
        If you were referred, great! We'll track your engagement. 
        <br>
        Referred by: <strong>${ref}</strong>
      </p>
      
      <p style="color: #999; font-size: 11px;">
        You received this email because you signed up for the BluePin waitlist.
      </p>
    </div>
  `;
  
  try {
    GmailApp.sendEmail(email, subject, "", {
      htmlBody: htmlBody,
    });
  } catch (error) {
    Logger.log("Email send error: " + error);
  }
}

/**
 * Create CORS-compatible JSON response
 */
function createResponse(statusCode, message) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: statusCode,
      message: message,
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .append(""); // CORS handling
}

/**
 * Optional: Helper function to get referral stats
 * Access via: https://yourscript.apps.ggmail.com/?action=stats&ref=ankit
 */
function doGet(e) {
  if (e.parameter.action === "stats" && e.parameter.ref) {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const ref = e.parameter.ref.toLowerCase();
    
    const data = sheet.getDataRange().getValues();
    let count = 0;
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][2]?.toLowerCase() === ref) {
        count++;
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      ref: ref,
      count: count,
      timestamp: new Date(),
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput("Stats API")
    .setMimeType(ContentService.MimeType.TEXT);
}
