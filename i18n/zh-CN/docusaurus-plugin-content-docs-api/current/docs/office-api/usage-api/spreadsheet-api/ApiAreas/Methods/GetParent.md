# GetParent

返回指定集合的父对象。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiAreas](../ApiAreas.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例展示如何获取指定集合的父对象。

```javascript editor-xlsx
// How to get a parent of the collection.

// Find a collection parent of the selected range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let parent = areas.GetParent();
let type = parent.GetClassType();
range = worksheet.GetRange('A4');
range.SetValue("The areas parent: ");
range.AutoFit(false, true);
worksheet.GetRange('B4').Paste(parent);
range = worksheet.GetRange('A5');
range.SetValue("The type of the areas parent: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').SetValue(type);
```
