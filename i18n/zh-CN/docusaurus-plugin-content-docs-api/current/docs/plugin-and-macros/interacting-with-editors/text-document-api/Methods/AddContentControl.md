# 添加内容控件

向文档添加一个空的内容控件。

## 语法

```javascript
expression.AddContentControl(type, commonPr);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [内容控件类型](../Enumeration/ContentControlType.md) | — | 指定内容控件类型的数值，可取值：**1**（块级）、**2**（行内）、**3**（行级）、**4**（单元格级）。 |
| commonPr | 可选 | [内容控件属性](../Enumeration/ContentControlProperties.md) | &#123;&#125; | 公共内容控件属性。 |

## 返回值

[内容控件](../Enumeration/ContentControl.md)

## 示例

```javascript
window.Asc.plugin.executeMethod ("AddContentControl", [1, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
