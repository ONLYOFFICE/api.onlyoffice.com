# GetDefName

根据范围名称返回 ApiName 对象。

## 语法

```javascript
expression.GetDefName(defName);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| defName | 必需 | string |  | 范围名称。 |

## 返回值

[ApiName](../../ApiName/ApiName.md)

## 示例

此示例演示如何根据范围名称获取 ApiName 对象。

```javascript editor-xlsx
// How to work with named ranges in a spreadsheet using the API.

// Get name of an object using a range name. 

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());
```
