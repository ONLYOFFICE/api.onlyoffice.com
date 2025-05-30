---
sidebar_position: -7
---

# Preparing

Before you start developing a plugin, you should go through the following preparation steps.

## Step 1. Prerequisites

Install all the necessary packages and programs:

- ONLYOFFICE DocSpace on-premises.

  [Get ONLYOFFICE DocSpace](https://www.onlyoffice.com/download-developer.aspx#docspace-developer)

  To install it on your local server, follow the [instructions](https://helpcenter.onlyoffice.com/docspace/installation/developer?from=api) in ONLYOFFICE Help Center.

- *@onlyoffice/docspace-plugin-sdk* npm package

  To install the *@onlyoffice/docspace-plugin-sdk* npm package globally, use the following command:

  ``` sh
  npm i -g @onlyoffice/docspace-plugin-sdk
  ```

## Step 2. Draft

Design the way your plugin will work:

1. Choose the service that allows you to add the necessary functionality to your DocSpace.

   For example, [AssemblyAI](https://www.assemblyai.com/), [ConvertAPI](https://www.convertapi.com/), [Draw.io](https://www.drawio.com/).

   > Please make sure that the service documentation is available, check its license, availability of API methods, etc. For some services, the user must obtain an API key to start using the plugin.

2. Think about where to implement the plugin, what the plugin's structure will be, how the user will interact with the plugin's components, etc. Make a list of the required plugin types and items depending on this information. For more information, read the [Plugin types](coding-plugin/plugin-types/plugin-types.md) and [Plugin items](coding-plugin/plugin-items/plugin-items.md) sections of the Plugins SDK documentation.

3. Come up with the plugin's structure. All the required files are described [here](plugin-structure.md).

4. Choose a name for your plugin and write a description for it.
