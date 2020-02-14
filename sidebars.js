/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  panos: [
    {
      type: "category",
      label: "Overview",
      items: ["apis/panos_api"]
    },
    {
      type: "category",
      label: "PAN-OS® XML API",
      items: ["apis/xmlapi_qs"]
    },
    {
      type: "category",
      label: "PAN-OS® REST API",
      items: ["apis/restapi_qs"]
    },
    {
      type: "category",
      label: "PAN Device Framework",
      items: ["apis/pandevice_qs"]
    },
    {
      type: "category",
      label: "PAN Python SDK",
      items: ["apis/panpython_qs", "apis/panpython_apikey", "apis/panpython_op"]
    },
    {
      type: "category",
      label: "PAN Go SDK",
      items: ["apis/pango_qs"]
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        "apis/panos_dag_qs",
        "apis/panos_tutorials_address_group",
        "apis/panos_tutorials_rule_hit_count",
        "apis/panos_tutorials_rulebase_to_csv"
      ]
    }
  ],
  automation: [
    {
      type: "category",
      label: "Overview",
      items: ["automation/automation", "automation/terraform_ansible_container"]
    },
    {
      type: "category",
      label: "Ansible",
      items: ["automation/ansible_qs"]
    },
    {
      type: "category",
      label: "Terraform",
      items: ["automation/terraform_qs"]
    },
    {
      type: "category",
      label: "Tutorials",
      items: ["automation/automation_tutorials_ansible_srule"]
    }
  ],
  cloud: [
    {
      type: "category",
      label: "Overview",
      items: ["cloud/cloud"]
    },
    {
      type: "category",
      label: "AWS",
      items: [
        "cloud/aws_qs",
        "cloud/pan_guard_duty",
        "cloud/autoscaling_aws",
        "cloud/terraform_elb",
        "cloud/aws_alb_sandwich",
        "cloud/xff_demo"
      ]
    },
    {
      type: "category",
      label: "Azure",
      items: ["cloud/azure_qs"]
    },
    {
      type: "category",
      label: "Google",
      items: ["cloud/gcp_qs"]
    },
    {
      type: "category",
      label: "Private Cloud",
      items: ["cloud/cloudtemplates_qs"]
    }
  ],
  contrib: [
    {
      type: "doc",
      id: "contributing"
    }
  ]
};
