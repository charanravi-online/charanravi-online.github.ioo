/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static exports
  reactStrictMode: true,
  trailingSlash: true, // Important for GitHub Pages
  basePath: '/charanravi-online.github.ioo', // Change to your repository name
  // other configurations can go here
};

export default nextConfig; // Exporting the configuration using ES module syntax
