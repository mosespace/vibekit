import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "VibeKit",
  fullName: "VibeKit Framework",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vibekit.desishub.com",
  tagline: "One command. Any AI provider. Ship production apps.",
  description:
    "create-vibekit-app scaffolds your project, collects your idea, detects your AI provider, and launches a structured planning + build session — from one terminal command.",
  twitter: "@mosespace",
  github: "https://github.com/mosespace/vibekit_pro",
  upstreamGithub: "https://github.com/MUKE-coder/vibekit",
  community: "https://chat.whatsapp.com/LKQUiM0dExJ60EiBDgoqRq",
  // Fork maintainer
  author: "Moses Kisakye",
  authorUrl: "https://github.com/mosespace",
  authorAvatar:
    "https://media.licdn.com/dms/image/v2/D5603AQHCxzu2HIx-4g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718217272899?e=2147483647&v=beta&t=hIqPNWFHlJtHf45YH1ejnQ2tlMQNZDWt6FLBT9y1pxE",
  // Original creator
  originalAuthor: "JB (Muke Johnbaptist) · Desishub Technologies",
  originalAuthorUrl: "https://jb.desishub.com",
  originalAuthorAvatar: "https://avatars.githubusercontent.com/u/64189841?v=4",
} as const;
