# SetRect

设置跳转目标矩形

:::note
除 "fitR" 外的所有跳转类型仅使用 x1、y1 坐标。
:::

## 语法

```javascript
expression.SetRect(rect);
```

`expression` - 表示 [ApiGoToAction](../ApiGoToAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建 GoTo 操作并更改其目标矩形。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fitR", null, [0, 0, 200, 200]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let result = goToAction.SetRect([50, 50, 250, 300]);
console.log('Rect set: ' + result);
```
