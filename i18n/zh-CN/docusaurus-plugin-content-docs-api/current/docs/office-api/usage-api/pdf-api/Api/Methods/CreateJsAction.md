# CreateJsAction

创建 JS 操作。

## 语法

```javascript
expression.CreateJsAction(script);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| script | 必需 | string |  | 未提供描述。 |

## 返回值

[ApiJsAction](../../ApiJsAction/ApiJsAction.md)

## 示例

创建 JavaScript 操作，并将其分配给按钮小组件。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Button clicked!');");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(jsAction);

console.log('JS action script: ' + jsAction.GetScript());
```
