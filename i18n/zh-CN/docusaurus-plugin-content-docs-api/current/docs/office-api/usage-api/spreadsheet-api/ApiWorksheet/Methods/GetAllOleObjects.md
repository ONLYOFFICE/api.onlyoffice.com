# GetAllOleObjects

返回当前工作表中的所有 OLE 对象。

## 语法

```javascript
expression.GetAllOleObjects();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)[]

## 示例

此示例展示如何从工作表获取所有 OLE 对象。

```javascript editor-xlsx
// How to get all OLE objects images.

// Get all OLE objects as an array.

let worksheet = Api.GetActiveSheet();
worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
let oleObjects = worksheet.GetAllOleObjects();
let appId = oleObjects[0].GetApplicationId();
worksheet.GetRange('A1').SetValue('The application ID for the current OLE object: ' + appId);

```
