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

function Docs() {
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
      description="All things related to automation and development with Demisto"
    >
      <main>
        <section className={styles.features}>
          <div className="container">
            <h1>PAN-OS® For Developers</h1>
            <description>
              PAN‑OS® is the software that runs all Palo Alto Networks®
              next-generation firewalls. By leveraging our APIs, SDKs,
              Automations, and Cloud Templates you can take PAN-OS® to the next
              level.
            </description>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col col--4">
                <div class="card shadow--md">
                  <div class="card__header">
                    <h3>APIs and SDKs</h3>
                    <description>
                      Our APIs and SDKs provide a collection of open,
                      feature-rich automation opportunities for configuration
                      and management.
                    </description>
                  </div>
                  <div class="card__body">
                    <Link href={useBaseUrl("docs/apis/xmlapi_qs")}>
                      PAN-OS® XML API
                    </Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/apis/restapi_qs")}>
                      PAN-OS® REST API
                    </Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/apis/pandevice_qs")}>
                      PAN Device Framework
                    </Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/apis/panpython_qs")}>
                      PAN Python SDK
                    </Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/apis/pango_qs")}>
                      PAN Go SDK
                    </Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/apis/panos_dag_qs")}>
                      Tutorials
                    </Link>
                    <br></br>
                  </div>
                  <div class="card__footer">
                    <Link
                      className={classnames(
                        "button button--primary",
                        styles.docs
                      )}
                      href={useBaseUrl("/docs/apis")}
                    >
                      APIs and SDKS
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div class="card shadow--md">
                  <div class="card__header">
                    <h2>Automation</h2>
                    <description>
                      Version control your infrastructure and eliminate
                      human-error. Declare the target configuration and let them
                      automate the rest.
                    </description>
                  </div>
                  <div class="card__body">
                    <Link
                      href={useBaseUrl(
                        "docs/automation/terraform_ansible_container"
                      )}
                    >
                      Terraform and Ansible Container
                    </Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/automation/ansible_qs")}>
                      Ansible
                    </Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/automation/terraform_qs")}>
                      Terraform
                    </Link>
                    <br></br>
                    <Link
                      href={useBaseUrl(
                        "docs/automation/automation_tutorials_ansible_srule"
                      )}
                    >
                      Tutorials
                    </Link>
                  </div>
                  <div class="card__footer">
                    <Link
                      className={classnames(
                        "button button--primary",
                        styles.docs
                      )}
                      href={useBaseUrl("docs/automation")}
                    >
                      Automation
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div class="card shadow--md">
                  <div class="card__header">
                    <h2>Cloud</h2>
                    <description>
                      Auto-scale a firewall with a cloud application while
                      ensuring a seamless policy across on-prem and cloud.
                    </description>
                  </div>
                  <div class="card__body">
                    <Link href={useBaseUrl("docs/cloud/aws_qs")}>AWS</Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/cloud/azure_qs")}>Azure</Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/cloud/gcp_qs")}>Google</Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/cloud/cloudtemplates_qs")}>
                      Private Cloud
                    </Link>
                    <br></br>
                  </div>
                  <div class="card__footer">
                    <Link
                      className={classnames(
                        "button button--primary",
                        styles.docs
                      )}
                      href={useBaseUrl("docs/cloud")}
                    >
                      Cloud
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row"></div>
            <div className="col col--12">
              <h3>Want to contribute? See something missing?</h3>
              <description>
                Visit our <a href={useBaseUrl("docs/contributing")}>Contributing Guide</a> to learn how easy it is to help make PAN-OS® for Developers better!
              </description>
              <br></br><br></br>
            </div>
            
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Docs;
