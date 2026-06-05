export type InAppBrowser =
  | 'tiktok'
  | 'instagram'
  | 'facebook'
  | 'snapchat'
  | 'linkedin'
  | 'pinterest'
  | null;

export function detectInAppBrowser(userAgent: string): InAppBrowser {
  const ua = userAgent.toLowerCase();
  if (ua.includes('bytedance') || ua.includes('musical_ly') || ua.includes('tiktok')) return 'tiktok';
  if (ua.includes('instagram')) return 'instagram';
  if (ua.includes('fbav') || ua.includes('fban') || ua.includes('fb_iab')) return 'facebook';
  if (ua.includes('snapchat')) return 'snapchat';
  if (ua.includes('linkedin')) return 'linkedin';
  if (ua.includes('pinterest')) return 'pinterest';
  return null;
}

export type Platform = 'ios' | 'android' | 'other';

export function detectPlatform(userAgent: string): Platform {
  const ua = userAgent.toLowerCase();
  if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) return 'ios';
  if (ua.includes('android')) return 'android';
  return 'other';
}

export function buildEscapeUrl(currentUrl: string, platform: Platform): string | null {
  if (platform === 'ios') {
    return currentUrl.replace(/^https?:\/\//, 'x-safari-https://');
  }
  if (platform === 'android') {
    const stripped = currentUrl.replace(/^https?:\/\//, '');
    return `intent://${stripped}#Intent;scheme=https;package=com.android.chrome;end`;
  }
  return null;
}
