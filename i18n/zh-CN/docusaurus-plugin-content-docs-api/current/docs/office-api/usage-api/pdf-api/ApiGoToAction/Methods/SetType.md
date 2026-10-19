# SetType

设置跳转类型

## 语法

```javascript
expression.SetType(type);
```

`expression` - 表示 [ApiGoToAction](../ApiGoToAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [GoToType](../../Enumeration/GoToType.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建 GoTo 操作并更改其目标类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fit", null, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let result = goToAction.SetType("fitH");
console.log('Type set: ' + result);
console.log('Current type: ' + goToAction.GetType());
```
