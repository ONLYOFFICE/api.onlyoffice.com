# SetBorderWidth

设置批注边框宽度。

## 语法

```javascript
expression.SetBorderWidth(width);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [pt](../../Enumeration/pt.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建方形注释并为其设置粗边框宽度。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);

```
