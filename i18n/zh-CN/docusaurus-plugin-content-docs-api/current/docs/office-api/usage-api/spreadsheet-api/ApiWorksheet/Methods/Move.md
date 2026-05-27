# Move

将当前工作表移动到工作簿中的另一个位置。

## 语法

```javascript
expression.Move(before, after);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| before | 必需 | [ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md) |  | 当前工作表将放置在其前面的工作表。如果指定了 “after”，则不能指定 “before”。 |
| after | 必需 | [ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md) |  | 当前工作表将放置在其后面的工作表。如果指定了 “before”，则不能指定 “after”。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中通过将一个工作表移到另一个之前或之后来重新排序。

```javascript editor-xlsx
// Change the tab position of a sheet relative to your other sheets in a spreadsheet?

// Reorganize sheet sequence to group related data together in a spreadsheet.

let sheet1 = Api.GetActiveSheet();
Api.AddSheet("Sheet2");
let sheet2 = Api.GetActiveSheet();
sheet2.Move(sheet1);
```
