# GetClassType

返回 ApiUriAction 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiUriAction](../ApiUriAction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"uriAction"

## 示例

此示例创建 URI 操作并获取其类类型。

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
