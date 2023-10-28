import type { UserSchemaType } from './type';

import { Schema, model } from 'mongoose';

const userSchema = new Schema<UserSchemaType>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: Date.now },
  activated: {
    type: Boolean,
    default: true,
  },
});

const Users = model<UserSchemaType>('User', userSchema);
export { Users };
