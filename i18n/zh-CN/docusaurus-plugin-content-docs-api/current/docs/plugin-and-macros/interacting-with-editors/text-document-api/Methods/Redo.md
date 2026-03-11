# Redo

恢复用户上一次撤销的操作。

## 语法

```javascript
expression.Redo();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

```javascript
const addTextToDocument = function () {
	const doc = Api.GetDocument();
	const paragraph = doc.GetElement(0);
	paragraph.AddText(Asc.scope.text);
};

Asc.scope.text = 'The text string that we added to the document. It will remain visible after Undo and Redo calls.\n';
Asc.plugin.callCommand(addTextToDocument);
Asc.plugin.executeMethod('Undo');
Asc.plugin.executeMethod('Redo');
```
