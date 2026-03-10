# SetScale

设置图章大小比例。

## 语法

```javascript
expression.SetScale(scale);
```

`expression` - 表示 [ApiStampAnnotation](../ApiStampAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| scale | 必需 | number |  | 大小比例 |

## 返回值

boolean

## 示例

This example sets scale for stamp annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We set scale: ${stampAnnot.GetType()} for stamp annotation`);
```
