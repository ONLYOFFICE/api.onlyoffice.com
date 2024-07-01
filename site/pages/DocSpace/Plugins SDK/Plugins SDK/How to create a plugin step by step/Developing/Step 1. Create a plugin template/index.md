Create a plugin template and configure its settings which will be displayed in the DocSpace plugin settings:

1. To create a plugin template, open the terminal and run the following **npx** command:

   ```
   npx create-docspace-plugin
   ```

   If the npx command is not avaibale, install the *@onlyoffice/docspace-plugin-sdk* npm package globally using the following command:

   ```
   npm i -g @onlyoffice/docspace-plugin-sdk
   ```

2. Configure the plugin in the terminal by specifying settings in the dialog. All the settings are described [here](/docspace/pluginssdk/creatingtemplate).

   For the **speech-to-text** plugin, you can use the following values:

   | Dialog question                                               | Value                                                                                                                          |
   | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
   | Plugin name                                                   | speech-to-text                                                                                                                 |
   | Plugin version                                                | 1.0.0                                                                                                                          |
   | Plugin author                                                 | ONLYOFFICE                                                                                                                     |
   | Plugin logo                                                   | logo.png                                                                                                                       |
   | Plugin description                                            | Speech to Text Conversion is a speech recognition software that allows you to recognize and translate spoken speech into text. |
   | Plugin license                                                | Apache-2.0                                                                                                                     |
   | Plugin homepage                                               | https\://github.com/ONLYOFFICE/docspace-plugin                                                                                 |
   | Select scopes (Press \<space> to select, Enter when finished) | API, Settings, Context menu                                                                                                    |

   ![Speech template](/content/img/docspace/speech-template.png)

   A folder with the plugin template will be placed at the path where you executed the command.

   ![Speech template location](/content/img/docspace/speech-template-location.png)

   You can change all the specified parameters later in the [package.json](https://github.com/ONLYOFFICE/docspace-plugins/blob/master/speech-to-text/package.json) file.

   You can also create a plugin in any project by adding the *@onlyoffice/docspace-plugin-sdk* npm package as a dependency and specifying all the necessary fields in the *package.json* file.
