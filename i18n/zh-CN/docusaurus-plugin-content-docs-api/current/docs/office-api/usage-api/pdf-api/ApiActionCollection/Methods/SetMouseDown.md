# SetMouseDown

设置 MouseDown 操作。

## 语法

```javascript
expression.SetMouseDown(action);
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | 必需 | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) \| null \| undefined |  | 要设置的操作，传递 `null` 可移除该操作。 |

## 返回值

boolean

## 示例

此示例设置在按钮控件的 MouseDown 事件上触发的 JavaScript 操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse down!');");
let widgets = buttonField.GetAllWidgets();
let result = widgets[0].GetActions().SetMouseDown(jsAction);

console.log('MouseDown set: ' + result);
```
