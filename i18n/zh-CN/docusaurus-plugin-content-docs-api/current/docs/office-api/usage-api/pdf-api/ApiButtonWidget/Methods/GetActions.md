# GetActions

获取操作集合。

继承自 [ApiBaseWidget.GetActions](../../ApiBaseWidget/Methods/GetActions.md)。

## 语法

```javascript
expression.GetActions();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiActionCollection](../../ApiActionCollection/ApiActionCollection.md)

## 示例

此示例获取控件的操作集合，并为 MouseUp 分配 JavaScript 操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();

let jsAction = Api.CreateJsAction("app.alert('Clicked!');");
actions.SetMouseUp(jsAction);

console.log('Actions class type: ' + actions.GetClassType());
```
