# CreateResetFormsAction

创建重置表单操作。

## 语法

```javascript
expression.CreateResetFormsAction(isAllExcept, names);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAllExcept | 必需 | boolean |  | 是否重置除指定名称字段以外的所有字段 |
| names | 可选 | string[] | [] | 字段名称 |

## 返回值

[ApiHideShowFormsAction](../../ApiHideShowFormsAction/ApiHideShowFormsAction.md)

## 示例

创建重置表单操作，并将其分配给按钮小组件。

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
