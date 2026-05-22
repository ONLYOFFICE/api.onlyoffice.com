# SetItalic

为文本字符设置斜体属性。

## 语法

```javascript
expression.SetItalic(isItalic);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | 必需 | boolean |  | 指定当前文本块的内容显示为斜体。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

使文档中的文本以斜体样式显示。

```javascript editor-docx
// How do I format text to display in italics in a document?

// Emphasize words by switching the default text style to italicized letters in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetItalic(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to italicized letters using the text properties.");
```
