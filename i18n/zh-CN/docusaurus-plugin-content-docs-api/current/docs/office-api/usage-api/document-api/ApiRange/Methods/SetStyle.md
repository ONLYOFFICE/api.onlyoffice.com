# SetStyle

为当前范围设置样式。

## 语法

```javascript
expression.SetStyle(oStyle);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | 必须应用于文本字符的样式。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在文档中为选定的文本部分应用命名样式。

```javascript editor-docx
// How do I give a range of words a predefined look such as a heading style in a document?

// Reformat highlighted text by assigning it one of the built-in styles available in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
let style = doc.GetStyle("Heading 2");
range.SetStyle(style);
```
