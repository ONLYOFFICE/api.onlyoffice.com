# SetRotation

设置图章旋转角度。

## 语法

```javascript
expression.SetRotation(angle);
```

`expression` - 表示 [ApiStampAnnotation](../ApiStampAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| angle | 必需 | [Degree](../../Enumeration/Degree.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example sets rotate for stamp annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
stampAnnot.SetRotation(180);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We set rotate angle to: ${stampAnnot.GetRotation()} for stamp annotation`);
```
