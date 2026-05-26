# Copy

创建指定 OLE 对象的副本。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)

## 示例

在工作表上复制 OLE 对象并将副本放在电子表格中原始对象旁边。

```javascript editor-xlsx
// How do I make a copy of an OLE object in a spreadsheet?

// Clone an OLE object and add the copy to the sheet at a different cell anchor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	130 * 36000, 90 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 2, 3 * 36000
);

let copyOle = oleObject.Copy();
worksheet.AddDrawing(copyOle, 4, 2 * 36000, 2, 3 * 36000);
```
