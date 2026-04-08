# Undo

撤销用户的上一次操作。

## 语法

```javascript
expression.Undo();
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

Asc.scope.text = 'The text string that we first added to the document.';
Asc.plugin.callCommand(addTextToDocument);
Asc.plugin.executeMethod('Undo');

Asc.scope.text = 'And the second one, which is the only one that will remain visible after calling Undo method.';
Asc.plugin.callCommand(addTextToDocument);
```
