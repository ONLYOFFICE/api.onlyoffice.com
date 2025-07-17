#!/bin/bash
set -e

echo "Copying example samples from all sections..."

rm -rf site/samples
mkdir -p site/samples/docspace/javascript-sdk
cp -r site/docspace/javascript-sdk/samples/. site/samples/docspace/javascript-sdk
mv site/samples/docspace/javascript-sdk/samples.md site/samples/docspace/javascript-sdk/javascript-sdk.md

cat > site/samples/docspace/javascript-sdk/_category_.json <<EOF
{
  "position": 1,
  "collapsed": false,
  "label": "JavaScript SDK"
}
EOF

mkdir -p site/samples/docspace/plugins-sdk
cp -r site/docspace/plugins-sdk/samples/. site/samples/docspace/plugins-sdk
mv site/samples/docspace/plugins-sdk/samples.md site/samples/docspace/plugins-sdk/plugins-sdk.md

cat > site/samples/docspace/plugins-sdk/_category_.json <<EOF
{
  "position": 2,
  "collapsed": false,
  "label": "Plugins SDK"
}
EOF

mkdir -p site/samples/docspace/api-backend
cp -r site/docspace/api-backend/samples/. site/samples/docspace/api-backend
mv site/samples/docspace/api-backend/samples.md site/samples/docspace/api-backend/api-backend.md

cat > site/samples/docspace/api-backend/_category_.json <<EOF
{
  "position": 2,
  "collapsed": false,
  "label": "Backend REST API"
}
EOF

mkdir -p site/samples/docs/docs-api
cp -r site/docs/docs-api/samples/. site/samples/docs/docs-api

cat > site/samples/docs/docs-api/_category_.json <<EOF
{
  "position": 1,
  "collapsed": false,
  "label": "Docs API"
}
EOF

mkdir -p site/samples/docs/office-api
cp -r site/docs/office-api/samples/. site/samples/docs/office-api
mv site/samples/docs/office-api/samples.md site/samples/docs/office-api/office-api.md

cat > site/samples/docs/office-api/_category_.json <<EOF
{
  "position": 2,
  "collapsed": false,
  "label": "Office API"
}
EOF

mkdir -p site/samples/docs/plugin-and-macros
cp -r site/docs/plugin-and-macros/samples/. site/samples/docs/plugin-and-macros

cat > site/samples/docs/plugin-and-macros/_category_.json <<EOF
{
  "position": 3,
  "collapsed": false,
  "label": "Plugins and macros"
}
EOF

mkdir -p site/samples/docs/document-builder
cp -r site/docs/document-builder/samples/. site/samples/docs/document-builder
mv site/samples/docs/document-builder/samples.md site/samples/docs/document-builder/document-builder.md

cat > site/samples/docs/document-builder/_category_.json <<EOF
{
  "position": 4,
  "collapsed": false,
  "label": "Document Builder"
}
EOF

cat > site/samples/docs/_category_.json <<EOF
{
  "position": 1,
  "collapsed": false,
  "label": "Docs"
}
EOF

cat > site/samples/docspace/_category_.json <<EOF
{
  "position": 2,
  "collapsed": false,
  "label": "DocSpace"
}
EOF

# zh-CN
mkdir -p i18n/zh-CN/docusaurus-plugin-content-docs-api/current/samples/docs/docs-api
cp -r i18n/zh-CN/docusaurus-plugin-content-docs-api/current/docs/docs-api/samples/. i18n/zh-CN/docusaurus-plugin-content-docs-api/current/samples/docs/docs-api

cat > i18n/zh-CN/docusaurus-plugin-content-docs-api/current/samples/docs/docs-api/_category_.json <<EOF
{
  "position": 1,
  "collapsed": false,
  "label": "Docs API"
}
EOF
