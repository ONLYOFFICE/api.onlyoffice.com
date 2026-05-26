# AddText

向当前段落添加文本。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要插入到当前文档元素中的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

直接在电子表格中形状内的段落中写入文本。

```javascript editor-xlsx
// How do I put words into a paragraph that sits inside a shape in a spreadsheet?

// Fill a shape with left-aligned text split across two lines using a line break in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("This is a text inside the shape aligned left.");
paragraph.AddLineBreak();
paragraph.AddText("This is a text after the line break.");
```
