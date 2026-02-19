# GetPageImage

Returns the page image.

## Syntax

```javascript
expression.GetPageImage(nPage, oParams);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | Required | number |  | The page index. |
| oParams | Optional | object | &#123;&#125; | The image parameters. |
| oParams.maxSize | Optional | number |  | The size of the larger image side in pixels. |
| oParams.annotations | Optional | boolean | false | Specifies whether the annotations will be rendered. |
| oParams.fields | Optional | boolean | false | Specifies whether the fields will be rendered. |
| oParams.drawings | Optional | boolean | false | Specifies whether the drawings will be rendered. |

## Returns

canvas