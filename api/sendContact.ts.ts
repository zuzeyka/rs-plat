import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(204).end();
    }

    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST,OPTIONS');
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');

    const { name, email, message } = req.body as {
        name?: string;
        email?: string;
        message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST!,
        port: Number(process.env.SMTP_PORT!),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER!,
            pass: process.env.SMTP_PASS!,
        },
    });

    try {
        await transporter.sendMail({
            from: `"RS-Plat Kontakt" <${process.env.SMTP_USER}>`,
            to: 'rikard@rsplatab.se',
            subject: `Nya användarmeddelande från ${name} (rsplatab.se)`,
            text: `Namm: ${name}\nE-post: ${email}\n\n${message}`,
            html: `<p><strong>Namn:</strong> ${name}</p>
             <p><strong>E-post:</strong> ${email}</p>
             <p>${message}</p>`,
        });
        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('Email send error:', err);
        return res.status(500).json({ error: 'Failed to send email.' });
    }
}
