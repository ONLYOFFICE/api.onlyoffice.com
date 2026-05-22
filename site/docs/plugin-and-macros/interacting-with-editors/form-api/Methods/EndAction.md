# EndAction

Specifies the end action for long operations.
:::note
GroupActions are available only for [ONLYOFFICE Docs Enterprise](https://www.onlyoffice.com/docs-enterprise-prices.aspx?from=api) and [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api).
:::

## Syntax

```javascript
expression.EndAction(type, description, status);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "Information" \| "Block" \| "GroupActions" |  | The action type: |
| description | Optional | string \| Object |  | For **"Information"** and **"Block"** types: a string description displayed during the action. |
| description.scrollToTarget | Optional | boolean | true | If &lt;em&gt;false&lt;/em&gt;, the editor will not scroll to the target after the group operation ends. |
| description.cancel | Optional | boolean | false | If &lt;em&gt;true&lt;/em&gt;, the group operation is cancelled and rolled back instead of committed. |
| status | Optional | string |  | For **"Information"** and **"Block"** types: the error status code. If no error occurs, then an empty string is passed. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to local storage...", ""]);
```
