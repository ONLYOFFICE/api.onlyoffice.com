# GetDefName

按工作表名称返回 ApiName 对象。

## 语法

```javascript
expression.GetDefName(defName);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| defName | 必需 | string |  | 工作表名称。 |

## 返回值

[ApiName](../../ApiName/ApiName.md) \| null

## 示例

在电子表格中通过工作表名称获取命名范围对象。

```javascript editor-xlsx
// How to get def name object in a spreadsheet.

// Get named range object using its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = worksheet.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());
```
