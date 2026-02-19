---
sidebar_position: -1
description: Learn how to style your ONLYOFFICE plugin interface using the provided CSS classes and components.
---

# Styles

ONLYOFFICE provides a style sheet for different interface elements. To adjust your plugin interface to the ONLYOFFICE style, connect the [plugin.css](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css) to the [index.html](../structure/entry-point.md) file with the following link:

``` html
<link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">
```

To maintain a consistent plugin user interface, you can use a set of prebuilt base components designed specifically for plugin UI creation. You can explore and interact with these components in our [storybook](https://onlyoffice.github.io/storybook/static/).

All the available controls are also displayed within the [**Controls example**](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_controls) plugin:

![Controls example](/assets/images/plugins/controls.png)

## Buttons

Button components for user interactions.

:::note
The button color is chosen by the developer. The darker the button, the more important it is. As a rule, the button of the `btn-text-default.submit.primary` class is used to confirm the action and send the result (for example, the **Ok** button).
:::

### btn-text-default

`Type: class`

Adds the default white button style to your plugin.

**Example**:

``` html
<button class="btn-text-default" style="width:75px;">Button 1</button>
```

**CSS parameters**:

``` css
.btn-text-default {
    background: #fff;
    border: 1px solid #cfcfcf;
    border-radius: 2px;
    color: #444444;
    font-size: 11px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: 22px;
    cursor: pointer;
}
```

![Button 1](/assets/images/plugins/button-1.png)

### btn-text-default.submit.primary

`Type: class`

Adds the primary dark grey button style to your plugin. Used to confirm actions and send results.

**Example**:

``` html
<button class="btn-text-default submit primary" style="width:75px;">Button 2</button>
```

**CSS parameters**:

``` css
.btn-text-default.submit.primary {
    color: #fff;
    background-color: #7d858c;
}
```

![Button 2](/assets/images/plugins/button-2.png)

### btn-text-default.submit

`Type: class`

Adds the light grey button style to your plugin.

**Example**:

``` html
<button class="btn-text-default submit" style="width:75px;">Button 3</button>
```

**CSS parameters**:

``` css
.btn-text-default.submit {
    font-weight: bold;
    background-color: #d8dadc;
    border: 1px solid transparent;
}
```

![Button 3](/assets/images/plugins/button-3.png)

### btn-edit

`Type: class`

Adds the edit button icon to your plugin.

**Example**:

``` html
<label class="for-combo">Edit button</label><div class="btn-edit" style="display: inline-block; margin-left: 10px;"></div>
```

**CSS parameters**:

``` css
.btn-edit {
    width: 13px;
    height: 13px;
    cursor: pointer;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGZSURBVHgBfZI/y4FRGMavx7+SRQaTTQab74CVlBKL/FukDGQhEgsDNh/Apiw+gcXm70DJoEikKMUk7vec8/Yi75O7Tj2d+/4913Wuc6Tz+UyQqev1itvtBr1e/6+nkgP2+z0qlYr4DgaDsNls36HtdotisYhoNAqLxYJyuSz230HFO7DZbISC0+lEp9OBRqNBLpdDq9XCeDx+DfIz8TWZTIhZodFoRMvlknw+H8XjcdrtdrRarYgpU6/XE7MC4oMc4OB8Pie/30/ZbJba7TYlk0k6HA4CDIVCxNyQYrFYoNFoIJ1OQ5Ik5PN5WK1WpFIprNdr8H61WhVn5X2VisXg8XhoNpvRYDAgt9tNbICOxyOVSiVyuVzU7/epXq9TIBAQtrkzxeVygclkQrfbhd1uRzgcRq1Ww3A4FKparRbspyJRo9H4G4TD4RD06XQS3pkt8nq9NJ1OiSVGsVjsqfC3nvekVCrxeDxgMBgQiUTEa2g2m8hkMi8FuXtSq9VIJBK43+8iHB7GJ8BL4vY+N3U6HQqFAsxmM+TqB5Je/SVNoN18AAAAAElFTkSuQmCC');
}
```

![Edit button](/assets/images/plugins/edit_button.png)

## Input controls

Input components for user data entry.

### textarea

`Type: element`

Adds a text area input field to your plugin.

**Example**:

``` html
<textarea style="height:45px;width: 100%;" class="form-control" placeholder="textarea control"></textarea>
```

**CSS parameters**:

``` css
textarea.form-control {
    resize: none;
}
```

![Textarea](/assets/images/plugins/text_area.png)

### input[type="text"]

`Type: element`

Adds a text field input to your plugin.

**Example**:

``` html
<input type="text" class="form-control" placeholder="text field" style="width: 100%;margin-bottom: 2px;">
```

**CSS parameters**:

``` css
.form-control {
    border: 1px solid #cfcfcf;
    border-radius: 2px;
    box-sizing: border-box;
    color: #444444;
    font-size: 11px;
    height: 22px;
    padding: 1px 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
}
```

![Text field](/assets/images/plugins/text_field.png)

### input[type="checkbox"]

`Type: element`

Adds a checkbox input to your plugin.

**Example**:

``` html
<input type="checkbox" class="form-control" style="vertical-align: middle;"><label style="margin-left: 5px;vertical-align: middle;">Checkbox</label>
```

**CSS parameters**:

``` css
input[type='checkbox '].form-control {
    height: auto;
    margin: 0;
}
```

![Checkbox](/assets/images/plugins/checkbox_example.png)

## Label controls

Label components for text display.

### label.header

`Type: class`

Adds a bold header label to your plugin.

**Example**:

``` html
<label class="header">Header label</label>
```

**CSS parameters**:

``` css
label.header {
    font-weight: bold;
}
```

### label.link

`Type: class`

Adds a link-styled label to your plugin.

**Example**:

``` html
<label class="link">Link label</label>
```

**CSS parameters**:

``` css
label.link {
    border-bottom: 1px dotted #aaa;
    cursor: pointer;
}
```

## ComboBox

`Type: function`

Adds a combo box dropdown to your plugin using the [select2](https://select2.org/) library.

**Example**:

``` html
<select id="select_example" class="" ></select>
$('#select_example').select2({
    data : [{id:0, text:'Item 1'}, {id:1, text:'Item 2'}, {id:2, text:'Item 3'}],
    minimumResultsForSearch: Infinity,
    width : '120px'
});
```

![Combobox](/assets/images/plugins/combobox_example.png)

## Loader

`Type: class`

Adds a loader container to your plugin for displaying loading states.

**Example**:

``` html
<div id="loader-container" class="asc-loader-container" style="margin: 10px; height: 40px; border: 1px solid #cfcfcf;"></div>
```

**CSS parameters**:

``` css
.asc-loader-container {
    position: relative;
}
```

![Loader](/assets/images/plugins/loader_example.png)

## Example

This example demonstrates how to add interface elements in the ONLYOFFICE style to the YouTube plugin.

![YouTube plugin](/assets/images/plugins/youtube_interface.png)

``` html
<!-- Default white button -->
<button class="btn-text-default" style="width:30px;">OK</button>

<!-- Text input field -->
<input type="text" class="form-control" style="width:100%;">

<!-- Primary dark grey button -->
<button class="btn-text-default submit primary" style="width:90px;">Ok</button>

<!-- Light grey cancel button -->
<button class="btn-text-default submit" style="margin-left:5px; width:90px;">Cancel</button>
```
