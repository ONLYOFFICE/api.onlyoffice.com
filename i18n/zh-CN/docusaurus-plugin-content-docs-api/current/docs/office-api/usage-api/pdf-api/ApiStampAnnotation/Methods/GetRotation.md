# GetRotation

获取图章旋转角度。

## 语法

```javascript
expression.GetRotation();
```

`expression` - 表示 [ApiStampAnnotation](../ApiStampAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Degree](../../Enumeration/Degree.md)

## 示例

此示例获取图章注释的旋转角度。

```javascript editor-pdf
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
let oldRotAngle = stampAnnot.GetRotation();
stampAnnot.SetScale(0.5);
stampAnnot.SetRotation(180);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We change stamp rotate angle from ${oldRotAngle} to: ${stampAnnot.GetRotation()}`);
```
