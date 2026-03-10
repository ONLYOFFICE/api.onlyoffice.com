# SetJc

设置段落内容对齐方式。

## 语法

```javascript
expression.SetJc(sJc);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJc | 必需 | "left" \| "right" \| "both" \| "center" |  | 将应用于段落内容的对齐类型。 |

## 返回值

boolean

## 示例

此示例设置段落内容对齐方式。

```javascript editor-xlsx
// How to center a paragraph text.

// Get a paragraph from the shape's content then add a text specifying its justification type.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("center");
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
```
