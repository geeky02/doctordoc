import React from "react";
import Layout from "@theme/Layout";
import { SignIn } from "@clerk/clerk-react";

export default function LoginPage() {
  return (
    <Layout title="Login" description="Login to Doctor Documentation Hub">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 60px)",
          padding: "2rem",
        }}
      >
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: {
                backgroundColor: "#2e8555",
                "&:hover": {
                  backgroundColor: "#29784c",
                },
              },
            },
          }}
        />
      </div>
    </Layout>
  );
}
