# AddContentControl

向文档添加空内容控件。

## 语法

```javascript
expression.AddContentControl(type, commonPr);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [ContentControlType](../Enumeration/ContentControlType.md) |  | 指定内容控件类型的数值。可以是以下值之一：**1**（块）、**2**（内联）、**3**（行）或 **4**（单元格）。 |
| commonPr | 可选 | [ContentControlProperties](../Enumeration/ContentControlProperties.md) | &#123;&#125; | 通用内容控件属性。 |

## 返回值

[ContentControl](../Enumeration/ContentControl.md)

## 示例

```javascript
window.Asc.plugin.executeMethod ("AddContentControl", [1, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
