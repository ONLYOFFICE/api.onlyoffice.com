# SetBold

为文本字符设置粗体属性。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean |  | 指定范围内容是否以粗体显示。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在文档中为文本范围应用粗体格式。

```javascript editor-docx
// How do I make a portion of text appear bold in a document?

// Strengthen the visual weight of selected words by turning them bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetBold(true);
```
