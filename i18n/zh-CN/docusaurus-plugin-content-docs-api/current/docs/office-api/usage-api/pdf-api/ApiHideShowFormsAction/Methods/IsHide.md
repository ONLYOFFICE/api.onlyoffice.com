# IsHide

检查操作是否隐藏字段

## 语法

```javascript
expression.IsHide();
```

`expression` - 表示 [ApiHideShowFormsAction](../ApiHideShowFormsAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例创建隐藏/显示操作并检查其是否隐藏字段。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myTextField");
page.AddObject(textField);

let buttonField = Api.CreateButtonField([10, 40, 160, 60]);
page.AddObject(buttonField);

let hideAction = Api.CreateHideShowFormsAction(true, ["myTextField"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(hideAction);

console.log('Is hide: ' + hideAction.IsHide());
```
