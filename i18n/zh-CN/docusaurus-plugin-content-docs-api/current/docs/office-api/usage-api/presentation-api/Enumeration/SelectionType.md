# SelectionType

表示选择中的对象类型。

## 类型

枚举

## 值

- "none"
- "shapes"
- "slides"
- "text"

## 示例

获取当前选择的类型。

```javascript editor-pptx
// Use the GetType method to retrieve the selection type.

// The returned value is a string representing the selection type.

const selectionType = Api.GetSelection().GetType();
```
