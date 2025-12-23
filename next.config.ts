/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts'
);

const nextConfig = {
  serverExternalPackages: ["mjml"],
};

export default withNextIntl(nextConfig);