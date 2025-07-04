---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ONLYOFFICE Docs on-premises

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="R7gvhLvGL44"/>
```

There are three ways to add plugins: through the *sdkjs-plugins* folder, through the *config.json* file or through the plugin manager.

## Adding plugins through the sdkjs-plugins folder

Put the folder with the plugin code to the **ONLYOFFICE Docs** folder. The path to the folder depends on the operating system you use:

<Tabs>
  <TabItem value="win" label="Windows">
      ``` bash
      %ProgramFiles%\ONLYOFFICE\DocumentServer\sdkjs-plugins\
      ```
  </TabItem>
  <TabItem value="lin" label="Linux">
      ``` bash
      /var/www/onlyoffice/documentserver/sdkjs-plugins/
      ```
  </TabItem>
</Tabs>

The plugins will be available to all the users of **ONLYOFFICE Docs on-premises**. [In some cases](https://nodejs.org/docs/latest/api/fs.html#fs_availability), service restart is required.

For debugging, start ONLYOFFICE Docs together with the shared *sdkjs-plugins* folder:

``` sh
docker run -itd -p 80:80 -v /absolutly_path_to_work_dir:/var/www/onlyoffice/documentserver/sdkjs-plugins/plugin onlyoffice/documentserver-ee:latest
```

## Adding plugins through the config.json file

In [ONLYOFFICE Docs config](../../../docs-api/usage-api/config/editor/plugins.md), add the relative path to the *config.json* file of the created plugin to the *plugins.pluginsData* parameter:

``` ts
const config = {
  editorConfig: {
    plugins: {
      autostart: [
        "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
        "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
      ],
      pluginsData: [
        "https://example.com/plugin1/config.json",
        "https://example.com/plugin2/config.json",
      ],
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

where **example.com** is the name of the server where document manager and document storage service are installed and the plugins are placed. See the [How it works](../../../docs-api/get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

`https://example.com/plugin1/config.json` is the path to the plugin.

If there is already a test example in the config, replace the following line */etc/onlyoffice/documentserver-example/local.json* with the path to the necessary plugin config.

See the [ONLYOFFICE Docs API](../../../docs-api/usage-api/config/editor/plugins.md) documentation for more information on where to find the config and what and how can be changed there.

### Known issues

- In the *index.html* file there is always a default link to the [plugins.js](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js) file. Don’t forget to add it to the plugin folder.
- If the plugins placed into the folder and the plugins specified in the config coincide, the latter will be used.
- If you want to upload the plugin to the S3 or Nginx servers, you need to allow cross-domain requests from the address of your document server. Or you can just let everyone use your plugin:

``` sh
add_header 'Access-Control-Allow-Origin' '*';
add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
```

## Adding plugins through the plugin manager for a single user

Starting from version 7.2, you can download ready-to-use plugins from **ONLYOFFICE Plugin Marketplace**.

Follow the steps below to add the plugins to the editor using plugin manager:

1. Open the **Plugins** tab.
2. Click **Plugin Manager**.
3. Find the plugin you need and click **Install**.

![Plugins manager](/assets/images/plugins/plugin-manager.png)

The plugin will be added to the opened editors and all the editors you will open afterwords and displayed within the **Plugins** tab.

## Adding plugins through the plugin manager for all users 

This guide describes how to install an ONLYOFFICE plugin globally using the `PluginManager` tool available in the ONLYOFFICE Docs distribution.

Starting from version 7.4, the **pluginsmanager** utility can be used to manage the plugins in ONLYOFFICE Docs on-premises. Commands are available for installing, removing, restoring, updating and more. For example:

<Tabs>
  <TabItem value="linux" label="Linux (Debian, Ubuntu, CentOS)">
      1. Open the terminal.
      2. Navigate to the Plugin Manager directory:

      ``` bash
      cd /var/www/onlyoffice/documentserver/tools/pluginmanager
      ```
      3. Run the command:
   
      ``` bash
      sudo ./PluginManager add -plugin <path-to-plugin-zip>
      ```
      Replace `<path-to-plugin-zip>` with the full path to your plugin archive (ZIP file).
  </TabItem>
  <TabItem value="win" label="Windows">
      1. Open the **Command Prompt** as Administrator.
      2. Navigate to the Plugin Manager folder (by default):

      ``` bash
      cd "C:\Program Files\ONLYOFFICE\DocumentServer\tools\pluginmanager"
      ```
      3. Run the command:
   
      ``` bash
      PluginManager.exe add -plugin "<path-to-plugin-zip>"
      ```
      Replace `<path-to-plugin-zip>` with the full path to your plugin archive (ZIP file).
  </TabItem>
  <TabItem value="docker" label="Docker">
      If ONLYOFFICE Docs is deployed in a Docker container:
  
      1. Copy the plugin archive into the container:
   
      ``` bash
      docker cp <path-to-plugin-zip> <container-id>:/tmp/plugin.zip
      ```
      2. Access the container shell:
   
      ``` bash
      docker exec -it <container-id> bash
      ```
      3. Navigate to the Plugin Manager directory:
   
      ``` bash
      cd /var/www/onlyoffice/documentserver/tools/pluginmanager
      ```
      4. Run the plugin installation command:
   
      ``` bash
      ./PluginManager add -plugin /tmp/plugin.zip
      ```
  </TabItem>
</Tabs>

> Once installed, the plugin appears in the editors under the **Plugins** tab for all users. No additional configuration or restart is required.

The paths in the examples are default values, please modify them if necessary.

A full list of server commands can be found [here](https://helpcenter.onlyoffice.com/ONLYOFFICE-Editors/editors-User-Guides/AllEditors/Plugin-manager.aspx#servercommands).

## Removing plugins from ONLYOFFICE Docs on-premises

You can uninstall plugins in four ways:

**Option 1.** Starting from version 7.4, you can use the **pluginsmanager** utility:

<Tabs>
  <TabItem value="docker" label="Docker, DEB, and RPM">
      ``` bash
      cd /var/www/onlyoffice/documentserver/server/tools/
      ./pluginsmanager --directory="/var/www/onlyoffice/documentserver/sdkjs-plugins" --remove="zotero"
      ```
  </TabItem>
  <TabItem value="win" label="Windows">
      ``` bash
      cd C:\Program Files\ONLYOFFICE\DocumentServer\bin
      documentserver-pluginsmanager.bat --remove="zotero"
      ```
  </TabItem>
</Tabs>

The paths in the examples are default ones, please change them if necessary.

**Option 2.** Go to the *sdkjs-plugins* folder and remove the corresponding plugin folder from this directory.

The path to the folder depends on the operating system you use:

<Tabs>
  <TabItem value="win" label="Windows">
      ``` bash
      %ProgramFiles%\ONLYOFFICE\DocumentServer\sdkjs-plugins\
      ```
  </TabItem>
  <TabItem value="lin" label="Linux">
      ``` bash
      /var/www/onlyoffice/documentserver/sdkjs-plugins/
      ```
  </TabItem>
</Tabs>

**Option 3.** Edit the [ONLYOFFICE Docs config](../../../docs-api/usage-api/config/editor/plugins.md) by removing the corresponding plugin. The plugin will become unavailable for all portal users upon the editor next start:

``` ts
const config = {
  editorConfig: {
    plugins: {
      autostart: [
        "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
        "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
      ],
      pluginsData: [
        "https://example.com/plugin1/config.json",
        "https://example.com/plugin2/config.json",
      ],
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

The plugins will be removed for all the users. [In some cases](https://nodejs.org/docs/latest/api/fs.html#fs_availability), service restart is required.

The table below contains default plugins guids to make it easier for you to find them:

## Default plugins guid’s

|                |                                        |
| -------------- | -------------------------------------- |
| Highlight code | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9841\} |
| Mendeley       | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9441\} |
| OCR            | \{440EBF13-9B19-4BD8-8621-05200E58140B\} |
| Photo editor   | \{07FD8DFA-DFE0-4089-AL24-0730933CC80A\} |
| Speech         | \{D71C2EF0-F15B-47C7-80E9-86D671F9C595\} |
| Thesaurus      | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9840\} |
| Translator     | \{7327FC95-16DA-41D9-9AF2-0E7F449F6800\} |
| YouTube        | \{38E022EA-AD92-45FC-B22B-49DF39746DB4\} |
| Zotero         | \{BFC5D5C6-89DE-4168-9565-ABD8D1E48711\} |

> Please note that after app updating the default plugins will appear again and you will need to uninstall them.

**Option 4.** To uninstall the newly added plugin, proceed in the following way:

1. Open the **Plugins** tab.
2. Go to the **Plugin Manager**.
3. Click the **Remove** button under the corresponding plugin.
