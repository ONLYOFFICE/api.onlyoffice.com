# SetOnBlur

设置 OnBlur 操作。

## 语法

```javascript
expression.SetOnBlur(action);
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | 必需 | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) \| null \| undefined |  | 要设置的操作，传递 `null` 可移除该操作。 |

## 返回值

boolean

## 示例

此示例设置在文本字段失去焦点时触发的 JavaScript 操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let jsAction = Api.CreateJsAction("app.alert('Field blurred!');");
let widgets = textField.GetAllWidgets();
let result = widgets[0].GetActions().SetOnBlur(jsAction);

console.log('OnBlur set: ' + result);
```
