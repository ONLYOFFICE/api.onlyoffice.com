# GetSlideByIndex

按位置返回演示文稿中的幻灯片。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetSlideByIndex(nIndex);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 演示文稿中的幻灯片索引（位置）。 |

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md)

## 示例

使用 Api 全局对象按位置获取演示文稿中的幻灯片。

```javascript editor-pptx
// Find a slide from the presentation using its index via the Api object.

// Get a slide by its index directly from the Api object.

const slide = Api.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
```
