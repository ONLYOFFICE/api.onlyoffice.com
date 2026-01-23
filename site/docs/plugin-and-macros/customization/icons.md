---
sidebar_position: -3
---

# Icons

When building a plugin for editor, adding icons can significantly enhance usability and make your interface more intuitive.

## Folder structure

Your plugin should include a */resources* directory to store all images, icons, and other static assets.
This folder is automatically accessible to editor when the plugin is loaded.

Here's a recommended layout:

``` text
my-plugin/
|-- config.json
|-- index.html
|-- plugin.js
`-- resources/
    |-- dark/
    |   |-- icon.png
    |   |-- icon@1.25x.png
    |   |-- icon@1.5x.png
    |   |-- icon@1.75x.png
    |   `-- icon@2x.png
    |
    |-- light/
    |   |-- icon.png
    |   |-- icon@1.25x.png
    |   |-- icon@1.5x.png
    |   |-- icon@1.75x.png
    |   `-- icon@2x.png
    |
    `-- store/
        |-- icons/
        |   |-- icon.png
        |   |-- icon.svg
        |   |-- icon@1.25x.png
        |   |-- icon@1.5x.png
        |   |-- icon@1.75x.png
        |   `-- icon@2x.png
        `-- screenshots/
            |-- screen_1.png
            |-- screen_2.png
            |-- screen_3.png
            |-- screen_4.png
            |-- screen_5.png
            `-- screen_6.png
```

This hierarchy allows editor to automatically choose the correct icon based on the theme, state, and scale.

## Defining the icon in config.json

Inside your [config.json](../structure/configuration/configuration.md), define your icon using a smart URL pattern that adapts to themes and scaling:

``` json
{
"name": "My Plugin",
 
"guid": "asc.{UUID}",
 
"version": "1.0.0",
 
"description": "Example plugin with adaptive icons",
 
"icons": [
 
"resources/%theme-name%(classic|dark)/%theme-type%(light|dark)/icon%state%(normal|hover)%scale%(default|*).%extension%(png|svg)"
 
],
 
"isVisual": true,
 
"initDataType": "none",
 
"initOnSelectionChanged": false
}
```

This single line dynamically tells the editor where to look for the icon depending on:

* The theme name (classic or dark)
* The theme type (light or dark)
* The state (normal, hover)
* The scale (100%, 125%, 150%, etc.)
* The extension (png or svg)

## How it works

When the plugin loads, editor:

1. Detects the active editor theme (light/dark).
2. Checks the screen scale (e.g. 125%).
3. Loads the corresponding icon variant.
4. If no perfect match is found, it picks the closest size available.

For example, when the editor is set to a dark theme with a zoom level of 150%, the following adjustments are automatically applied:

```
resources/dark/icon@1.5x.png
```

## Optional: adding icons to content controls

You can also use icons inside content control buttons introduced in version 9.0:

``` ts
let button = new Asc.ButtonContentControl();
 
button.icons = "/resources/check%scale%(default).png";
 
