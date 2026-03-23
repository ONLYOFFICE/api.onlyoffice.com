# GetDrawingsByPlaceholderType

按指定的占位符类型返回绘图数组。

## 语法

```javascript
expression.GetDrawingsByPlaceholderType(sType);
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | 占位符类型。 |

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

此示例按占位符类型获取绘图并将其从幻灯片母版中删除。

```javascript editor-pptx
// How to get all drawings as an array by indicating placeholder type from a master.

// Get drawings by their placeholder type knowing a slide master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const aDrawingsWithPh = master.GetDrawingsByPlaceholderType("title");
for (let i = 0; i < aDrawingsWithPh.length; i++) {
	aDrawingsWithPh[i].Delete();
}

```
