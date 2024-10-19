/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",  // <=== enables static exports
    // reactStrictMode: true,

};
module.exports = {
    trailingSlash: true, // This is important for GitHub Pages
    basePath: '/charanravi-online.github.ioo', // Change to your repository name
    // other configurations
  };
export default nextConfig;
