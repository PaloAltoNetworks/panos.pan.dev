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
        opportunities for configuration and management.
      </>
    ),
    button: (
      <div className={styles.buttons}>
        <Link
          className={classnames(
            "button button--outline button--primary button--md",
            styles.getStarted
          )}
          href="/docs/panos_api"
        >
          Learn More
        </Link>
      </div>
    )
  },
  {
    title: <>Infrastructure-as-Code</>,
    imageUrl: "img/ansible_terraform.png",
    description: (
      <>
        Version control your infrastructure and eliminate human-error. Declare
        the target configuration and let them automate the rest.
      </>
    ),
    button: (
      <div className={styles.buttons}>
        <Link
          className={classnames(
            "button button--outline button--primary button--md",
            styles.getStarted
          )}
          href="/docs/automation"
        >
          Learn More
        </Link>
      </div>
    )
  },
  {
    title: <>Cloud Templates</>,
    imageUrl: "img/cloud_security.svg",
    description: (
      <>
        Auto-scale a firewall with a cloud application while ensuring a seamless
        policy across on-prem and cloud.
      </>
    ),
    button: (
      <div className={styles.buttons}>
        <Link
          className={classnames(
            "button button--outline button--primary button--md",
            styles.getStarted
          )}
          href="/docs/cloud"
        >
          Learn More
        </Link>
      </div>
    )
  }
];

function Feature({ imageUrl, title, description, button }) {
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
      {button}
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
              onClick={scrollToTools}
            >
              Explore Tools
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
            </div>
          </section>
        )}
        <section className={styles.tools} ref={toolsRef}>
          <div className="container">
            <div className="row">
              {/* PAN Device Framework */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text text--center">
                  <img
                    className={styles.toolImage}
                    src="img/python.png"
                    alt="PAN Device Framework"
                  />
                </div>
                <h4>PAN Device Framework</h4>
                <p className={styles.text__gray}>
                  Object-oriented SDK for PAN-OS® and Panorama
                </p>
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
                      src="/img/GitHub_Logo_White.png"
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
                    src="img/python.png"
                    alt="PAN Python SDK"
                  />
                </div>
                <h4>PAN Python SDK</h4>
                <p className={styles.text__gray}>
                  Multi-tool set for PAN-OS®, Panorama, WildFire and AutoFocus®
                </p>
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
                      src="/img/GitHub_Logo_White.png"
                      width="auto"
                      height="19"
                    />
                  </Link>
                </div>
              </div>

              {/* PAN Go SDK */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/go.svg"
                    alt="PAN Go SDK"
                  />
                </div>
                <h4>PAN Go SDK</h4>
                <p className={styles.text__gray}>
                  Cross version mechanism for interacting with PAN devices
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.quickstart
                    )}
                    href="/docs/pango_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.github
                    )}
                    href="https://github.com/PaloAltoNetworks/pango"
                  >
                    <img
                      src="/img/GitHub_Logo_White.png"
                      width="auto"
                      height="19"
                    />
                  </Link>
                </div>
              </div>

              {/* Ansible PAN */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/ansible_logo.png"
                    alt="Ansible PAN"
                  />
                </div>
                <h4>Ansible PAN</h4>
                <p className={styles.text__gray}>
                  Ansible modules for Palo Alto Networks NGFWs
                </p>
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
                      src="/img/GitHub_Logo_White.png"
                      width="auto"
                      height="19"
                    />
                  </Link>
                </div>
              </div>

              {/* Placeholder */}
              <div className={classnames("col col--3", styles.tools)}></div>

              {/* Terraform Templates */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/terraform_logo.png"
                    alt="Terraform Templates"
                  />
                </div>
                <h4>Terraform Templates</h4>
                <p className={styles.text__gray}>
                  Deploy infrastructure on AWS and Azure secured by PAN NGFWs
                </p>
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
                      src="/img/GitHub_Logo_White.png"
                      width="auto"
                      height="19"
                    />
                  </Link>
                </div>
              </div>

              {/* Cloud Templates */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/cloud_security.svg"
                    alt="Cloud Templates"
                  />
                </div>
                <h4>Cloud Templates</h4>
                <p className={styles.text__gray}>
                  Templates to automate your cloud security journey
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.quickstart
                    )}
                    href="/docs/cloud"
                  >
                    Overview
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

              {/* Placeholder */}
              <div className={classnames("col col--3", styles.tools)}></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
