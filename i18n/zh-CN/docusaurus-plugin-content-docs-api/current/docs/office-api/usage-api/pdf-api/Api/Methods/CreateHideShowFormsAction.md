# CreateHideShowFormsAction

创建隐藏/显示表单操作。

## 语法

```javascript
expression.CreateHideShowFormsAction(isHidde, names);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isHidde | 必需 | boolean |  | 隐藏 - true，显示 - false |
| names | 可选 | string[] | [] | 字段名称 |

## 返回值

[ApiHideShowFormsAction](../../ApiHideShowFormsAction/ApiHideShowFormsAction.md)

## 示例

创建在单击按钮时隐藏文本字段的隐藏/显示操作。

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

console.log('Hide action class type: ' + hideAction.GetClassType());
```
