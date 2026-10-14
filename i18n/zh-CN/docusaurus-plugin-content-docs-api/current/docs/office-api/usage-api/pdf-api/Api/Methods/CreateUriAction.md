# CreateUriAction

创建 URI 操作。

## 语法

```javascript
expression.CreateUriAction(uri);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| uri | 必需 | string |  | 未提供描述。 |

## 返回值

[ApiUriAction](../../ApiUriAction/ApiUriAction.md)

## 示例

创建打开网页的 URI 操作，并将其分配给按钮小组件。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let uriAction = Api.CreateUriAction("https://www.onlyoffice.com");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(uriAction);

console.log('URI action class type: ' + uriAction.GetClassType());
```
