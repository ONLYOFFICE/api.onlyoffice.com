# AddContentControlList

向文档添加空的内容控件列表。

## 语法

```javascript
expression.AddContentControlList(type, List, commonPr);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [ContentControlType](../Enumeration/ContentControlType.md) |  | 指定内容控件类型的数值。可以是以下值之一：**1**（组合框）、**0**（下拉列表）。 |
| List | 可选 | [ContentControlListElement](../Enumeration/ContentControlListElement.md)[] |  | 内容控件元素列表，由两个项目组成：**Display** - 将在内容控件列表中向用户显示的项目，**Value** - 内容控件列表中每个项目的值。 |
| commonPr | 可选 | [ContentControlProperties](../Enumeration/ContentControlProperties.md) | &#123;&#125; | 通用内容控件属性。 |

## 返回值

此方法不返回任何数据。

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
