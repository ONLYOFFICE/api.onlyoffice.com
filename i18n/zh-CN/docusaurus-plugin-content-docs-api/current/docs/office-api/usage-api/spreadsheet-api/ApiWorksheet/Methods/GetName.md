# GetName

返回工作表名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取工作表名称。

```javascript editor-xlsx
// How to get name of the sheet.

// Get a sheet name.

let worksheet = Api.GetActiveSheet();
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Name: ");
worksheet.GetRange("B1").SetValue(name);
```
