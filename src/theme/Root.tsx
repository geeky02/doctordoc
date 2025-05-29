import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Root({ children }: { children: React.ReactNode }) {
  const { siteConfig } = useDocusaurusContext();
  const publishableKey = siteConfig.customFields?.clerkPublishableKey as string;

  // If we're in development and the key is not available, show a warning
  if (process.env.NODE_ENV === "development" && !publishableKey) {
    console.warn(
      "Missing Clerk Publishable Key. Please check your .env file and make sure CLERK_PUBLISHABLE_KEY is set."
    );
    return <>{children}</>;
  }

  // In production, we want to throw an error if the key is missing
  if (!publishableKey) {
    throw new Error("Missing Clerk Publishable Key");
  }

  return (
    <ClerkProvider publishableKey={publishableKey} afterSignOutUrl="/">
      {children}
    </ClerkProvider>
  );
}
