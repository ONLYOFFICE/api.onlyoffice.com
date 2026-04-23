# GetStyle

按名称返回样式。

## 语法

```javascript
expression.GetStyle(sStyleName);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleName | 必需 | string |  | 样式名称。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

此示例展示如何按名称获取样式。

```javascript editor-docx
// How to get the style of the heading.

// Display the style name of the "Heading 6".

let doc = Api.GetDocument();
let noSpacingStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(noSpacingStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
