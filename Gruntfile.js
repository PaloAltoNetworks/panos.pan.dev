var yaml = require("js-yaml");
var S = require("string");

var CONTENT_PATH_PREFIX = "docs";

module.exports = function(grunt) {
  grunt.registerTask("lunr-index", function() {
    var indexPages = function() {
      var pagesIndex = [];
      grunt.file.recurse(CONTENT_PATH_PREFIX, function(
        abspath,
        rootdir,
        subdir,
        filename
      ) {
        pagesIndex.push(processMDFile(abspath, filename));
      });

      return pagesIndex;
    };

    var processMDFile = function(abspath, filename) {
      if (filename.match(/(^.+\.md)|(^.+\.mdx)/)) {
        var content = grunt.file.read(abspath);
        var pageIndex;
        // separate the Front Matter from the content and parse it
        content = content.split("---");

        var frontMatter;
        try {
          frontMatter = yaml.load(content[1]);
        } catch (e) {
          grunt.log.writeln(e.message);
        }

        // build Lunr index for this page
        pageIndex = {
          title: frontMatter.title,
          description: frontMatter.description,
          keywords: frontMatter.keywords,
          href: "/" + frontMatter.id,
          content: S(content[2])
            .stripTags()
            .stripPunctuation().s
        };

        return pageIndex;
      }
    };

    grunt.file.write("static/index.json", JSON.stringify(indexPages()));
  });
};
