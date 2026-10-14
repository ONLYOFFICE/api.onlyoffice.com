# GetClassType

返回 ApiResetFormsAction 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiResetFormsAction](../ApiResetFormsAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"resetFormsAction"

## 示例

此示例创建重置表单操作并获取其类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myTextField");
page.AddObject(textField);

let buttonField = Api.CreateButtonField([10, 40, 160, 60]);
page.AddObject(buttonField);

let resetAction = Api.CreateResetFormsAction(false, ["myTextField"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(resetAction);

console.log('Reset action class type: ' + resetAction.GetClassType());
```
