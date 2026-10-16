# GetPage

获取目标页面索引

## 语法

```javascript
expression.GetPage();
```

`expression` - 表示 [ApiGoToAction](../ApiGoToAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例创建 GoTo 操作并获取其目标页面索引。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fit", null, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

console.log('GoTo page index: ' + goToAction.GetPage());
```
