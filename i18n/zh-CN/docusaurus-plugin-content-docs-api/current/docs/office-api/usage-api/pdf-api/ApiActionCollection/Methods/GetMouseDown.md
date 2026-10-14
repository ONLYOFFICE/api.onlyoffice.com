# GetMouseDown

获取 MouseDown 操作。

## 语法

```javascript
expression.GetMouseDown();
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## 示例

此示例从操作集合中获取 MouseDown 操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse down!');");
let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetMouseDown(jsAction);

let mouseDownAction = actions.GetMouseDown();
console.log('MouseDown action class type: ' + mouseDownAction.GetClassType());
```
