# GetData

返回当前 OLE 对象的字符串数据。

## 语法

```javascript
expression.GetData();
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中嵌入对象内存储的内容。

```javascript editor-xlsx
// How do I retrieve the data held by an embedded object in a spreadsheet?

// Extract the stored value from an embedded object to display or reuse it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
let data = oleObject.GetData();
worksheet.GetRange('A1').SetValue('The OLE object data: ' + data);
```
