# GetItem

按 ID 从集合中返回单个对象。

## 语法

```javascript
expression.GetItem(ind);
```

`expression` - 表示 [ApiAreas](../ApiAreas.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ind | 必需 | number |  | 对象的索引号。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

按位置从电子表格中的多区域选区检索特定范围。

```javascript editor-xlsx
// How do I access one particular range out of a multi-area selection in a spreadsheet?

// Pull out an individual area by index to work with it separately in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let item = areas.GetItem(1);
range = worksheet.GetRange('A5');
range.SetValue("The first item from the areas: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').Paste(item);
```
