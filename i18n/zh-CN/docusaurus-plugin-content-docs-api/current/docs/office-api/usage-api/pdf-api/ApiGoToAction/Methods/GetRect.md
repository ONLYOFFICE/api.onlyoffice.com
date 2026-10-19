# GetRect

获取跳转目标矩形

:::note
除 "fitR" 外的所有跳转类型仅使用 x1、y1 坐标。
:::

## 语法

```javascript
expression.GetRect();
```

`expression` - 表示 [ApiGoToAction](../ApiGoToAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Rect](../../Enumeration/Rect.md) \| null \| undefined

## 示例

此示例创建 GoTo 操作并获取其目标矩形。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fitR", null, [20, 20, 200, 200]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let rect = goToAction.GetRect();
console.log('GoTo rect: ' + rect);
```
