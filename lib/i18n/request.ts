import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const messages = (await import('../../messages/en.json')).default as unknown as Record<string, any>;

  return {
    locale: 'en',
    messages,
  };
});
