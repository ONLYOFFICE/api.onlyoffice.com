# SetData

设置当前 OLE 对象的数据。

## 语法

```javascript
expression.SetData(sData);
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sData | 必需 | string |  | OLE 对象字符串数据。 |

## 返回值

boolean

## 示例

此示例设置当前 OLE 对象的数据。

```javascript editor-xlsx
// How to change content of OLE object.

// Add Ole object, set its data and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
oleObject.SetData('https://youtu.be/eJxpkjQG6Ew');

```
