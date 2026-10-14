# SetScript

设置操作脚本。

## 语法

```javascript
expression.SetScript(script);
```

`expression` - 表示 [ApiJsAction](../ApiJsAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| script | 必需 | string |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建 JavaScript 操作并更改其脚本。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Hello World!');");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(jsAction);

jsAction.SetScript("app.alert('Script updated!');");
console.log('Updated script: ' + jsAction.GetScript());
```
