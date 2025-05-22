#!/bin/bash
set -e

echo "Copying example samples from all sections..."

rm -rf site/samples
mkdir -p site/samples/docspace/javascript-sdk
cp -r site/docspace/javascript-sdk/samples/. site/samples/docspace/javascript-sdk

mkdir -p site/samples/docspace/plugins-sdk
cp -r site/docspace/plugins-sdk/samples/. site/samples/docspace/plugins-sdk

mkdir -p site/samples/docs/docs-api
cp -r site/docs/docs-api/samples/. site/samples/docs/docs-api

mkdir -p site/samples/docs/office-api
cp -r site/docs/office-api/samples/. site/samples/docs/office-api

mkdir -p site/samples/docs/plugin-and-macros
cp -r site/docs/plugin-and-macros/samples/. site/samples/docs/plugin-and-macros

mkdir -p site/samples/docs/document-builder
cp -r site/docs/document-builder/samples/. site/samples/docs/document-builder
