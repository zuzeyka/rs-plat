import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { name, email, message } = req.body as {
        name?: string;
        email?: string;
        message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"RS-Plat Contact" <${process.env.SMTP_USER}>`,
            to: 'stepan.tarasenko.26@gmail.com',
            subject: `New message from ${name}`,
            text: `
You have a new message from your site:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('Failed to send email:', err);
        return res.status(500).json({ error: 'Failed to send email.' });
    }
}
