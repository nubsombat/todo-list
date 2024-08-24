export function logError(error: unknown) {
  console.error('API Error:', error);
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}