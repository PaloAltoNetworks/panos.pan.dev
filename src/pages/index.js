/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import classnames from "classnames";
import React from "react";
import styles from "./styles.module.css";

const features = [
  {
    title: <>APIs and SDKs</>,
    imageUrl: "img/panos_apis.svg",
    description: (
      <>
        Our APIs and SDKs provide a collection of open, feature-rich automation
        opportunities for configuration and management of Palo Alto Networks
        next-generation firewalls.
      </>
    )
  },
  {
    title: <>Infrastructure-as-Code</>,
    imageUrl: "img/ansible_terraform.png",
    description: (
      <>
        Version control your infrastructure and eliminate human-error from
        device configuration with infrastructure-as-code tools and techniques.
        Tell your tools how the configuration should look and let them automate
        the rest.
      </>
    )
  },
  {
    title: <>Cloud-scale Security</>,
    imageUrl: "img/cloud_security.svg",
    description: (
      <>
        Whether it's auto-scaling a firewall with a cloud application, seamless
        policy across on-prem and cloud, or a single place to see all your cloud
        security events, Palo Alto Networks cloud integrations have you covered.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="All things related to automation and development with PAN-OS®"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/doc1")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props}>
                    <Link
                      className={classnames(
                        "button button--outline button--secondary button--lg",
                        styles.getStarted
                      )}
                      to={useBaseUrl("docs/doc1")}
                    >
                      Get Started
                    </Link>
                  </Feature>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
