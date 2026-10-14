# GetUri

获取 URI 字符串

## 语法

```javascript
expression.GetUri();
```

`expression` - 表示 [ApiUriAction](../ApiUriAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例创建 URI 操作并获取其 URI 字符串。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let uriAction = Api.CreateUriAction("https://www.onlyoffice.com");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(uriAction);

console.log('URI: ' + uriAction.GetUri());
```
