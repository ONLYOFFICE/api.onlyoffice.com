# CanUndo

检查是否可以撤销用户的上一次操作。

## 语法

```javascript
expression.CanUndo();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

```javascript
const addTextToDocument = function () {
	const doc = Api.GetDocument();
	const paragraph = doc.GetElement(0);
	paragraph.AddText(Asc.scope.text);
};

Asc.plugin.executeMethod('CanUndo', [], result => console.log('Can undo: ' + result));
Asc.scope.text = 'The text string that we added to the document so that we have an action to Undo.\n';
Asc.plugin.callCommand(addTextToDocument);

Asc.plugin.executeMethod('CanUndo', [], result => console.log('Can undo: ' + result));
```
