# GetActiveSheet

返回表示活动工作表的对象。

## 语法

```javascript
expression.GetActiveSheet();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## 示例

此示例演示如何获取表示活动工作表的对象。

```javascript editor-xlsx
// How to get an active sheet object.

// Get worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("B2").SetValue("2");
worksheet.GetRange("A3").SetValue("2x2=");
worksheet.GetRange("B3").SetValue("=B1*B2");
```
