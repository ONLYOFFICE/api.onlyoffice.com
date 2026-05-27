# Copy

创建指定形状的副本。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

在工作表上复制形状并将副本放在电子表格中原始形状旁边。

```javascript editor-xlsx
// How do I make a copy of a shape in a spreadsheet?

// Clone a shape and add the copy to the sheet at a different cell anchor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let copyShape = shape.Copy();
worksheet.AddDrawing(copyShape, 4, 2 * 36000, 2, 3 * 36000);
```
