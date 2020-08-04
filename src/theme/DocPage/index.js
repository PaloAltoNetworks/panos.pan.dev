/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from "@docusaurus/Link";
import renderRoutes from "@docusaurus/renderRoutes";
import { matchPath } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { MDXProvider } from "@mdx-js/react";
import DocSidebar from "@theme/DocSidebar";
import Layout from "@theme/Layout";
import MDXComponents from "@theme/MDXComponents";
import NotFound from "@theme/NotFound";
import React from "react";
import styles from "./styles.module.css";

function DocPageContent({ currentDocRoute, docsMetadata, children }) {
  const { siteConfig, isClient } = useDocusaurusContext();
  const { permalinkToSidebar, docsSidebars, version } = docsMetadata;
  const sidebarName = permalinkToSidebar[currentDocRoute.path];
  const sidebar = docsSidebars[sidebarName];
  return (
    <Layout version={version} key={isClient}>
      <div className={styles.docPage}>
        {sidebar && (
          <div className={styles.docSidebarContainer} role="complementary">
            <DocSidebar
              sidebar={sidebar}
              path={currentDocRoute.path}
              sidebarCollapsible={
                siteConfig.themeConfig?.sidebarCollapsible ?? true
              }
            />
          </div>
        )}
        <main className={styles.docMainContainer}>
          <div
            className="row row--no-gutters"
            style={{
              position: "sticky",
              top: "57px",
              zIndex: 1,
              backgroundColor: "var(--ifm-background-color)",
            }}
          >
            {siteConfig.customFields.docbar.options.map((menuItem, i) => (
              <Link
                className={
                  "button button--outline button--secondary button--md " +
                  (typeof window !== "undefined" &&
                  window.location.pathname.split("/")[2] ==
                    useBaseUrl(menuItem.to).split("/")[2]
                    ? "button--active--tab shadow--lw"
                    : "")
                }
                style={{
                  borderRadius: "0 0 0 0",
                  borderColor: "var(--ifm-contents-border-color)",
                  borderWidth: "0",
                  padding:
                    "calc( var(--ifm-button-padding-vertical) * 1.5  ) calc( var(--ifm-button-padding-horizontal) * .65 )",
                }}
                key={i}
                to={useBaseUrl(menuItem.to)}
              >
                {menuItem.label}
              </Link>
            ))}
          </div>
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </main>
      </div>
    </Layout>
  );
}

function DocPage(props) {
  const {
    route: { routes: docRoutes },
    docsMetadata,
    location,
  } = props;
  const currentDocRoute = docRoutes.find((docRoute) =>
    matchPath(location.pathname, docRoute)
  );

  if (!currentDocRoute) {
    return <NotFound {...props} />;
  }

  return (
    <DocPageContent
      currentDocRoute={currentDocRoute}
      docsMetadata={docsMetadata}
    >
      {renderRoutes(docRoutes)}
    </DocPageContent>
  );
}

export default DocPage;
