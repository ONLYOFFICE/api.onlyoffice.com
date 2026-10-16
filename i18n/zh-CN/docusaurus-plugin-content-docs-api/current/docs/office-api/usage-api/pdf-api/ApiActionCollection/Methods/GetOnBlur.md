# GetOnBlur

获取 OnBlur 操作。

## 语法

```javascript
expression.GetOnBlur();
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## 示例

此示例从操作集合中获取 OnBlur 操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let jsAction = Api.CreateJsAction("app.alert('Field blurred!');");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetOnBlur(jsAction);

let onBlurAction = actions.GetOnBlur();
console.log('OnBlur action class type: ' + onBlurAction.GetClassType());
```
