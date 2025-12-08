import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactMessageSchema } from '../shared/schema';
import { fromZodError } from 'zod-validation-error';
import { randomUUID } from 'crypto';

// In-memory storage (in production, you'd want to use a database)
const contactMessages: Array<{
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}> = [];

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);

      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          error: 'Validation failed',
          details: validationError.message,
        });
      }

      const id = randomUUID();
      const message = {
        ...result.data,
        id,
        createdAt: new Date(),
      };

      contactMessages.push(message);

      return res.status(201).json({
        success: true,
        message: 'Message sent successfully',
        id: message.id,
      });
    } catch (error) {
      console.error('Error creating contact message:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'GET') {
    try {
      const messages = contactMessages.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
      );
      return res.json(messages);
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

