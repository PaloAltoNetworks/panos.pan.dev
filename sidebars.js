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
      items: ["panos_api"]
    },
    {
      type: "category",
      label: "PAN-OS® XML API",
      items: ["xmlapi_qs"]
    },
    {
      type: "category",
      label: "PAN-OS® REST API",
      items: ["restapi_qs"]
    },
    {
      type: "category",
      label: "PAN Device Framework",
      items: ["pandevice_qs"]
    },
    {
      type: "category",
      label: "PAN Python SDK",
      items: ["panpython_qs", "panpython_apikey", "panpython_op"]
    },
    {
      type: "category",
      label: "PAN Go SDK",
      items: ["pango_qs"]
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        "panos_dag_qs",
        "panos_tutorials_address_group",
        "panos_tutorials_rule_hit_count",
        "panos_tutorials_rulebase_to_csv"
      ]
    }
  ],
  automation: [
    {
      type: "category",
      label: "Overview",
      items: ["automation", "terraform_ansible_container"]
    },
    {
      type: "category",
      label: "Ansible",
      items: ["ansible_qs"]
    },
    {
      type: "category",
      label: "Terraform",
      items: ["terraform_qs"]
    },
    {
      type: "category",
      label: "Tutorials",
      items: ["automation_tutorials_ansible_srule"]
    }
  ],
  cloud: [
    {
      type: "category",
      label: "Overview",
      items: ["cloud"]
    },
    {
      type: "category",
      label: "AWS",
      items: [
        "aws_qs",
        "pan_guard_duty",
        "autoscaling_aws",
        "terraform_elb",
        "aws_alb_sandwich",
        "xff_demo"
      ]
    },
    {
      type: "category",
      label: "Azure",
      items: ["azure_qs"]
    },
    {
      type: "category",
      label: "Google",
      items: ["gcp_qs"]
    },
    {
      type: "category",
      label: "Private Cloud",
      items: ["cloudtemplates_qs"]
    }
  ]
};
