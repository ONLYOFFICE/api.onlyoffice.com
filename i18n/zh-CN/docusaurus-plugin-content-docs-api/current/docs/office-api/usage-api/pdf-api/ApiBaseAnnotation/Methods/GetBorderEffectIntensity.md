# GetBorderEffectIntensity

获取批注边框效果强度。

## 语法

```javascript
expression.GetBorderEffectIntensity(value);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | number |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例创建方形注释并获取其边框效果强度。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect intensity is: ${squareAnnot.GetBorderEffectIntensity()}`);

```
