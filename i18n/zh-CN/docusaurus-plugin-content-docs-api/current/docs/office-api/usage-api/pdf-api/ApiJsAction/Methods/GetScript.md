# GetScript

获取操作脚本

## 语法

```javascript
expression.GetScript();
```

`expression` - 表示 [ApiJsAction](../ApiJsAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例创建 JavaScript 操作并获取其脚本。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Hello World!');");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(jsAction);

console.log('JS action script: ' + jsAction.GetScript());
```
