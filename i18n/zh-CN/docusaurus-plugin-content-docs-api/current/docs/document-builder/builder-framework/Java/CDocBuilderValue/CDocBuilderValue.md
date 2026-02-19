# CDocBuilderValue

仅由 ONLYOFFICE 文档生成器使用的类，用于获取所调用 JS 命令的结果。它表示 JS 对象的包装器。

## 语法

```java
class CDocBuilderValue
```

`CDocBuilderValue` 类可由基本数据类型创建：

```java
CDocBuilderValue(boolean value);
CDocBuilderValue(int value);
CDocBuilderValue(double value);
CDocBuilderValue(String value);
CDocBuilderValue(Object[] values);
```

## 实例方法

| **名称**                              | **描述**                                  |
| ------------------------------------- | ----------------------------------------- |
| [call](call.md)                       | 调用指定的文档生成器方法。                |
| [clear](clear.md)                     | 清除对象。                                |
| [createArray](createArray.md)         | 创建数组值。                              |
| [createNull](createNull.md)           | 创建空值。                                |
| [createUndefined](createUndefined.md) | 创建未定义值。                            |
| [get](get.md)                         | 通过索引或名称返回数组值。                |
| [getLength](getLength.md)             | 如果此对象是数组，返回其长度。            |
| [getProperty](getProperty.md)         | 返回此对象的属性。                        |
| [isArray](isArray.md)                 | 如果此对象是数组，返回 true。             |
| [isBool](isBool.md)                   | 如果此对象是布尔值，返回 true。           |
| [isDouble](isDouble.md)               | 如果此对象是双精度值，返回 true。         |
| [isEmpty](isEmpty.md)                 | 如果此对象为空，返回 true。               |
| [isFunction](isFunction.md)           | 如果此对象是函数，返回 true。             |
| [isInt](isInt.md)                     | 如果此对象是整数，返回 true。             |
| [isNull](isNull.md)                   | 如果此对象是空值，返回 true。             |
| [isObject](isObject.md)               | 如果此对象是对象，返回 true。             |
| [isString](isString.md)               | 如果此对象是字符串，返回 true。           |
| [isUndefined](isUndefined.md)         | 如果此对象是未定义值，返回 true。         |
| [set](set.md)                         | 通过索引或名称设置数组值。                |
| [setProperty](setProperty.md)         | 为此对象设置属性。                        |
| [toBool](toBool.md)                   | 将此对象转换为布尔值。                    |
| [toDouble](toDouble.md)               | 将此对象转换为双精度值。                  |
| [toInt](toInt.md)                     | 将此对象转换为整数。                      |
| [toString](toString.md)               | 将此对象转换为字符串。                    |