# RemoveOleObject

通过内部 ID 从演示文稿中删除 OLE 对象。

## 语法

```javascript
expression.RemoveOleObject(internalId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| internalId | 必需 | string |  | 用于处理添加到演示文稿中的 OLE 对象的 OLE 对象标识符。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
const addOleToPresentation = function () {
	const presentation = Api.GetPresentation();
	const slide = presentation.GetSlideByIndex(0);
	const oleObject = Api.CreateOleObject(
		'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
		130 * 36000, 90 * 36000,
		'https://youtu.be/SKGz4pmnpgY',
		'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
	);
	slide.AddObject(oleObject);

	return Api.GetPresentation().GetSlideByIndex(0).GetAllOleObjects()[0].Drawing.GetId();
};
Asc.plugin.callCommand(addOleToPresentation, false, true, (id) => {
	console.log('We added OLE object with id: ' + id);
	Asc.plugin.executeMethod('RemoveOleObject', [id]);
	console.log('We removed OLE object with id: ' + id);
});
```
