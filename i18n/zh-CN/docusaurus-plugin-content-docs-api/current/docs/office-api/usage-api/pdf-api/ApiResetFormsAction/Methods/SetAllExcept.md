# SetAllExcept

设置是否重置除指定名称字段以外的所有字段

## 语法

```javascript
expression.SetAllExcept(isAllExcept);
```

`expression` - 表示 [ApiResetFormsAction](../ApiResetFormsAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAllExcept | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建重置表单操作并更改其“全部除外”模式。

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

resetAction.SetAllExcept(true);
console.log('Is all except after change: ' + resetAction.IsAllExcept());
```
