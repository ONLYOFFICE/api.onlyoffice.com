# GetReferenceStyle

返回单元格引用样式。

## 语法

```javascript
expression.GetReferenceStyle();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ReferenceStyle](../../Enumeration/ReferenceStyle.md)

## 示例

此示例获取引用样式。

```javascript editor-xlsx
// Get style of a reference.

// Insert a reference style into the cell.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
