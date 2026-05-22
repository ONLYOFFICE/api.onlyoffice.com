# SetFontSize

设置当前段落字符的字体大小。

## 语法

```javascript
expression.SetFontSize(nSize);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSize | 必需 | [hps](../../Enumeration/hps.md) |  | 以半磅（1/144 英寸）为单位测量的文本大小值。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

设置文档中段落所有字符的文本大小。

```javascript editor-docx
// How do I make the text in a paragraph larger or smaller in a document?

// Resize paragraph text to stand out or fit a specific layout requirement in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph with the font size set to 24 points.");
paragraph.SetFontSize(48);
```
