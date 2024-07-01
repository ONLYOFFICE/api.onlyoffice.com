Develop a plugin. Follow the plugin structure described [here](/docspace/pluginssdk/structure).

* Write code for each [plugin type](/docspace/pluginssdk/codingplugin/plugintypes) using the corresponding variables, methods and [items](/docspace/pluginssdk/codingplugin/pluginitems). Put the scripts into the *src* folder. Specify the required [Plugin](/docspace/pluginssdk/codingplugin/plugintypes/plugin) interface for each plugin to be embedded in the portal.

  ![Plugin structure](/content/img/docspace/plugin-structure.png)

* Specify [plugin messages](/docspace/pluginssdk/codingplugin/pluginmessage) that will be returned by the items. Use the appropriate [events](/docspace/pluginssdk/codingplugin/events) that will be processed on the portal side.

* Learn which [plugin components](/docspace/pluginssdk/codingplugin/plugincomponents) can be used for the DocSpace plugin interface and add them to your scripts.

Code samples are available at <https://github.com/ONLYOFFICE/docspace-plugins>.
