# SetBold

为文本字符设置粗体属性。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean |  | 指定文本块的内容显示为粗体。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中为默认文本字符应用粗体格式。

```javascript editor-docx
// How do I make text appear heavier and bolder throughout a document?

// Change the weight of the default font so that all text renders with a bold appearance in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetBold(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font weight set to bold using the text properties.");
```
