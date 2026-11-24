export const repositories = [
  { name: 'payments-api', owner: 'acme', branch: 'main', files: '1,284' },
  { name: 'dashboard-web', owner: 'acme', branch: 'develop', files: '946' },
  { name: 'mobile-client', owner: 'acme', branch: 'main', files: '612' },
]

export const sourceFiles = [
  {
    path: 'src/auth/jwt-auth.guard.ts',
    lines: 'שורות 18–42',
    code: `async canActivate(context: ExecutionContext) {
  const request = context.switchToHttp().getRequest();
  const token = this.extractToken(request);
  const payload = await this.jwtService.verifyAsync(token);
  request.user = payload;
  return true;
}`,
  },
  {
    path: 'src/auth/auth.service.ts',
    lines: 'שורות 74–91',
    code: `async refreshToken(userId: string) {
  const user = await this.users.findById(userId);
  if (!user || !user.isActive) {
    throw new UnauthorizedException();
  }
  return this.jwtService.signAsync({ sub: user.id });
}`,
  },
]

export const suggestions = [
  'איפה מתבצע אימות משתמשים?',
  'איך מעוצבות שגיאות API?',
  'סכם את מודל הנתונים',
]
