# SetNames

设置要隐藏的字段名称

## 语法

```javascript
expression.SetNames(names);
```

`expression` - 表示 [ApiHideShowFormsAction](../ApiHideShowFormsAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| names | 必需 | string[] |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建隐藏/显示操作并更改受影响的字段列表。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let field1 = Api.CreateTextField([10, 10, 160, 30]);
field1.SetPartialName("fieldA");
page.AddObject(field1);

let field2 = Api.CreateTextField([10, 40, 160, 60]);
field2.SetPartialName("fieldB");
page.AddObject(field2);

let buttonField = Api.CreateButtonField([10, 70, 160, 90]);
page.AddObject(buttonField);

let hideAction = Api.CreateHideShowFormsAction(true, ["fieldA"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(hideAction);

hideAction.SetNames(["fieldA", "fieldB"]);
console.log('Updated field names: ' + hideAction.GetNames());
```
