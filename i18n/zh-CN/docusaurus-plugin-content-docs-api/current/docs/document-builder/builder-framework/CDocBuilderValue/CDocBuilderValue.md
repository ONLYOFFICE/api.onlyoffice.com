# CDocBuilderValue

ONLYOFFICE Document Builder 用于获取调用 JS 命令结果的类。它表示 JS 对象的包装器。

## 语法

```cpp
class CDocBuilderValue
```

`CDocBuilderValue` 类可以从基本数据类型创建：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        CDocBuilderValue(value)
        ```
        其中 `value` 可以是：`bool`、`int`、`float`、`str`
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue(const bool& value);
        CDocBuilderValue(const int& value);
        CDocBuilderValue(const unsigned int& value);
        CDocBuilderValue(const double& value);
        CDocBuilderValue(const char* value);
        CDocBuilderValue(const wchar_t* value);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue(boolean value);
        CDocBuilderValue(int value);
        CDocBuilderValue(double value);
        CDocBuilderValue(String value);
        CDocBuilderValue(Object[] values);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue(bool value);
        CDocBuilderValue(int value);
        CDocBuilderValue(unsigned int value);
        CDocBuilderValue(double value);
        CDocBuilderValue(String^ value);
        ```
    </TabItem>
</Tabs>

## 方法

| 名称                                  | 描述                                                       |
| ------------------------------------- | ---------------------------------------------------------- |
| [Call](Call.md)                       | 调用指定的 Document Builder 方法。                         |
| [Clear](Clear.md)                     | 清除对象。                                                 |
| [CreateArray](CreateArray.md)         | 创建数组值。*（仅限 Python、Java）*                        |
| [CreateInstance](CreateInstance.md)   | 创建 CDocBuilderValue 类的实例。*（仅限 COM）*             |
| [CreateNull](CreateNull.md)           | 创建空值。*（COM 中不使用）*                               |
| [CreateUndefined](CreateUndefined.md) | 创建未定义值。*（COM 中不使用）*                           |
| [Get](Get.md)                         | 通过索引返回数组值。                                       |
| [GetLength](GetLength.md)             | 如果此对象是数组/类型化数组，则返回长度。                  |
| [GetProperty](GetProperty.md)         | 返回此对象的属性。                                         |
| [IsArray](IsArray.md)                 | 如果此对象是数组，则返回 true。                            |
| [IsBool](IsBool.md)                   | 如果此对象是布尔值，则返回 true。                          |
| [IsDouble](IsDouble.md)               | 如果此对象是双精度值，则返回 true。                        |
| [IsEmpty](IsEmpty.md)                 | 如果此对象为空，则返回 true。                              |
| [IsFunction](IsFunction.md)           | 如果此对象是函数，则返回 true。                            |
| [IsInt](IsInt.md)                     | 如果此对象是整数，则返回 true。                            |
| [IsNull](IsNull.md)                   | 如果此对象为 null，则返回 true。                           |
| [IsObject](IsObject.md)               | 如果此对象是对象，则返回 true。                            |
| [IsString](IsString.md)               | 如果此对象是字符串，则返回 true。                          |
| [IsTypedArray](IsTypedArray.md)       | 如果此对象是类型化数组，则返回 true。*（仅限 C++、COM、.Net）* |
| [IsUndefined](IsUndefined.md)         | 如果此对象未定义，则返回 true。                            |
| [Set](Set.md)                         | 通过索引设置数组值。                                       |
| [SetProperty](SetProperty.md)         | 为此对象设置属性。                                         |
| [ToBool](ToBool.md)                   | 将此对象转换为布尔值。                                     |
| [ToDouble](ToDouble.md)               | 将此对象转换为双精度值。                                   |
| [ToInt](ToInt.md)                     | 将此对象转换为整数。                                       |
| [ToString](ToString.md)               | 将此对象转换为字符串。                                     |

:::note
Java 使用驼峰命名法的方法名：`call`、`clear`、`get`、`getLength` 等。
:::
