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

// Contact form powered by StaticForms
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  // If email credentials are configured, send via nodemailer
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: `[Portfolio] ${subject || 'New Message'} — from ${name}`,
        html: `
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || '—'}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      })
    } catch (err) {
      console.error('Email error:', err)
      return res.status(500).json({ error: 'Failed to send email.' })
    }
  } else {
    // Dev mode — just log the message
    console.log('\n📬 New contact form submission:')
    console.log(`  Name: ${name}`)
    console.log(`  Email: ${email}`)
    console.log(`  Subject: ${subject}`)
    console.log(`  Message: ${message}\n`)
  }

  res.json({ ok: true, message: 'Message received!' })
})

app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running at http://localhost:${PORT}`)
})
