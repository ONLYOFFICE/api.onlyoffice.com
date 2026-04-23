# GetElement

使用指定的位置返回段落元素。

## 语法

```javascript
expression.GetElement(nPos);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 要获取其内容的元素必须位于的位置。 |

## 返回值

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## 示例

此示例展示如何使用指定的位置获取段落元素。

```javascript editor-xlsx
// How to get an element of a paragraph using its index.

// Find a paragraph element using its index and change its properties.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.RemoveAllElements();
let run = Api.CreateRun();
run.AddText("This is the text for the first text run. Do not forget a space at its end to separate from the second one. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the text for the second run. We will set it bold afterwards. It also needs space at its end. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the text for the third run. It ends the paragraph.");
paragraph.AddElement(run);
run = paragraph.GetElement(2);
run.SetBold(true);
```
