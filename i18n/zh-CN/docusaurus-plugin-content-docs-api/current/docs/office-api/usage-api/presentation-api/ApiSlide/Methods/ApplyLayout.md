# ApplyLayout

将指定版式应用于当前幻灯片。
版式必须位于幻灯片母版中。

## 语法

```javascript
expression.ApplyLayout(oLayout);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oLayout | 必需 | [ApiLayout](../../ApiLayout/ApiLayout.md) |  | 要应用的版式。 |

## 返回值

boolean

## 示例

将幻灯片母版中的预定义布局应用于当前幻灯片。

```javascript editor-pptx
// Retrieve the master slide and select a specific layout by index.

// Set the layout to the slide using the master's layout definition.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(4);
slide.ApplyLayout(layout);
```
