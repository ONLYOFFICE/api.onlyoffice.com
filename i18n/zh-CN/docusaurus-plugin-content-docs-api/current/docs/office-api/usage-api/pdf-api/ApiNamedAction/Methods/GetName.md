# GetName

获取操作的名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiNamedAction](../ApiNamedAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[NamedActionType](../../Enumeration/NamedActionType.md)

## 示例

此示例创建命名操作并获取其名称。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let namedAction = Api.CreateNamedAction("NextPage");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(namedAction);

console.log('Named action name: ' + namedAction.GetName());
```
