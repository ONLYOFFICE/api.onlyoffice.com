# GetDefaultStyle

返回指定文档元素的默认样式参数。

## 语法

```javascript
expression.GetDefaultStyle(sStyleType);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleType | 必需 | [StyleType](../../Enumeration/StyleType.md) |  | 我们想要获取其样式的文档元素。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

检索并更新文档中特定元素类型的默认样式。

```javascript editor-docx
// How do I look up the built-in style applied to paragraphs by default in a document?

// Override paragraph spacing and alignment at the default style level so every matching element is affected in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
let normalStyle = doc.GetDefaultStyle("paragraph");
paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(240, "auto");
paraPr.SetJc("both");
paragraph.AddText("This is just a text.");
```
