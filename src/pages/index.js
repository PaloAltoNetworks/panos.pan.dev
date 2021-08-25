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
import ScrollUpButton from "react-scroll-up-button";
import styles from "./styles.module.css";

const features = [
  {
    title: <h4>PAN-OS® APIs</h4>,
    imageUrl: "/img/panos_apis.svg",
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
            "button button--primary button--md",
            styles.featureButtons
          )}
          href="/docs/apis"
        >
          Learn More
        </Link>
      </div>
    ),
  },
  {
    title: <h4>IoT Public API</h4>,
    imageUrl: "/img/IoT-security.svg",
    description: <>Explore the IoT Public API Reference Docs</>,
    button: (
      <div className={styles.buttons}>
        <Link
          className={classnames(
            "button button--primary button--md",
            styles.featureButtons
          )}
          href="/api/iot/iot-public-api"
        >
          API Reference
        </Link>
      </div>
    ),
  },
  {
    title: <h4>Infrastructure-as-Code</h4>,
    imageUrl: "/img/ansible_terraform.png",
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
            "button button--primary button--md",
            styles.featureButtons
          )}
          href="/docs/automation"
        >
          Learn More
        </Link>
      </div>
    ),
  },
  {
    title: <h4>Cloud Templates</h4>,
    imageUrl: "/img/cloud_security.svg",
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
            "button button--primary button--md",
            styles.featureButtons
          )}
          href="/docs/cloud"
        >
          Learn More
        </Link>
      </div>
    ),
  },
  {
    title: <h4>Expedition</h4>,
    imageUrl: "/img/expedition.png",
    description: (
      <>
        Migrate configuration from legacy firewalls to Palo Alto Networks.
        Policy optimization, object cleanup, App-ID adoption and more!
      </>
    ),
    button: (
      <div className={styles.buttons}>
        <Link
          className={classnames(
            "button button--primary button--md",
            styles.featureButtons
          )}
          href="/docs/expedition"
        >
          Learn More
        </Link>
      </div>
    ),
  },
];

