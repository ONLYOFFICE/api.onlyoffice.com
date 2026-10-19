# Select

选择当前图形对象。

继承自 [ApiDrawing.Select](../../ApiDrawing/Methods/Select.md)。

## 语法

```javascript
expression.Select(isReplace);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isReplace | 可选 | boolean | false | 指定选择是否应替换当前选择（true）还是添加到当前选择（false）。 |

## 返回值

boolean

## 示例

选择幻灯片上的表格，使其成为活动对象。

```javascript editor-pptx
// Select is used to programmatically set the current selection to the table.

// Add a table to the slide and select it, then retrieve it as the active table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(3, 3);
table.SetPosition(0, 0);
slide.AddObject(table);
table.Select();
const activeTable = presentation.GetActiveTable();
activeTable.SetBackgroundColor(Api.RGB(0, 122, 204));
```
