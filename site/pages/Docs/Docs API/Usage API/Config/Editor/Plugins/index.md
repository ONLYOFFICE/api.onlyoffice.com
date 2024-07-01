Description

The plugins section allows to connect the special add-ons to your ONLYOFFICE Docs installation which will help you add additional features to document editors.

Example

The **example.com** is the name of the server where **document manager** and **document storage service** are installed and the plugins are placed. See the [How it works](/editors/howitworks) section to find out more on ONLYOFFICE Docs service client-server interactions.

If you have any further questions, please contact us at <integration@onlyoffice.com>.

Autostart

asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}

\+

Plugins Data

https\://example.com/plugins/chess-plugin/config.json

\+

Config.js

![Copy](/content/img/copy-content.svg) When you copy, you get the HTML code for the whole example. HTML copied.

```
```

Parameters

| Name                                 | Description                                                                                                                                                                                                   | Type            | Example                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------- |
| autostart                            | Defines the array of the identifiers (as entered in [config.json](/plugin/config#guid)) for the plugins, which will automatically start when the editor opens, and the order the plugins will run one-by-one. | array of string |                                 |
| pluginsData                          | Defines the array of absolute URLs to the plugin configuration files ([config.json](/plugin/config)).                                                                                                         | array of string |                                 |
| url                                  | Defines the absolute URL to the directory where the plugins are stored. Deprecated since version 4.3, please use the absolute URLs in [pluginsData](#pluginsData) field.                                      | string          | "https\://example.com/plugins/" |
| ![](/content/img/editor/plugins.png) |                                                                                                                                                                                                               |                 |                                 |
