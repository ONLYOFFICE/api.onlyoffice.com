# SetSubject

设置批注主题。

## 语法

```javascript
expression.SetSubject(subject);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subject | 必需 | string |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example creates a square annotation and sets subject to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetSubject("Annot subject");

```
