# CanRedo

检查是否可以恢复用户上一次撤销的操作。

## 语法

```javascript
expression.CanRedo();
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

Asc.plugin.executeMethod('CanRedo', [], result => console.log('Can redo: ' + result));

Asc.scope.text = 'The text string that we added to the document.\n';
Asc.plugin.callCommand(addTextToDocument);
Asc.plugin.executeMethod('CanRedo', [], result => console.log('Can redo: ' + result));

Asc.plugin.executeMethod('Undo');
Asc.plugin.executeMethod('CanRedo', [], result => console.log('Can redo: ' + result));
```
