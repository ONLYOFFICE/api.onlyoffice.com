# SetVisible

设置当前演示文稿幻灯片的可见性。

## 语法

```javascript
expression.SetVisible(value);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | boolean |  | 幻灯片可见性。 |

## 返回值

boolean

## 示例

控制演示文稿中幻灯片的可见性。

```javascript editor-pptx
// Create a new slide in the presentation.

// Hide the slide using the SetVisible method.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
slide.SetVisible(false);
presentation.AddSlide(slide);
```
