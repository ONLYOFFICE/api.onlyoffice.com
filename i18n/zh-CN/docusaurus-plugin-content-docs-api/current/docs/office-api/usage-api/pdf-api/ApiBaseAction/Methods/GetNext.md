# GetNext

返回下一个操作。

## 语法

```javascript
expression.GetNext();
```

`expression` - 表示 [ApiBaseAction](../ApiBaseAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## 示例

此示例创建由两个操作组成的操作链，并获取链中的下一个操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let firstAction = Api.CreateJsAction("app.alert('First action');");
let secondAction = Api.CreateNamedAction("NextPage");
firstAction.SetNext(secondAction);

let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(firstAction);

let nextAction = firstAction.GetNext();
console.log('Next action class type: ' + nextAction.GetClassType());
```
