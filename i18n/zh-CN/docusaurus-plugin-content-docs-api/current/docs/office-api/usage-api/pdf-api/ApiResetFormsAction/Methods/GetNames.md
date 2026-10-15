# GetNames

获取要重置的字段名称

## 语法

```javascript
expression.GetNames();
```

`expression` - 表示 [ApiResetFormsAction](../ApiResetFormsAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

此示例创建重置表单操作并获取字段名称列表。

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

let resetAction = Api.CreateResetFormsAction(false, ["fieldA", "fieldB"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(resetAction);

console.log('Field names: ' + resetAction.GetNames());
```
