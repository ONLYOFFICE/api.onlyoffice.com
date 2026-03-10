# PictureFormPrBase

特定图片表单属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| lockAspectRatio | boolean | 指定图片表单的纵横比是否锁定。 |
| respectBorders | boolean | 指定缩放图像时是否保持表单边框宽度。 |
| scaleFlag | [ScaleFlag](../Enumeration/ScaleFlag.md) | 在图片表单中缩放图像的条件："always"、"never"、"tooBig" 或 "tooSmall"。 |
| shiftX | [percentage](../Enumeration/percentage.md) | 图片在图片表单中的水平位置（以百分比表示）：**0** - 图片位于左侧；**50** - 图片位于中心；**100** - 图片位于右侧。 |
| shiftY | [percentage](../Enumeration/percentage.md) | 图片在图片表单中的垂直位置（以百分比表示）：**0** - 图片位于顶部；**50** - 图片位于中心；**100** - 图片位于底部。 |


## 示例

Create a picture form with the specific picture form properties.

```javascript editor-forms
// How to create a picture form with its base properties.

// Create the base properties and apply them to the ApiPictureForm object.

const pictureFormPrBase = {
	"scaleFlag": "tooBig",
	"lockAspectRatio": true,
	"respectBorders": false,
	"shiftX": 50,
	"shiftY": 50
};
const pictureForm = Api.CreatePictureForm(pictureFormPrBase);

```
