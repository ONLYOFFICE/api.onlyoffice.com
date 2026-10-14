# SetName

设置操作的名称。

## 语法

```javascript
expression.SetName(name);
```

`expression` - 表示 [ApiNamedAction](../ApiNamedAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | [NamedActionType](../../Enumeration/NamedActionType.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建命名操作并将其名称更改为跳转到最后一页。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let namedAction = Api.CreateNamedAction("NextPage");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(namedAction);

namedAction.SetName("LastPage");
console.log('Updated action name: ' + namedAction.GetName());
```
