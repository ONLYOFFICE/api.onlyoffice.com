# GetClassType

返回 ApiOleObject 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"oleObject"

## 示例

读取电子表格中嵌入对象的类类型。

```javascript editor-xlsx
// How do I find out what class type an embedded object has in a spreadsheet?

// Inspect the type label of an embedded object to identify its category in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
let type = oleObject.GetClassType();
worksheet.GetRange('A1').SetValue('Class type: ' + type);
```
