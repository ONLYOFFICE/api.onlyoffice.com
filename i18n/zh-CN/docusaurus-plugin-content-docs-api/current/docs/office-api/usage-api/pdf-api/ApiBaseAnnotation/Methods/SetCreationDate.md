# SetCreationDate

设置批注创建日期。

## 语法

```javascript
expression.SetCreationDate(timeStamp);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| timeStamp | 必需 | number |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example creates a square annotation and sets creation date to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetCreationDate(new Date().getTime());

```
