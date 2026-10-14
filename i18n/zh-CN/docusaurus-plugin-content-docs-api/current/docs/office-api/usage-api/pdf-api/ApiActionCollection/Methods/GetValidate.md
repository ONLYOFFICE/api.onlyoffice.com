# GetValidate

获取 Validate 操作。

## 语法

```javascript
expression.GetValidate();
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiJsAction](../../ApiJsAction/ApiJsAction.md)

## 示例

此示例从文本字段的操作集合中获取 Validate 操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let validateAction = Api.CreateJsAction("if (event.value < 0) { app.alert('Value must be positive'); event.rc = false; }");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetValidate(validateAction);

let action = actions.GetValidate();
console.log('Validate action script: ' + action.GetScript());
```
