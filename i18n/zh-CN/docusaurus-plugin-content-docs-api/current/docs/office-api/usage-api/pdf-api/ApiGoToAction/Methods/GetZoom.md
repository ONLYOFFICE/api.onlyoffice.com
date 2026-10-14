# GetZoom

获取操作的缩放比例

## 语法

```javascript
expression.GetZoom();
```

`expression` - 表示 [ApiGoToAction](../ApiGoToAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number \| null \| undefined

## 示例

此示例创建 xyz 类型的 GoTo 操作并获取其缩放级别。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "xyz", 1.5, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let zoom = goToAction.GetZoom();
console.log('GoTo zoom: ' + zoom);
```