button.attachOnClick(function(contentControlId){
 
Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
 
});
```
This allows you to add interactive buttons directly inside your document content.

## Parameters  

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter  | Type   | Example     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|------------|--------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| theme-name | string | `"classic"` | The theme name (*classic*, *dark*, etc.)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| theme-type | string | `"light"`   | The theme type of the plugin icons. It can have the *light* or *dark* values.                                                                                                                                                                                                                                                                                                                                                                                                               |
| state      | string | `"normal"`  | The icon state. The following values are available: *normal*, *hover*, *active*. When this parameter is equal to *normal*, it will be changed with an empty string in the resulting URL. The *hover* and *active* values will be changed with *_hover* and *_active*.                                                                                                                                                                                                                       |
| scale      | string | `"default"` | All the supported scaling types for the plugin icons. The default value means the same as *100\|125\|150\|175\|200*. The *\** value means all other scales.<br /><br />The document editor chooses the necessary icons in the following way:<br /><br />1. get the information about the current scaling and find an icon for it;<br /><br />2. if there is no such an icon in the *config*, take the one which is the closest to the required size and round it up (150% instead of 140%). |
| extension  | string | `"svg"`     | The icon extension. If there is the *svg* extension in the options, it will be used for all unspecified scales and for the *\** value. For the specified extensions, the last of all the listed "non-svg" extensions will be used. If there are no other extensions in the options, then the *svg* extension will be used as well.                                                                                                                                                          |

```mdx-code-block
</APITable>
```


This string generates the objects in the old icon format (the [icon2](../structure/configuration/configuration.md#variationsicons2) parameter):

``` ts
[
  {
    "theme": "classic",
    "style": "light",
    "100%": {normal: "resources/classic/light/icon.png", hover: "resources/classic/light/icon_hover.png"},
    "125%": {normal: "resources/classic/light/icon@1.25x.png", hover: "resources/classic/light/icon_hover@1.25x.png"},
    "150%": {normal: "resources/classic/light/icon@1.5x.png", hover: "resources/classic/light/icon_hover@1.5x.png"},
    "175%": {normal: "resources/classic/light/icon@1.75x.png", hover: "resources/classic/light/icon_hover@1.75x.png"},
    "200%": {normal: "resources/classic/light/icon@2x.png", hover: "resources/classic/light/icon_hover@2x.png"},
    "*": {normal: "resources/classic/light/icon.svg", hover: "resources/classic/light/icon_hover.svg"},
  },
  {
    "theme": "classic",
    "style": "dark",
    "100%": {normal: "resources/classic/dark/icon.png", hover: "resources/classic/dark/icon_hover.png"},
    "125%": {normal: "resources/classic/dark/icon@1.25x.png", hover: "resources/classic/dark/icon_hover@1.25x.png"},
    "150%": {normal: "resources/classic/dark/icon@1.5x.png", hover: "resources/classic/dark/icon_hover@1.5x.png"},
    "175%": {normal: "resources/classic/dark/icon@1.75x.png", hover: "resources/classic/dark/icon_hover@1.75x.png"},
    "200%": {normal: "resources/classic/dark/icon@2x.png", hover: "resources/classic/dark/icon_hover@2x.png"},
    "*": {normal: "resources/classic/dark/icon.svg", hover: "resources/classic/dark/icon_hover.svg"},
  },
  {
    "theme": "dark",
    "style": "light",
    "100%": {normal: "resources/dark/light/icon.png", hover: "resources/dark/light/icon_hover.png"},
    "125%": {normal: "resources/dark/light/icon@1.25x.png", hover: "resources/dark/light/icon_hover@1.25x.png"},
    "150%": {normal: "resources/dark/light/icon@1.5x.png", hover: "resources/dark/light/icon_hover@1.5x.png"},
    "175%": {normal: "resources/dark/light/icon@1.75x.png", hover: "resources/dark/light/icon_hover@1.75x.png"},
    "200%": {normal: "resources/dark/light/icon@2x.png", hover: "resources/dark/light/icon_hover@2x.png"},
    "*": {normal: "resources/dark/light/icon.svg", hover: "resources/dark/light/icon_hover.svg"},
  },
  {
    "theme": "dark",
    "style": "dark",
    "100%": {normal: "resources/dark/dark/icon.png", hover: "resources/dark/dark/icon_hover.png"},
    "125%": {normal: "resources/dark/dark/icon@1.25x.png", hover: "resources/dark/dark/icon_hover@1.25x.png"},
    "150%": {normal: "resources/dark/dark/icon@1.5x.png", hover: "resources/dark/dark/icon_hover@1.5x.png"},
    "175%": {normal: "resources/dark/dark/icon@1.75x.png", hover: "resources/dark/dark/icon_hover@1.75x.png"},
    "200%": {normal: "resources/dark/dark/icon@2x.png", hover: "resources/dark/dark/icon_hover@2x.png"},
    "*": {normal: "resources/dark/dark/icon.svg", hover: "resources/dark/dark/icon_hover.svg"},
  },
]
```

This format can still be used, but it is deprecated.
