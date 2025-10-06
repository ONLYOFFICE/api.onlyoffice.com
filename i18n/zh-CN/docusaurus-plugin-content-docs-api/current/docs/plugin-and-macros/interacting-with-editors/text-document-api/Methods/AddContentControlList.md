# 添加内容控件列表

向文档添加一个空的内容控件列表。

## 语法

```javascript
expression.AddContentControlList(type, List, commonPr);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必填 | [内容控件类型](../Enumeration/ContentControlType.md) | — | 指定内容控件类型的数值，可取以下值之一：**1**（组合框）、**0**（下拉列表）。 |
| List | 选填 | [内容控件列表元素](../Enumeration/ContentControlListElement.md)[] | — | 内容控件列表元素，每个元素包含两项：**Display** - 在内容控件列表中显示给用户的项目，**Value** - 内容控件列表中每个项目的值。 |
| commonPr | 选填 | [内容控件属性](../Enumeration/ContentControlProperties.md) | &#123;&#125; | 公共内容控件属性。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("AddContentControlList", [0,
    [
        {
            "Display": "Item1_D",
            "Value": "Item1_V"
        },
        {
            "Display": "Item2_D",
            "Value": "Item2_V"
        }
    ], 
    {
        "Id" : 7,
        "Tag" : "{tag}",
        "Lock" : 0
    }
]);
```
