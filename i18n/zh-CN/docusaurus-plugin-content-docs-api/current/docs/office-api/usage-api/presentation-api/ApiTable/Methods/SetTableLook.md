# SetTableLook

指定引用的表格样式（如果存在）的条件格式组件，
这些组件将应用于具有当前表格级属性例外的表格行集。表格样式
可以指定最多六种不同的可选条件格式[示例：第一列的不同格式]，
然后可以应用或从父表格中的各个表格行中省略。

默认设置是应用行和列条带格式，但不应用第一行、最后一行、
第一列或最后一列格式。

## 语法

```javascript
expression.SetTableLook(isFirstColumn, isFirstRow, isLastColumn, isLastRow, isHorBand, isVerBand);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isFirstColumn | 必需 | boolean |  | 指定将第一列条件格式应用于表格。 |
| isFirstRow | 必需 | boolean |  | 指定应将第一行条件格式应用于表格。 |
| isLastColumn | 必需 | boolean |  | 指定将最后一列条件格式应用于表格。 |
| isLastRow | 必需 | boolean |  | 指定应将最后一行条件格式应用于表格。 |
| isHorBand | 必需 | boolean |  | 指定不将水平带状条件格式应用于表格。 |
| isVerBand | 必需 | boolean |  | 指定不将垂直带状条件格式应用于表格。 |

## 返回值

此方法不返回任何数据。

## 示例

配置表格的视觉样式选项。

```javascript editor-pptx
// Set formatting flags to control table appearance and style.

// Create a table and apply visual styling with configuration flags.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(4, 4);
table.SetTableLook(true, false, false, false, false, true);
slide.RemoveAllObjects();
slide.AddObject(table);
```
