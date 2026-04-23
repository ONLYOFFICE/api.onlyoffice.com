# GetRefersToRange

按名称返回 ApiRange 对象。

## 语法

```javascript
expression.GetRefersToRange();
```

`expression` - 表示 [ApiName](../ApiName.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例展示如何按名称获取 ApiRange 对象。

```javascript editor-xlsx
// How to get a range knowig its defname.

// Find a range by its name and change its properties.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "$A$1:$B$1");
let defName = Api.GetDefName("numbers");
let range = defName.GetRefersToRange();
range.SetBold(true);
```
