import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

export async function handleContactSubmit(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, phone, email, subject, message } = body;

    // 1. Check required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    // 2. Validate phone number format (must be 10 digits and numeric only)
    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Phone number must be exactly 10 digits and contain only numbers.' },
        { status: 400 }
      );
    }

    // 3. Check if phone or email already exists in database
    const queryConditions: any[] = [{ phone }];
    if (email && email.trim() !== '') {
      queryConditions.push({ email: email.toLowerCase().trim() });
    }

    const existingContact = await Contact.findOne({
      $or: queryConditions,
    });

    if (existingContact) {
      if (email && existingContact.email?.toLowerCase().trim() === email.toLowerCase().trim()) {
        return NextResponse.json(
          { error: 'Email already exists, please enter another email.' },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: 'Phone number already exists, please enter another phone number.' },
        { status: 400 }
      );
    }

    // 4. Create new contact
    const newContact = await Contact.create({
      name,
      phone,
      email: email ? email.toLowerCase().trim() : undefined,
      subject,
      message,
      role: 'user',
    });

    return NextResponse.json(
      { message: 'Message sent successfully!', contact: newContact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error in contact controller:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending your message. Please try again.' },
      { status: 500 }
    );
  }
}
