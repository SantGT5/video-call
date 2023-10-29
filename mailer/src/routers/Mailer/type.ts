type emailConfigType = {
  userEmail: string;
  emailBody: string;
  subject: string;
};

type emailSenderType = {
  userEmail: string;
  accessToken: string;
};

export type { emailConfigType, emailSenderType };
