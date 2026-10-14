# GetClassType

返回 ApiJsAction 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiJsAction](../ApiJsAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"jsAction"

## 示例

此示例创建 JavaScript 操作并获取其类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Hello World!');");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(jsAction);

console.log('JS action class type: ' + jsAction.GetClassType());
```
