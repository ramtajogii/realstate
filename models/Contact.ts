import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  subject?: string;
  message?: string;
  role: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    validate: {
      validator: function (v: string) {
        return /^\d{10}$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid 10-digit phone number. Only numbers are allowed.`,
    },
  },
  email: { type: String },
  city: { type: String },
  subject: { type: String },
  message: { type: String },
  role: { type: String, default: 'user' },
  createdAt: { type: Date, default: Date.now },
});

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
