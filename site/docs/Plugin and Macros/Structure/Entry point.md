---
order: -4
---

Each plugin acts in its own iframe. The editor will connect the *index.html* file, specified in the [config.json](./Manifest/Manifest.md) plugin configuration file. The *index.html* file is the plugin entry point, connecting the [plugin.js](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js) file - the base file needed for work with plugins in the editors.

## Example

``` html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Plugin name</title>
        <script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
        <script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js"></script>
        <link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">
        <script type="text/javascript" src="plugin.js"></script>
    </head>
    <body style="width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;">
        <div id="plugin name" style="margin: 0; padding: 0;"></div>
    </body>
</html>
```

The *\<head>...\</head>* section contains the links to all the scripts and stylesheets necessary for the plugin correct work (both local and remote, if the plugin uses some). It also includes the link to the *plugins.js* base file needed for correct work with the editors and containing the base plugin method work.

If the plugin is visual and you want its buttons and elements to look like those in the editor, then you can connect the [plugins-ui.js](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js) and [plugins.css](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css) files. More information about ONLYOFFICE styles and elements can be found [here](./Styles.md).

The body can contains the *\<div>...\</div>* tags with the placeholders where the plugin components will be inserted. The behavior of these plugin components is described in the [file with plugin code](../Interacting%20with%20editors/Overview/Overview.md) itself.
