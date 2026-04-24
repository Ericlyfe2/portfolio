import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }))

// Contact form
<!-- Contact Form powered by StaticForms -->
<form action="https://api.staticforms.dev/submit" method="POST">
  <!-- Your StaticForms API key -->
  <input type="hidden" name="accessKey" value="your-api-key-here" />

  <!-- Optional: redirect URL after submission -->
  <input type="hidden" name="redirectTo" value="https://yourdomain.com/thank-you" />

  <!-- Form fields -->
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="subject">Subject:</label>
  <input type="text" id="subject" name="subject" />

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Send Message</button>
</form>

