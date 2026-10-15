# SetUri

为操作设置 URI

## 语法

```javascript
expression.SetUri(uri);
```

`expression` - 表示 [ApiUriAction](../ApiUriAction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| uri | 必需 | string |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建 URI 操作并更改其 URI 字符串。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let uriAction = Api.CreateUriAction("https://www.onlyoffice.com");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(uriAction);

uriAction.SetUri("https://api.onlyoffice.com");
console.log('Updated URI: ' + uriAction.GetUri());
```
