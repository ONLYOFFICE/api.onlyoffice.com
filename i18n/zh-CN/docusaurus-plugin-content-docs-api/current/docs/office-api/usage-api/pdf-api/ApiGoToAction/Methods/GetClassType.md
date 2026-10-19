# GetClassType

返回 ApiGoToAction 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiGoToAction](../ApiGoToAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"goToAction"

## 示例

此示例创建 GoTo 操作并获取其类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fit", null, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

console.log('GoTo action class type: ' + goToAction.GetClassType());
```
