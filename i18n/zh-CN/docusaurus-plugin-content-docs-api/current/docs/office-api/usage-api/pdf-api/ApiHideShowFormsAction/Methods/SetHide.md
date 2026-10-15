# SetHide

设置操作是否隐藏字段

## 语法

```javascript
expression.SetHide(isHide);
```

`expression` - 表示 [ApiHideShowFormsAction](../ApiHideShowFormsAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isHide | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建隐藏/显示操作并将其切换为显示字段。

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

hideAction.SetHide(false);
console.log('Is hide after change: ' + hideAction.IsHide());
```
