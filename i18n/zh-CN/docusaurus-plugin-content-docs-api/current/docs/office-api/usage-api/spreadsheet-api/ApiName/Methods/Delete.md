# Delete

删除 DefName 对象。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiName](../ApiName.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例删除 DefName 对象。

```javascript editor-xlsx
// How to remove custom DefName from a worksheet.

// Delete previously added DefName. 

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
defName.Delete();
worksheet.GetRange("A3").SetValue("The name 'numbers' of the range A1:B1 was deleted.");
```
