/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const yaml = require("js-yaml");
const fs = require("fs");

const sidebars = yaml.safeLoad(fs.readFileSync("docs/sidebars.yml", "utf8"))[
  "SIDEBAR"
];

var items = {};
sidebars.map(item => {
  const category = item.category;
  const ids = item.ids;
  items[category] = ids;
});

console.log(items);

module.exports = {
  docs: items
};
