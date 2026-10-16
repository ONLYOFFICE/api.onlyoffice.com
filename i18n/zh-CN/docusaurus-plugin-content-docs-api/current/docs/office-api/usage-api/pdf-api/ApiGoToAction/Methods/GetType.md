# GetType

获取跳转类型

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiGoToAction](../ApiGoToAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[GoToType](../../Enumeration/GoToType.md)

## 示例

此示例创建 GoTo 操作并获取其目标类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fitH", null, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

console.log('GoTo type: ' + goToAction.GetType());
```
