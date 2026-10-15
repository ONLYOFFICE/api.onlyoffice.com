# SetZoom

设置跳转缩放比例

## 语法

```javascript
expression.SetZoom(zoom);
```

`expression` - 表示 [ApiGoToAction](../ApiGoToAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| zoom | 可选 | number | 1 | 缩放比例，1 等于 100%（仅用于 goToType == "xyz"） |

## 返回值

boolean

## 示例

此示例创建 xyz 类型的 GoTo 操作并将其缩放级别更改为 150%。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "xyz", 1, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let result = goToAction.SetZoom(1.5);
console.log('Zoom set: ' + result);
console.log('Current zoom: ' + goToAction.GetZoom());
```
