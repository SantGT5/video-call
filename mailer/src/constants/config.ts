const cspConfig = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'code.jquery.com'],
    styleSrc: ["'self'", 'fonts.googleapis.com'],
  },
};

export { cspConfig };
