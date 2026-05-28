# SetParaPr

设置当前样式的段落属性。

## 语法

```javascript
expression.SetParaPr(paraPr);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paraPr | 必需 | [ApiParaPr](../../ApiParaPr/ApiParaPr.md) |  | 将要设置的段落属性。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

将段落格式规则应用于命名样式，以便文档中所有匹配的段落共享这些设置。

```javascript editor-docx
// How do I change the line spacing and alignment for all paragraphs that use a particular style in a document?

// Control indentation and spacing across multiple paragraphs at once by updating their shared style in a document.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let paraPr = Api.CreateParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
normalStyle.SetParaPr(paraPr);

let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");
doc.Push(paragraph);
```
