/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import classnames from "classnames";
import React from "react";
import styles from "./styles.module.css";

function Docs() {
  const context = useDocusaurusContext();

  return (
    <main>
      <section className={styles.features} style={{ borderBottom: "none" }}>
        <div className="container">
          <h1>PAN-OS® For Developers</h1>
          <p>
            PAN‑OS® is the software that runs all Palo Alto Networks®
            next-generation firewalls. By leveraging our APIs, SDKs,
            Automations, and Cloud Templates you can take PAN-OS® to the next
            level.
          </p>
          <div className="row">
            <div className={classnames("col col--6", styles.features)}>
              <div className={classnames("card shadow--md", styles.card)}>
                <div className="card__header">
                  <h3>APIs and SDKs</h3>
                  <p>
                    Our APIs and SDKs provide a collection of open, feature-rich
                    automation opportunities for configuration and management.
                  </p>
                </div>
                <div className="card__body">
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
                <div className="card__footer">
                  <Link
                    className={classnames(
                      "button button--primary",
                      styles.docs
                    )}
                    href={useBaseUrl("/docs/apis")}
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
            <div className={classnames("col col--6", styles.features)}>
              <div className={classnames("card shadow--md", styles.card)}>
                <div className="card__header">
                  <h2>Automation</h2>
                  <p>
                    Version control your infrastructure and eliminate
                    human-error. Declare the target configuration and let them
                    automate the rest.
                  </p>
                </div>
                <div className="card__body">
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
                <div className="card__footer">
                  <Link
                    className={classnames(
                      "button button--primary",
                      styles.docs
                    )}
                    href={useBaseUrl("docs/automation")}
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
            <div className={classnames("col col--6", styles.features)}>
              <div className={classnames("card shadow--md", styles.card)}>
                <div className="card__header">
                  <h2>Cloud</h2>
                  <p>
                    Auto-scale a firewall with a cloud application while
                    ensuring a seamless policy across on-prem and cloud.
                  </p>
                </div>
                <div className="card__body">
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
                <div className="card__footer">
                  <Link
                    className={classnames(
                      "button button--primary",
                      styles.docs
                    )}
                    href={useBaseUrl("docs/cloud")}
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
            <div className={classnames("col col--6", styles.features)}>
              <div className={classnames("card shadow--md", styles.card)}>
                <div className="card__header">
                  <h2>Expedition</h2>
                  <p>
                    Migrate configuration from legacy firewalls to Palo Alto
                    Networks.
                  </p>
                </div>
                <div className="card__body">
                  <Link href={useBaseUrl("docs/expedition/expedition_qs")}>
                    Installation
                  </Link>
                  <br></br>
                  <Link href={useBaseUrl("docs/expedition/expedition_apiint")}>
                    Quickstart
                  </Link>
                  <br></br>
                  <br></br>
                </div>
                <div className="card__footer">
                  <Link
                    className={classnames(
                      "button button--primary",
                      styles.docs
                    )}
                    href={useBaseUrl("docs/expedition/expedition_qs")}
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col--12">
              <h3>Want to contribute? See something missing?</h3>
              <p>
                Visit our{" "}
                <a href={useBaseUrl("docs/contributing")}>Contributing Guide</a>{" "}
                to learn how easy it is to help make PAN-OS® for Developers
                better!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Docs;
