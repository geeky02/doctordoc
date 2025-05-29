import React from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Comprehensive medical documentation resources for healthcare professionals"
    >
      <main className={styles.landingMain}>
        <div className={styles.landingContainer}>
          <div className={styles.landingLeft}>
            <h1 className={styles.landingTitle}>Doctor Documentation Hub</h1>
            <p className={styles.landingSubtitle}>
              Comprehensive resources, templates, and best practices for medical
              documentation. Streamline your workflow and ensure compliance with
              our expert guides.
            </p>
            <Link
              className={clsx(
                "button button--primary",
                styles.quickstartButton
              )}
              to="/docs/intro"
            >
              Quickstart. Free. Easy. Fast.
            </Link>
          </div>
          <div className={styles.landingRight}>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/watch?v=wppOexzYOMw"
                title="Overview Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
