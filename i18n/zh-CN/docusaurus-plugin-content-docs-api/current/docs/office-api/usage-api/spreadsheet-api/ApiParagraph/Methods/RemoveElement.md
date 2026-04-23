# RemoveElement

使用指定的位置移除元素。
💡 如果移除的元素是段落的最后一个元素（即所有元素都从段落中移除），
将自动创建一个新的空 Run。如果要向此 Run 添加
内容，请使用 [ApiParagraph#GetElement](../../ApiParagraph/Methods/GetElement.md) 方法。

## 语法

```javascript
expression.RemoveElement(nPos);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 要从段落中移除的元素位置。 |

## 返回值

boolean

## 示例

此示例使用指定的位置移除元素。

```javascript editor-xlsx
// How to delete a paragraph element knowing its index.

// Change the content of a shape by removing elements.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.RemoveAllElements();
let run = Api.CreateRun();
run.AddText("This is the first paragraph element. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the second paragraph element. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the third paragraph element (it will be removed from the paragraph and we will not see it). ");
paragraph.AddElement(run);
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("This is the fourth paragraph element - it became the third, because we removed the previous run from the paragraph. ");
paragraph.AddElement(run);
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("Please note that line breaks are not counted into paragraph elements!");
paragraph.AddElement(run);
paragraph.RemoveElement(3);
```
