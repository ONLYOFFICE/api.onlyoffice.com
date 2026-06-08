# GoToPage

移动到指定页面。

## 语法

```javascript
expression.GoToPage(pageIndex, rect);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pageIndex | 必需 | number |  | 要导航到的从零开始的页面索引。 |
| rect | 可选 | [Rect](../Enumeration/Rect.md) |  | 如果仅指定 x1、y1（例如 [10, 10]），则以继承的缩放比例移动到该位置；如果指定完整矩形（例如 [10, 10, 100, 100]），则缩放到该矩形 |

## 返回值

boolean
