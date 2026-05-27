# SetRotation

设置页面旋转角度

## 语法

```javascript
expression.SetRotation(angle);
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| angle | 必需 | number |  | 以度为单位的旋转角度。必须是 90 的倍数。 |

## 返回值

boolean

## 示例

在 PDF 中将页面旋转到特定角度。

```javascript editor-pdf
// How do I turn a page to face the right direction in a PDF?

// Apply a rotation transformation to change the page orientation in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);
```
