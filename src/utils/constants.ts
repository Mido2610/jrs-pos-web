export const APP_NAME = 'JRS';
export const APP_FULL_NAME = 'JRS POS';
export const DEVELOPER_NAME = 'JRS';
export const SUPPORT_EMAIL = 'contact@mmenu.vn';
export const SUPPORT_HOTLINE = '+84947586666';
export const SUPPORT_HOTLINE_HREF = 'tel:+84947586666';
export const WEBSITE_URL = 'https://mido2610.github.io/jrs-pos-web/';
export const LOGO_PATH = `${import.meta.env.BASE_URL}logo_jrs.png`;

export const DELETE_ACCOUNT_SUBJECT = `Delete Account Request – ${APP_NAME} POS`;
export const SUPPORT_HOURS = 'Mon – Sat, 8:00 AM – 6:00 PM';
export const DELETION_DAYS = 7;

export const NAV_ROUTES = [
  { label: 'Home', path: '/' },
  { label: 'Contact', path: '/contact' },
  { label: 'Delete Account', path: '/delete-account' },
] as const;
