# SetShd

指定应用于当前表格范围的底纹。

## 语法

```javascript
expression.SetShd(sType, r, g, b);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [ShdType](../../Enumeration/ShdType.md) \| [ApiFill](../../ApiFill/ApiFill.md) |  | 应用于当前表格内容的底纹类型。可以是 ShdType 或 ApiFill。 |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |

## 返回值

此方法不返回任何数据。

## 示例

在演示文稿中为表格应用底纹颜色。

```javascript editor-pptx
// Set the background shading for the entire table.

// Create a table, apply a shading color, and add it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
table.SetShd("clear", Api.HexColor('#FF6F3D'));
slide.RemoveAllObjects();
slide.AddObject(table);
```
