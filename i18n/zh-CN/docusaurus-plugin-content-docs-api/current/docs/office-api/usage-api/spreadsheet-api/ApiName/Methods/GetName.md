# GetName

返回 ApiName 类的类型。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiName](../ApiName.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取 ApiName 类的类型。

```javascript editor-xlsx
// How to retrieve name of ApiName class object.

// Get name of a specified object.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("Name: " + defName.GetName());
```
