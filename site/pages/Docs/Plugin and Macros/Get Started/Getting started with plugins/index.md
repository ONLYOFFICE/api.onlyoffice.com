Here are some fundamental concepts for building plugins step by step:

1. Preparing
2. Coding
3. Adjusting the plugin style
4. Localizing
5. Preparing the plugin for publication
6. Testing
7. Publishing

## Step 1. Preparing

1. To create a plugin and publish it in the **ONLYOFFICE Plugin Marketplace**, you need an account on [GitHub](https://github.com/). Sing in to an existing account or create a new one.

2. Fork the plugin marketplace repository: <https://github.com/ONLYOFFICE/onlyoffice.github.io>.

   You get a repository with the following address - *https\://github.com/YOUR-USERNAME/ONLYOFFICE/onlyoffice.github.io*.

3. Build your own GitHub Pages site from this repository to test your plugin in the web version later. Explore the official [GitHub documentation](https://docs.github.com/en/pages/quickstart) to learn how to do it.

4. Clone the fork to your local computer.

5. Add a folder for your plugin to *onlyoffice.github.io/sdkjs-plugins/content/*.

   ![New folder](/content/img/plugins/new-folder.png)

## Step 2. Coding

[Develop](/plugin/developing) a plugin. Follow the plugin structure described [here](/plugin/structure). The plugin folder must contain three files required for the plugin to work: [config.json](/plugin/config), [index.html](/plugin/indexhtml), [pluginCode.js](/plugin/code).

![Structure](/content/img/plugins/plugins-structure.png)

Use plugin [methods](/plugin/plugin) and [events](/plugin/events) while writing the plugin code.

## Step 3. Adjusting the plugin style

Add the ONLYOFFICE [style sheet](/plugin/styles) to the *index.html* file to adjust your plugin to the ONLYOFFICE editor style:

```
<link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">
```

![Controls](/content/img/plugins/controls.png)

## Step 4. Localizing

Create the *translations* folder in the plugin directory with *.json* files for each language you want to add the translation for. Follow the instructions [here](/plugin/localization) to localize and apply the translations.

## Step 5. Preparing the plugin for publication

1. Create an informative **About** window for your plugin. Add a short description and the plugin version, the company developer name and link to its website. Follow the instructions [here](/plugin/variations) to create an **About** variation in the *config.json* file.

2. ![About window](/content/img/plugins/about-variation.png)

   Prepare icons for the plugin and put them into the *resources* folder. Follow the instructions [here](/plugin/icons) to specify icon parameters in the *config.json* file.

   Please note that you need to prepare 8 icons for the plugin to display correctly in the plugin marketplace: 4 icon scaling types (125%, 150%, 175%, 200%) for both light and dark themes.

3. Don’t forget about the *readme* file where you can add a detailed plugin description, installation and usage instructions, known issues, etc. Put this file into the main plugin folder.

## Step 6. Testing

Put all the prepared files to the plugin folder and push it to the remote repository. That’s it! Now you can connect it to the desktop or web versions of ONLYOFFICE editors and test.

1. Test the plugin in the [ONLYOFFICE Desktop Editors](/plugin/installation/desktop).

   You can run this app in the debug mode with the *--ascdesktop-support-debug-info* flag. To do this, follow the instructions [here](/desktop/debugging) depending on the operating system you use.

   ![Hello world gif](/content/img/plugins/hello-world.gif)

2. Test the plugin in the web version.

   To create an extension, open the *onlyoffice.github.io/store/plugin-dev/extension/inject.js* file and assign the path to your plugin on GitHub Pages site to the **URL\_TO\_PLUGIN** variable:

   ```
   var URL_TO_PLUGIN = "https://YOUR-USERNAME.github.io/onlyoffice.github.io/sdkjs-plugins/content/helloworld/"
   ```

   The *onlyoffice.github.io/store/plugin-dev/extension* folder is a new extension. Upload it to the [browser](/plugin/installation/cloud#upload-extensions), run your ONLYOFFICE Docs and find the plugin in the [Plugin Manager](/plugin/installation/onpremises#plugin-manager).

   To debug ONLYOFFICE plugins in the web editors, follow the instructions [here](/plugin/developing#web).

   Please note that this is important to open your plugin in the **Plugin Manager** and check how it looks like in the **My Plugins** tab both in the light and dark themes. Improve the plugin display if necessary. ![Plugin manager](/content/img/plugins/plugin-manager.png)

## Step 7. Publishing

If you want your plugin to be available to other users in the **ONLYOFFICE Plugin Marketplace**, suggest it for publishing by creating a [pull request](https://github.com/ONLYOFFICE/onlyoffice.github.io/pulls) from your fork to *https\://github.com/ONLYOFFICE/onlyoffice.github.io*. If your plugin works properly, your pull request will be approved and the plugin will appear in the marketplace.

\


You can discuss plugin development, request a feature, or report a bug by posting an issue in the [marketplace repository](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
