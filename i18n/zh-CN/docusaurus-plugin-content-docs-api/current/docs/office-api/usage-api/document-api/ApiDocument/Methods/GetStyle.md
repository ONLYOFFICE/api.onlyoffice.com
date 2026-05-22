# GetStyle

按名称返回样式。

## 语法

```javascript
expression.GetStyle(styleName);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| styleName | 必需 | string |  | 样式名称。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md) \| null

## 示例

在文档中为段落应用命名样式。

```javascript editor-docx
// How do I retrieve and apply a built-in heading style in a document?

// Reuse an existing style from the style gallery to format text without defining custom properties.

let doc = Api.GetDocument();
let noSpacingStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(noSpacingStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
