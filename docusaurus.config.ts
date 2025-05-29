import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Doctor Documentation Hub",
  tagline: "Comprehensive Medical Documentation Resources",
  favicon: "img/favicon.ico",

  // Add environment variables
  customFields: {
    clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  },

  // Future flags
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: "https://geeky02.github.io", // Updated to your GitHub Pages URL
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/doctordoc", // Updated to match your repository name

  // GitHub pages deployment config
  organizationName: "geeky02", // Your GitHub username
  projectName: "doctordoc", // Your repository name

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/geeky02/doctordoc",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/geeky02/doctordoc",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/medical-docs-social-card.jpg",
    navbar: {
      title: "Doctor Docs",
      logo: {
        alt: "Doctor Documentation Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "search",
          position: "left",
        },
        {
          to: "/login",
          label: "Log In",
          position: "right",
          className: "navbar-login-button",
        },
        {
          to: "/docs/intro",
          label: "Docs",
          position: "left",
          className: "navbar-docs-button",
        },
        {
          to: "/blog",
          label: "Blogs",
          position: "left",
          className: "navbar-blog-button",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro",
            },
            {
              label: "Basic Principles",
              to: "/docs/category/basic-principles",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Medical Forums",
              href: "#",
            },
            {
              label: "Discord",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Doctor Documentation Hub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;