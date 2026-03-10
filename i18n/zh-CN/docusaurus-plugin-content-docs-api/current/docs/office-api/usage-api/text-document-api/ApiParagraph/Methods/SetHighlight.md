# SetHighlight

指定应用于当前段落内容背景的高亮颜色。

## 语法

```javascript
expression.SetHighlight(sColor);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | 必需 | [highlightColor](../../Enumeration/highlightColor.md) |  | 可用的突出显示颜色。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例为段落设置「浅灰色」高亮颜色。

```javascript editor-docx
// How to set highlight to the text.

// Create a new paragraph and highlight it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text highlighted with light gray color.");
paragraph.SetHighlight("lightGray");
```
