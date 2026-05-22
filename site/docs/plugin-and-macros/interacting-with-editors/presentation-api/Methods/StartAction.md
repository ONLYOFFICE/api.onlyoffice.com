# StartAction

Specifies the start action for long operations.
:::note
GroupActions are available only for [ONLYOFFICE Docs Enterprise](https://www.onlyoffice.com/docs-enterprise-prices.aspx?from=api) and [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api).
:::

## Syntax

```javascript
expression.StartAction(type, description);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "Information" \| "Block" \| "GroupActions" |  | The action type: |
| description | Optional | string \| Object |  | For **"Information"** and **"Block"** types: a string description displayed during the action. |
| description.lockScroll | Optional | boolean |  | If &lt;em&gt;true&lt;/em&gt;, the editor scroll position will be locked during the group operation. |
| description.keepSelection | Optional | boolean |  | If &lt;em&gt;true&lt;/em&gt;, the cursor position and selection will be preserved after the group operation ends. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("StartAction", ["Block", "Save to local storage..."], function () {
    setPasswordByFile ("sha256", "123456");

    setTimeout (function () {
        window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to localstorage..."]);
    }, 200);
});
```
