# GetActiveTable

返回演示文稿中当前选中或正在编辑的表格。

## 语法

```javascript
expression.GetActiveTable();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

选择表格并将其作为活动表格检索，以应用背景颜色。

```javascript editor-pptx
// The active table is the one currently selected or being edited in the presentation.

// Add two tables to the slide, select the first, and color it using the returned active table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(3, 3);
table.SetSize(4320000, 2160000);
table.SetPosition(0, 0);
slide.AddObject(table);
const table2 = Api.CreateTable(3, 3);
table2.SetSize(4320000, 2160000);
table2.SetPosition(100 * 36000, 100 * 36000);
slide.AddObject(table2);
table.Select();
const activeTable = presentation.GetActiveTable();
activeTable.SetBackgroundColor(Api.RGB(255, 0, 0));
```
