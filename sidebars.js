/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  panos: [
    {
      type: "doc",
      id: "apis",
    },
    {
      type: "category",
      collapsed: false,
      label: "PAN-OS® XML API",
      items: ["apis/xmlapi_qs"],
    },
    {
      type: "category",
      collapsed: false,
      label: "PAN-OS® REST API",
      items: ["apis/restapi_qs"],
    },
    {
      type: "category",
      collapsed: false,
      label: "PAN Device Framework",
      items: ["apis/pandevice_qs"],
    },
    {
      type: "category",
      collapsed: false,
      label: "PAN Python SDK",
      items: [
        "apis/panpython_qs",
        "apis/panpython_apikey",
        "apis/panpython_op",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "PAN Go SDK",
      items: ["apis/pango_qs"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Tutorials",
      items: [
        "apis/panos_dag_qs",
        "apis/panos_tutorials_address_group",
        "apis/panos_tutorials_rule_hit_count",
        "apis/panos_tutorials_rulebase_to_csv",
        "apis/panos_tutorials_uid_monitor",
      ],
    },
  ],
  automation: [
    {
      type: "doc",
      id: "automation",
    },
    {
      type: "doc",
      id: "automation/terraform_ansible_container",
    },
    {
      type: "category",
      collapsed: false,
      label: "Ansible",
      items: ["automation/ansible_qs"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Terraform",
      items: ["automation/terraform_qs"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Terraformer",
      items: ["automation/terraformer_qs"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Tutorials",
      items: ["automation/automation_tutorials_ansible_srule"],
    },
  ],
  cloud: [
    {
      type: "doc",
      id: "cloud",
    },
    {
      type: "category",
      collapsed: false,
      label: "AWS",
      items: [
        "cloud/aws_qs",
        "cloud/pan_guard_duty",
        "cloud/autoscaling_aws",
        "cloud/terraform_elb",
        "cloud/aws_alb_sandwich",
        "cloud/xff_demo",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Azure",
      items: ["cloud/azure_qs"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Google",
      items: ["cloud/gcp_qs"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Private Cloud",
      items: ["cloud/cloudtemplates_qs"],
    },
  ],
  expedition: [
    {
      type: "doc",
      id: "expedition",
    },
    {
      type: "doc",
      id: "expedition/expedition_qs",
    },
    {
      type: "doc",
      id: "expedition/expedition_export",
    },
    {
      type: "category",
      collapsed: false,
      label: "Expedition-API",
      items: [
        "expedition/expedition_apiint",
        {
          type: "category",
          collapsed: false,
          label: "General Actions",
          items: [
            "expedition/creating_credentials",
            "expedition/managing_expedition_agent",
            "expedition/managing_jobs",
          ],
        },
        "expedition/expedition_workflow_filters",
        {
          type: "category",
          collapsed: false,
          label: "Expedition-API Use Cases",
          items: [
            "expedition/expedition_workflow_migration",
            "expedition/expedition_workflow_removeunused",
            "expedition/expedition_workflow_bulkchange",
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "expedition/expedition_contact",
    },
  ],
  docs: [
    {
      type: "doc",
      id: "_index",
    },
    {
      type: "doc",
      id: "contributing",
    },
  ],
};
