# 拖拽事件

实现外部拖放模拟。

## 语法

```javascript
expression.OnDropEvent(obj);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | 必填 | object |  | 拖放模拟属性。 |
| obj.type | 必填 | string |  | 拖放事件类型：**onbeforedrop** - 当选中的文本或元素被拖动时触发的事件；**ondrop** - 当选中的文本或元素被拖放到有效目标上时触发的事件。 |
| obj.x | 必填 | number |  | 鼠标点击时的水平坐标（像素），相对于整个文档的左边缘。 |
| obj.y | 必填 | number |  | 鼠标点击时的垂直坐标（像素），相对于整个文档的顶部边缘。 |
| obj.html | 必填 | string |  | 被拖动的 HTML 元素。 |
| obj.text | 必填 | string |  | 被拖动的文本。 |

## 返回值

此方法不返回任何值。

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
