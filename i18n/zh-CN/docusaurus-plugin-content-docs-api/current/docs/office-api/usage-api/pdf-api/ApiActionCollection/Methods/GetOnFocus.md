# GetOnFocus

获取 OnFocus 操作。

## 语法

```javascript
expression.GetOnFocus();
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## 示例

此示例从操作集合中获取 OnFocus 操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let jsAction = Api.CreateJsAction("app.alert('Field focused!');");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetOnFocus(jsAction);

let onFocusAction = actions.GetOnFocus();
console.log('OnFocus action class type: ' + onFocusAction.GetClassType());
```
