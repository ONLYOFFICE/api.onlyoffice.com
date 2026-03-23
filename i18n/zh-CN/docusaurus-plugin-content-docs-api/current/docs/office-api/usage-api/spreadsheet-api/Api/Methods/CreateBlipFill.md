# CreateBlipFill

创建图片填充，使用所选图像作为对象背景应用于对象。

## 语法

```javascript
expression.CreateBlipFill(imageUrl, blipFillType);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | 必需 | string |  | 用于图片填充的图像路径（目前仅支持网络 URL 或 Base64 编码的图像）。 |
| blipFillType | 必需 | [BlipFillType](../../Enumeration/BlipFillType.md) |  | 用于图片填充的填充类型（平铺或拉伸）。 |

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

此示例创建图片填充，使用选定的图像作为对象背景应用于对象。

```javascript editor-xlsx
// How to set image background to the shape object.

// Create a blip fill from the image to set object background.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
