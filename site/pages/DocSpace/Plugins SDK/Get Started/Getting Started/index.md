Here are the fundamental steps for building plugins:

1. Preparing
2. Creating plugin template
3. Coding
4. Building
5. Uploading to the portal

## Step 1. Preparing

Install the *@onlyoffice/docspace-plugin-sdk* npm package globally:

```
npm i -g @onlyoffice/docspace-plugin-sdk
```

Now, the **npx** command is available, which will be used to create a plugin.

## Step 2. Creating plugin template

1. To create a plugin template, run the following command:

   ```
   npx create-docspace-plugin
   ```

2. Configure the plugin in the terminal specifying in the dialog the plugin settings such as name, version, author, logo, etc.

3. Select the plugin scopes from the list by pressing *Space* on the necessary scopes (API, Settings, Context menu, etc.).

More information about plugin settings and scopes can be found [here](/docspace/pluginssdk/creatingtemplate).

![Creating template](/content/img/docspace/creating-template.png)

## Step 3. Coding

Develop a plugin. Follow the plugin structure described [here](/docspace/pluginssdk/structure).

* Write code for each [plugin type](/docspace/pluginssdk/codingplugin/plugintypes) using the corresponding variables, methods and [items](/docspace/pluginssdk/codingplugin/pluginitems). Put the scripts into the *src* folder. Specify the required [Plugin](/docspace/pluginssdk/codingplugin/plugintypes/plugin) interface for each plugin to be embedded in the portal.

  ![Plugin structure](/content/img/docspace/plugin-structure.png)

* Specify [plugin messages](/docspace/pluginssdk/codingplugin/pluginmessage) that will be returned by the items. Use the appropriate [events](/docspace/pluginssdk/codingplugin/events) that will be processed on the portal side.

* Learn which [plugin components](/docspace/pluginssdk/codingplugin/plugincomponents) can be used for the DocSpace plugin interface and add them to your scripts.

Code samples are available at <https://github.com/ONLYOFFICE/docspace-plugins>.

## Step 4. Building

To build a plugin, you need the *yarn* package manager to be installed. Install all the necessary dependencies using the **yarn install** command in the plugin root folder (if this was not done previously in step 2). After that collect a plugin archive by running the **yarn build** command. The completed plugin will be located in the *dist* folder and can be uploaded to the DocSpace portal. More information can be found [here](/docspace/pluginssdk/buildingplugin).

## Step 5. Uploading to the portal

To upload a plugin to the DocSpace portal, follow the instructions [here](/docspace/pluginssdk/addingplugin).

The plugin will appear in the plugin list and start functioning automatically.
