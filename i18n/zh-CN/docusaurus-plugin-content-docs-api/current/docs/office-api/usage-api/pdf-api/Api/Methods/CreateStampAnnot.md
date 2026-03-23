# CreateStampAnnot

创建图章批注。

## 语法

```javascript
expression.CreateStampAnnot(rect, type, author, creationDate);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 批注矩形（由于图章尺寸是预设的，因此只使用 x1、y1 坐标）。 |
| type | 必需 | [StampType](../../Enumeration/StampType.md) |  | 图章类型 |
| author | 可选 | string |  | 作者姓名 |
| creationDate | 可选 | number |  | 创建日期（时间戳） |

## 返回值

[ApiStampAnnotation](../../ApiStampAnnotation/ApiStampAnnotation.md)

## 示例

此示例创建图章注释并将其添加到页面。

```javascript editor-pdf
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([40, 40, 100, 100], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);

```
