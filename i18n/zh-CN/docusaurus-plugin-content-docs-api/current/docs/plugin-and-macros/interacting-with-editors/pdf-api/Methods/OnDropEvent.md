# OnDropEvent

实现外部拖放模拟。

## 语法

```javascript
expression.OnDropEvent(obj);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | 必需 | object |  | 拖放模拟属性。 |
| obj.type | 必需 | string |  | 拖放事件类型：**onbeforedrop** - 当选定的文本或元素被拖动时触发的事件；**ondrop** - 当选定的文本或元素被放置到有效的放置目标上时触发的事件。 |
| obj.x | 必需 | number |  | 鼠标点击时相对于整个文档左边缘的水平坐标（以像素为单位）。 |
| obj.y | 必需 | number |  | 鼠标点击时相对于整个文档顶部边缘的垂直坐标（以像素为单位）。 |
| obj.html | 必需 | string |  | 被拖动的 HTML 元素。 |
| obj.text | 必需 | string |  | 被拖动的文本。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("OnDropEvent", [{
  "type": "onbeforedrop",
  "x" : pos.x,
  "y" : pos.y
}]);

window.Asc.plugin.executeMethod ("OnDropEvent", [{
  "type": "ondrop",
  "x" : pos.x,
  "y" : pos.y,
  "text" : "test text",
  "html" : "<span>test html</span>"
}]);
```
