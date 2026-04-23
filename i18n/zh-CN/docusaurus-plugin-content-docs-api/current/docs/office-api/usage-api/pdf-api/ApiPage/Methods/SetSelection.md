# SetSelection

设置页面选择。

## 语法

```javascript
expression.SetSelection(startPoint, endPoint);
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startPoint | 必需 | [Point](../../Enumeration/Point.md) |  | 未提供描述。 |
| endPoint | 必需 | [Point](../../Enumeration/Point.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例选择页面上的文本。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log('We selected the text on the page');
```