function Feature({ imageUrl, title, description, button }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.features)}>
      <div className={classnames("card shadow--lw", styles.card)}>
        <div className="cardImage">
          <img src={imgUrl} title={title} className={styles.cardImage} />
        </div>
        <div className={(classnames("cardBody"), styles.cardBody)}>
          <div className="toolTitle">{title}</div>
          <small>{description}</small>
        </div>
        <div className={styles.cardFooter}>{button}</div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const scrollToRef = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });
  const vertificalsRef = useRef(null);
  const toolsRef = useRef(null);
  const scrollToVerticals = () => scrollToRef(vertificalsRef);
  const scrollToTools = () => scrollToRef(toolsRef);
  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="All things related to automation and development with PAN-OS®"
      wrapperClassName="homepage"
    >
      <ScrollUpButton />
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            <span className={styles.heroProjectKeywords}>Build</span>{" "}
            <span className={styles.heroProjectText}>Next-gen Automation</span>
          </h1>
          <h6 className="hero__subtitle">
            <span className={styles.heroProjectText}>with the only </span>
            <span className={styles.heroProjectKeywords}>
              next-generation security
            </span>{" "}
            <span className={styles.heroProjectText}>platform</span>
          </h6>
          <div className={styles.buttons}>
            <Link
              className={classnames("button button--lg", styles.getStarted)}
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
              <div className={classnames("row centerFeatures")}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.expedition}>
          <div className="container">
            <div className="row row--no-gutters">
              <div className={classnames("col col--3")}>
                <div className="text">
                  <img
                    className={styles.toolImage}
                    src="/img/expedition.png"
                    alt="Expedition 2.0"
                  />
                </div>
                <h1 className={styles.text__dark}>Expedition 2.0</h1>
                <p className={styles.text__gray}>
                  Migrate configuration from legacy firewalls to Palo Alto
                  Networks
                </p>
                <div>
                  <Link
                    className={classnames(
                      "button button--info button--lg",
                      styles.expeditionButton
                    )}
                    href="/docs/expedition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className={classnames("col col--9")}>
                <div className="text text--center">
                  <img
                    src="/img/expedition2_architecture.svg"
                    alt="Expedition 2.0"
                    className={styles.expeditionImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.tools} ref={toolsRef}>
          <div className="container">
            <div className="row">
              {/* PAN Device Framework */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text text--center">
                  <img
                    className={styles.toolImage}
                    src="/img/python.png"
                    alt="PAN Device Framework"
                  />
                </div>
                <div className="toolTitle">PAN Device Framework</div>
                <p className={styles.text__gray}>
                  Object-oriented SDK for PAN-OS® and Panorama
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--info button--md",
                      styles.quickstart
                    )}
                    href="/docs/apis/pandevice_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--secondary button--md",
                      styles.github
                    )}
                    href="https://github.com/PaloAltoNetworks/pandevice"
                  >
                    <i
                      className={classnames("fab fa-github", styles.githubFont)}
                    ></i>
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
                <div className="toolTitle">PAN Python SDK</div>
                <p className={styles.text__gray}>
                  Multi-tool set for PAN-OS®, Panorama, WildFire and AutoFocus®
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--info button--md",
                      styles.quickstart
                    )}
                    href="/docs/apis/panpython_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--secondary button--md",
                      styles.github
                    )}
                    href="https://github.com/kevinsteves/pan-python"
                  >
                    <i
                      className={classnames("fab fa-github", styles.githubFont)}
                    ></i>
                  </Link>
                </div>
              </div>
              {/* PAN Go SDK */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="/img/gopher.png"
                    alt="PAN Go SDK"
                  />
                </div>
                <div className="toolTitle">PAN Go SDK</div>
                <p className={styles.text__gray}>
                  Cross version mechanism for interacting with PAN devices
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--info button--md",
                      styles.quickstart
                    )}
                    href="/docs/apis/pango_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--secondary button--md",
                      styles.github
                    )}
                    href="https://github.com/PaloAltoNetworks/pango"
                  >
                    <i
                      className={classnames("fab fa-github", styles.githubFont)}
                    ></i>
                  </Link>
                </div>
              </div>
              {/* Ansible */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="/img/ansible_logo.png"
                    alt="Ansible"
                  />
                </div>
                <div className="toolTitle">Ansible</div>
                <p className={styles.text__gray}>
                  Ansible modules for Palo Alto Networks NGFWs
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--info button--md",
                      styles.quickstart
                    )}
                    href="/docs/automation/ansible_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--secondary button--md",
                      styles.github
                    )}
                    href="https://github.com/PaloAltoNetworks/ansible-pan"
                  >
                    <i
                      className={classnames("fab fa-github", styles.githubFont)}
                    ></i>
                  </Link>
                </div>
              </div>
              {/* Expedition */}
              <div
                className={classnames("col col--3 col--offset-1", styles.tools)}
              >
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="/img/expedition.png"
                    alt="Expedition"
                  />
                </div>
                <div className="toolTitle">Expedition 2.0</div>
                <p className={styles.text__gray}>
                  Migrate configuration from legacy firewalls to Palo Alto
                  Networks
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--info button--md",
                      styles.quickstart
                    )}
                    href="/docs/expedition/expedition_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--secondary button--md",
                      styles.github
                    )}
                    href="https://live.paloaltonetworks.com/t5/expedition-migration-tool/ct-p/migration_tool"
                  >
                    <i
                      className={classnames("fas fa-users", styles.githubFont)}
                    ></i>
                  </Link>
                </div>
              </div>
              {/* Terraform Templates */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="/img/terraform_logo.png"
                    alt="Terraform Templates"
                  />
                </div>
                <div className="toolTitle">Terraform Templates</div>
                <p className={styles.text__gray}>
                  Deploy infrastructure on AWS and Azure secured by PAN NGFWs
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--info button--md",
                      styles.quickstart
                    )}
                    href="/docs/automation/terraform_qs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--secondary button--md",
                      styles.github
                    )}
                    href="https://github.com/PaloAltoNetworks/terraform-templates"
                  >
                    <i
                      className={classnames("fab fa-github", styles.githubFont)}
                    ></i>
                  </Link>
                </div>
              </div>
              {/* Cloud Templates */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="/img/cloud_security.svg"
                    alt="Cloud Templates"
                  />
                </div>
                <div className="toolTitle">Cloud Templates</div>
                <p className={styles.text__gray}>
                  Templates to automate your cloud security journey
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--info button--md",
                      styles.quickstart
                    )}
                    href="/docs/cloud"
                  >
                    Overview
                  </Link>
                  <Link
                    className={classnames(
                      "button button--secondary button--md",
                      styles.github
                    )}
                    href="https://live.paloaltonetworks.com/t5/Cloud-Integration/ct-p/Cloud_Templates"
                  >
                    <i
                      className={classnames("fas fa-users", styles.githubFont)}
                    ></i>
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
