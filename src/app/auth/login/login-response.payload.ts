export interface LoginResponse {
  authenticationToken: string;
  refreshToken: string;
  expiresAt: Date;
  rollNo: string;
}
