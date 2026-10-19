# PasteHtml

Pastes text in the HTML format into the document.

## Syntax

```javascript
expression.PasteHtml(htmlText, options);
```

`expression` - A variable that represents an [Api](../form-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| htmlText | Required | string |  | A string value that specifies the text in the *HTML* format to be pasted into the document. |
| options | Optional | Object |  | Additional paste options. |
| options.MergeLast | Optional | boolean | false | Defines if the last pasted paragraph is merged into the paragraph it is pasted into instead of being inserted as a paragraph of its own. Use it to replace a part of a paragraph without breaking it in two. Word document editor only. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("PasteHtml", ["&lt;p&gt;&lt;b&gt;Plugin methods for OLE objects&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;AddOleObject&lt;/li&gt;&lt;li&gt;EditOleObject&lt;/li&gt;&lt;/ul&gt;"]);
```
