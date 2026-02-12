# Get started

**DocSpace Plugins SDK** allows developers to create their own plugins and add them to the DocSpace portal.

This documentation describes:

- How to [create](../usage-sdk/creating-plugin-template.md), [code](../usage-sdk/coding-plugin/coding-plugin.md), [build](../usage-sdk/building-plugin.md), and [upload](../usage-sdk/adding-plugin.md) a plugin
- What [plugin types](../usage-sdk/coding-plugin/plugin-types/plugin-types.md) and [items](../usage-sdk/coding-plugin/plugin-items/plugin-items.md) are available
- What the [plugin structure](../usage-sdk/plugin-structure.md) consists of
- How to use plugin variables, methods, [messages](../usage-sdk/coding-plugin/plugin-message.md), and [events](../usage-sdk/coding-plugin/events.md)
- What [plugin components](../usage-sdk/coding-plugin/plugin-components/plugin-components.md) can be used to build a plugin

## What plugins can do

Here are some examples of what you can do with ONLYOFFICE DocSpace plugins:

- connect third-party services, like [Draw.io](../samples/ready-to-use-samples/drawio.md), [Markdown](../samples/ready-to-use-samples/markdown.md), [Speech to Text](../samples/ready-to-use-samples/speech-to-text.md), etc.;
- enhance the existing user experience and the editors' functionality: [PDF converter](../samples/ready-to-use-samples/pdf-converter.md).

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/docspace-plugins).

## How to create plugins

To create your own plugin, you need to follow a few steps:

1. Preparing
2. Creating plugin template
3. Coding
4. Building
5. Uploading to the portal

### Step 1. Preparing

[Install](../usage-sdk/preparing.md) the *@onlyoffice/docspace-plugin-sdk* npm package globally:

``` sh
npm i -g @onlyoffice/docspace-plugin-sdk
```

Now, the **npx** command is available, which will be used to create a plugin.

### Step 2. Creating plugin template

For plugins created with the old template (SDK 1.1.1), replace the build script in *package.json* with the following:

   ```json
   "build": "webpack && npx build-docspace-plugin"
   ```

1. To create a plugin template, run the following command:

   ``` sh
   npx create-docspace-plugin
   ```

2. Configure the plugin in the terminal specifying in the dialog the plugin settings such as name, version, author, logo, etc.

3. Select the plugin scopes from the list by pressing *Space* on the necessary scopes (API, Settings, Context menu, etc.).

More information about plugin settings and scopes can be found [here](../usage-sdk/creating-plugin-template.md).

![Creating template](/assets/images/docspace/creating-template.png)

### Step 3. Coding

Develop a plugin. Follow the plugin structure described [here](../usage-sdk/plugin-structure.md).

- Write code for each [plugin type](../usage-sdk/coding-plugin/plugin-types/plugin-types.md) using the corresponding variables, methods and [items](../usage-sdk/coding-plugin/plugin-items/plugin-items.md). Put the scripts into the *src* folder. Specify the required [Plugin](../usage-sdk/coding-plugin/plugin-types/plugin.md) interface for each plugin to be embedded in the portal.

  ![Plugin structure](/assets/images/docspace/plugin-structure.png)

- Specify [plugin messages](../usage-sdk/coding-plugin/plugin-message.md) that will be returned by the items. Use the appropriate [events](../usage-sdk/coding-plugin/events.md) that will be processed on the portal side.

- Learn which [plugin components](../usage-sdk/coding-plugin/plugin-components/plugin-components.md) can be used for the DocSpace plugin interface and add them to your scripts.

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/docspace-plugins).

### Step 4. Building

To build a plugin, you need the *yarn* package manager to be installed. Install all the necessary dependencies using the **yarn install** command in the plugin root folder (if this was not done previously in step 2). After that collect a plugin archive by running the **yarn build** command. The completed plugin will be located in the *dist* folder and can be uploaded to the DocSpace portal. More information can be found [here](../usage-sdk/building-plugin.md).

### Step 5. Uploading to the portal

To upload a plugin to the DocSpace portal, follow the instructions [here](../usage-sdk/adding-plugin.md).

The plugin will appear in the plugin list and start functioning automatically.
