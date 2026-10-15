# CreateGoToAction

创建 GoTo 操作。

## 语法

```javascript
expression.CreateGoToAction(page, goToType, zoom, rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| page | 必需 | number |  | 未提供描述。 |
| goToType | 必需 | [GoToType](../../Enumeration/GoToType.md) |  | 未提供描述。 |
| zoom | 可选 | [percentage](../../Enumeration/percentage.md) | 1 | 缩放比例，1 等于 100%（仅用于 goToType == "xyz"） |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 未提供描述。 |

## 返回值

[ApiGoToAction](../../ApiGoToAction/ApiGoToAction.md)

## 示例

创建导航到第一页的 GoTo 操作，并将其分配给按钮小组件。

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
