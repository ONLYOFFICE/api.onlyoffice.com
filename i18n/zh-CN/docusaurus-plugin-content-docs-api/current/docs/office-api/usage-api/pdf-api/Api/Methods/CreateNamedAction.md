# CreateNamedAction

创建命名操作。

## 语法

```javascript
expression.CreateNamedAction(name);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | [NamedActionType](../../Enumeration/NamedActionType.md) |  | 未提供描述。 |

## 返回值

[ApiNamedAction](../../ApiNamedAction/ApiNamedAction.md)

## 示例

创建导航到下一页的命名操作，并将其分配给按钮小组件。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let namedAction = Api.CreateNamedAction("NextPage");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(namedAction);

console.log('Named action name: ' + namedAction.GetName());
```
