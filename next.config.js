/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcTraceProfiling: true,
    swcPlugins: [
      [
        '@neofinancial/swc_plugin_react_i18n',
        {
          defaultlocale: "en",
          locales: ["en", "fr"],
        },
      ],
    ],
  },

}

module.exports = nextConfig
