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
import React, { useRef } from "react";
import Particles from "react-particles-js";
import ScrollUpButton from "react-scroll-up-button";
import styles from "./styles.module.css";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.4
        }
      }
    }
  },
  retina_detect: true
};

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
    <div className={classnames("col col--4", styles.features)}>
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
  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth" });
  const vertificalsRef = useRef(null);
  const toolsRef = useRef(null);
  const scrollToVerticals = () => scrollToRef(vertificalsRef);
  const scrollToTools = () => scrollToRef(toolsRef);
  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="All things related to automation and development with PAN-OS®"
    >
      <ScrollUpButton />
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div>
            <Particles className="particles" params={particlesOptions} />
          </div>
          <h1 className="hero__title">Next-gen Automation</h1>
          <p className="hero__subtitle">
            with the only next-generation security platform
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              onClick={scrollToVerticals}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features} ref={vertificalsRef}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    "button button--outline button--primary button--lg",
                    styles.getStarted
                  )}
                  onClick={scrollToTools}
                >
                  Tools and SDKs
                </Link>
              </div>
            </div>
          </section>
        )}
        <section className={styles.tools} ref={toolsRef}>
          <div className="container">
            <div className="row">
              {/* PAN Device Framework */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/panos_apis.svg"
                    alt="PAN Device Framework"
                  />
                </div>
                <h3>PAN Device Framework</h3>
                <p className="text text--seconday">Description goes here</p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.quickstart
                    )}
                    href="/docs/pandevice_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.github
                    )}
                    href="https://github.com/PaloAltoNetworks/pandevice"
                  >
                    <img
                      src="../static/img/GitHub_Logo_White.png"
                      width="auto"
                      height="19"
                    />
                  </Link>
                </div>
              </div>

              {/* PAN Python SDK */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/panos_apis.svg"
                    alt="PAN Python SDK"
                  />
                </div>
                <h3>PAN Python SDK</h3>
                <p className="text text--seconday">Description goes here</p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.quickstart
                    )}
                    href="/docs/panpython_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.github
                    )}
                    href="https://github.com/kevinsteves/pan-python"
                  >
                    <img
                      src="../static/img/GitHub_Logo_White.png"
                      width="auto"
                      height="19"
                    />
                  </Link>
                </div>
              </div>
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/ansible_logo.png"
                    alt="Ansible PAN"
                  />
                </div>
                <h3>Ansible PAN</h3>
                <p className="text text--seconday">Description goes here</p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.quickstart
                    )}
                    href="/docs/ansible_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.github
                    )}
                    href="https://github.com/PaloAltoNetworks/ansible-pan"
                  >
                    <img
                      src="../static/img/GitHub_Logo_White.png"
                      width="auto"
                      height="19"
                    />
                  </Link>
                </div>
              </div>
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/terraform_logo.png"
                    alt="Terraform Templates"
                  />
                </div>
                <h3>Terraform Templates</h3>
                <p className="text text--seconday">Description goes here</p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.quickstart
                    )}
                    href="/docs/terraform_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.github
                    )}
                    href="https://github.com/PaloAltoNetworks/terraform-templates"
                  >
                    <img
                      src="../static/img/GitHub_Logo_White.png"
                      width="auto"
                      height="19"
                    />
                  </Link>
                </div>
              </div>
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/panos_apis.svg"
                    alt="Cloud Templates"
                  />
                </div>
                <h3>Cloud Templates</h3>
                <p className="text text--seconday">Description goes here</p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.quickstart
                    )}
                    href="/docs/cloudtemplates_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.github
                    )}
                    href="https://live.paloaltonetworks.com/t5/Cloud-Integration/ct-p/Cloud_Templates"
                  >
                    Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
