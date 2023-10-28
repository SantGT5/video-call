type UserSchemaType = {
  name: string;
  username: string;
  email: string;
  password: string;
  emailVerified?: boolean;
  createdAt?: Date;
  activated?: boolean;
};

export type { UserSchemaType };
