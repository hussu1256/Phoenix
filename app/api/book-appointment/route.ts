import { NextRequest, NextResponse } from 'next/server';
import {
  sendAppointmentToAdmin,
  sendConfirmationToPatient,
  type AppointmentEmailData,
} from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, email, phone, country, treatmentType, hospitalPreference, message } = body;

    // Validation
    if (!fullName || !email || !phone || !country || !treatmentType) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const data: AppointmentEmailData = {
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      country: String(country).trim(),
      treatmentType: String(treatmentType).trim(),
      hospitalPreference: hospitalPreference ? String(hospitalPreference).trim() : undefined,
      message: message ? String(message).trim() : undefined,
    };

    // Send both emails (in parallel)
    await Promise.all([
      sendAppointmentToAdmin(data),
      sendConfirmationToPatient(data),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Your appointment request has been received. We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('[book-appointment API error]:', error);

    // Don't expose internal error details to client
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send your request. Please try again or contact us directly.',
      },
      { status: 500 }
    );
  }
}

// Prevent GET requests
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
