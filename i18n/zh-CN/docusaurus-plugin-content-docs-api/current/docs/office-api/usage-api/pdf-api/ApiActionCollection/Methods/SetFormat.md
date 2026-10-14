# SetFormat

设置 Format 操作。

## 语法

```javascript
expression.SetFormat(action);
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | 必需 | [ApiJsAction](../../ApiJsAction/ApiJsAction.md) \| null \| undefined |  | 要设置的操作，传递 `null` 可移除该操作。 |

## 返回值

boolean

## 示例

此示例在文本字段上设置 Format 操作，将其值格式化为货币。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let formatAction = Api.CreateJsAction("AFNumber_Format(2, 0, 0, 0, '$', true);");
let widgets = textField.GetAllWidgets();
let result = widgets[0].GetActions().SetFormat(formatAction);

console.log('Format action set: ' + result);
```
