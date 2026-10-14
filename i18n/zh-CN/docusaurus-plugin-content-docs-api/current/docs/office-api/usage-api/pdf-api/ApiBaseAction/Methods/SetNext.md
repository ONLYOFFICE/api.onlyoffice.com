# SetNext

设置下一个操作。

## 语法

```javascript
expression.SetNext(action);
```

`expression` - 表示 [ApiBaseAction](../ApiBaseAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | 必需 | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) |  | 未提供描述。 |

## 返回值

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## 示例

此示例创建由两个操作组成的操作链：先显示 JS 警告，然后跳转到下一页。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let firstAction = Api.CreateJsAction("app.alert('Going to next page...');");
let secondAction = Api.CreateNamedAction("NextPage");
let result = firstAction.SetNext(secondAction);

let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(firstAction);

console.log('Next action set, class type: ' + result.GetClassType());
```
