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

按占位符类型从布局获取绘图并移除它们。

```javascript editor-pptx
// Drawings with specific placeholder types can be filtered and deleted.

// Delete all drawings with the "ctrTitle" placeholder type from the layout.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

let drawingsWithPh = layout.GetDrawingsByPlaceholderType("ctrTitle");
for (let i = 0; i < drawingsWithPh.length; i++) {
	drawingsWithPh[i].Delete();
}
```
