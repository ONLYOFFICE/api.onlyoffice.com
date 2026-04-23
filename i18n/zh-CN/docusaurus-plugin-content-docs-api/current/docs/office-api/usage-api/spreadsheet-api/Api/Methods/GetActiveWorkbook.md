# GetActiveWorkbook

返回表示活动工作簿的对象。

## 语法

```javascript
expression.GetActiveWorkbook();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorkbook](../../ApiWorkbook/ApiWorkbook.md)

## 示例

此示例演示如何获取表示活动工作簿的对象。

```javascript editor-xlsx
const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
const cell = worksheet.GetActiveCell();
const workbookName = workbook.GetName();
cell.SetValue(workbookName);

```
