/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcTraceProfiling: true,
    swcPlugins: [
      [
        '../../swc_plugin_react_i18n/target/wasm32-wasi/release/swc_plugin_i18n.wasm',
        {
          defaultlocale: "en",
          locales: ["en", "fr"],
        },
      ],
    ],
  },

}

module.exports = nextConfig
