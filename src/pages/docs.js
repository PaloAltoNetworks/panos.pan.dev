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
        <section className={styles.features} ref={vertificalsRef}>
          <div className="container">
            <h1>PAN-OS® For Developers</h1>
            <h4>
            PAN‑OS® is the software that runs all Palo Alto Networks® next-generation firewalls. 
            By leveraging our APIs, SDKs, Automations, and Cloud Templates you can take PAN-OS® to the
            next level.
            </h4>
            <div className="row">
              <div className="col col--4">
                <h1>APIs and SDKs</h1>
                <h5>
                Our APIs and SDKs provide a collection of open, feature-rich automation 
                opportunities for configuration and management.
                </h5>
                <a href={useBaseUrl("docs/apis/xmlapi_qs")}>PAN-OS® XML API</a>
                <br></br>
                <a href={useBaseUrl("docs/apis/restapi_qs")}>PAN-OS® REST API</a>
                <br></br>
                <a href={useBaseUrl("docs/apis/pandevice_qs")}>PAN Device Framework</a>
                <br></br>
                <a href={useBaseUrl("docs/apis/panpython_qs")}>PAN Python SDK</a>
                <br></br>
                <a href={useBaseUrl("docs/apis/pango_qs")}>PAN Go SDK</a>
                <br></br>
                <a href={useBaseUrl("docs/apis/panos_dag_qs")}>Tutorials</a>
                <br></br>
                <br></br>
                <Link
                  className={classnames(
                    "button button--primary",
                    styles.getStarted
                  )}
                  href={useBaseUrl("/docs/apis")}
                >
                  APIs and SDKS
                </Link>
              </div>
              <div className="col col--4">
                <h1>Automation and Infrastructure as Code</h1>
                <h5>
                Version control your infrastructure and eliminate human-error. 
                Declare the target configuration and let them automate the rest.
                </h5>
                <a href={useBaseUrl("docs/automation/terraform_ansible_container")}>Terraform and Ansible Container</a>
                <br></br>
                <a href={useBaseUrl("docs/automation/ansible_qs")}>Ansible</a>
                <br></br>
                <a href={useBaseUrl("docs/automation/terraform_qs")}>Terraform</a>
                <br></br>
                <a href={useBaseUrl("docs/automation/automation_tutorials_ansible_srule")}>Tutorials</a>
                <br></br>
                <br></br>
                <Link
                  className={classnames(
                    "button button--primary",
                    styles.getStarted
                  )}
                  href={useBaseUrl("docs/automation")}
                >
                  Automation
                </Link>    
              </div>
              <div className="col col--4">
              <h1>Cloud</h1>
                <h5>
                Auto-scale a firewall with a cloud application while ensuring a 
                seamless policy across on-prem and cloud.
                </h5>
                <a href={useBaseUrl("docs/cloud/aws_qs")}>AWS</a>
                <br></br>
                <a href={useBaseUrl("docs/cloud/azure_qs")}>Azure</a>
                <br></br>
                <a href={useBaseUrl("docs/cloud/gcp_qs")}>Google</a>
                <br></br>
                <a href={useBaseUrl("docs/cloud/cloudtemplates_qs")}>Private Cloud</a>
                <br></br>
                <br></br>
                <Link
                  className={classnames(
                    "button button--primary",
                    styles.getStarted
                  )}
                  href={useBaseUrl("docs/cloud")}
                >
                  Cloud
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Docs;
