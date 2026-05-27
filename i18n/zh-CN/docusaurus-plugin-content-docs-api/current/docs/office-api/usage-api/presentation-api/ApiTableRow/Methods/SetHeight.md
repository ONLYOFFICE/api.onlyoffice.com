# SetHeight

设置当前表格行的高度。

## 语法

```javascript
expression.SetHeight(nValue);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 可选 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位表示的行高。 |

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

设置表格行的高度。

```javascript editor-pptx
// Create a table and access the first row.

// Apply a new height value to the row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);

slide.RemoveAllObjects();
slide.AddObject(table);
```
