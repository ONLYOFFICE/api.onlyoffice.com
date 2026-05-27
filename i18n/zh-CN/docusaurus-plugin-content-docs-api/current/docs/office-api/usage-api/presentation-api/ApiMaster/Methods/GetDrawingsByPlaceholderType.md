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

按占位符类型从幻灯片母版获取所有绘图。

```javascript editor-pptx
// Retrieve drawings using GetDrawingsByPlaceholderType, specifying the placeholder type.

// Delete all drawings with the specified placeholder type from the master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const aDrawingsWithPh = master.GetDrawingsByPlaceholderType("title");
for (let i = 0; i < aDrawingsWithPh.length; i++) {
	aDrawingsWithPh[i].Delete();
}
```
