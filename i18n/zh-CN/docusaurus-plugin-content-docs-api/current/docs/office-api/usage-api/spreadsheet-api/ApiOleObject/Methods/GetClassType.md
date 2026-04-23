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

此示例获取类类型并将其插入到文档中。

```javascript editor-xlsx
// How to get a class type of ApiOleObject.

// Get a class type of ApiOleObject and display it in the worksheet.

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
