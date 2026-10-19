# GetFormat

获取 Format 操作。

## 语法

```javascript
expression.GetFormat();
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiJsAction](../../ApiJsAction/ApiJsAction.md)

## 示例

此示例从文本字段的操作集合中获取 Format 操作。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let formatAction = Api.CreateJsAction("AFNumber_Format(2, 0, 0, 0, '$', true);");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetFormat(formatAction);

let action = actions.GetFormat();
console.log('Format action script: ' + action.GetScript());
```
