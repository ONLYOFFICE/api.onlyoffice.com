# GetMouseUp

获取 MouseUp 操作。

## 语法

```javascript
expression.GetMouseUp();
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## 示例

此示例从操作集合中获取 MouseUp 操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse up!');");
let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetMouseUp(jsAction);

let mouseUpAction = actions.GetMouseUp();
console.log('MouseUp action class type: ' + mouseUpAction.GetClassType());
```
