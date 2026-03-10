# GetDrawingsByPlaceholderType

按指定的占位符类型返回绘图数组。

## 语法

```javascript
expression.GetDrawingsByPlaceholderType(sType);
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | 占位符类型。 |

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

此示例按占位符类型获取绘图并将其从版式中删除。

```javascript editor-pptx
// How to get all drawings as an array by indicating placeholder type.

// Get drawings by their placeholder type.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

let drawingsWithPh = layout.GetDrawingsByPlaceholderType("ctrTitle");
for (let i = 0; i < drawingsWithPh.length; i++) {
	drawingsWithPh[i].Delete();
}

```
