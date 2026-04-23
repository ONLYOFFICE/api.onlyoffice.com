# SetName

为当前活动工作表设置名称。

## 语法

```javascript
expression.SetName(sName);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 将在工作表标签处显示的当前工作表名称。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例为活动工作表设置名称。

```javascript editor-xlsx
// How to set name of the sheet.

// Rename the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetName("sheet 1");
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Worksheet name: ");
worksheet.GetRange("A1").AutoFit(false, true);
worksheet.GetRange("B1").SetValue(name);
```
