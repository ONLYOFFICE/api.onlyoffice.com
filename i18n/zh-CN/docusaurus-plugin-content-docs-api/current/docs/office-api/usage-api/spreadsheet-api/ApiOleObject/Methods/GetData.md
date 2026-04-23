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

此示例展示如何从 OLE 对象获取字符串数据。

```javascript editor-xlsx
// How to get ApiOleObject content as a string.

// Get ApiOleObject data and display it in the worksheet.

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
