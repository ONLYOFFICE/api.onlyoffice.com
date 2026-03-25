# GetCount

返回表示集合中对象数量的值。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiAreas](../ApiAreas.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例展示如何获取表示集合中对象数量的值。

```javascript editor-xlsx
// How to get collection objects count.

// How to get array length.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let count = areas.GetCount();
range = worksheet.GetRange('A5');
range.SetValue("The number of ranges in the areas: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').SetValue(count);
```
