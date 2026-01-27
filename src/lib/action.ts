"use server";

import { Resend } from 'resend';
import dotenv from 'dotenv'

dotenv.config()
const resend = new Resend(process.env.resend);

export async function Email(formData: FormData) {
  // 2. Extract data from the FormData object
  // The strings in .get() must match the 'name' attribute in your HTML inputs
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const projectType = formData.get('projectType') as string;
  const message = formData.get('message') as string;

  // 3. Basic Validation
  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    // 4. Send the email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Resend's default sender for unverified domains
      to: 'webdiviner25@gmail.com',            // Your personal inbox
      subject: `Inquiry: ${projectType} from ${name}`,
      replyTo: email,                          // Allows you to click 'Reply' in your email to talk to the user
      text: `
        New Project Request:
        --------------------
        Name: ${name}
        Email: ${email}
        Project Category: ${projectType}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Server Action Error:", error);
    return { success: false, error: "Internal Server Error. Please try again later." };
  }
}