# SetApplicationId

设置当前 OLE 对象的应用程序 ID。

## 语法

```javascript
expression.SetApplicationId(sAppId);
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAppId | 必需 | string |  | 与当前 OLE 对象关联的应用程序 ID。 |

## 返回值

boolean

## 示例

为电子表格中的嵌入对象分配应用程序标识符。

```javascript editor-xlsx
// How do I set which application an embedded object is linked to in a spreadsheet?

// Update the application identifier on an embedded object to associate it with a different app in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
oleObject.SetApplicationId('asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}');
```
