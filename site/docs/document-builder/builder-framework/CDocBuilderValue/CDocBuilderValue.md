# CDocBuilderValue

Class used by ONLYOFFICE Document Builder for getting the results of called JS commands. It represents a wrapper for a JS object.

## Syntax

```cpp
class CDocBuilderValue
```

The `CDocBuilderValue` class can be created from the primitive data types:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        CDocBuilderValue(value)
        ```
        Where `value` can be: `bool`, `int`, `float`, `str`
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

## Methods

| Name                                  | Description                                                |
| ------------------------------------- | ---------------------------------------------------------- |
| [Call](Call.md)                       | Calls the specified Document Builder method.               |
| [Clear](Clear.md)                     | Clears the object.                                         |
| [CreateArray](CreateArray.md)         | Creates an array value. *(Python, Java only)*              |
| [CreateInstance](CreateInstance.md)   | Creates an instance of the CDocBuilderValue class. *(COM only)* |
| [CreateNull](CreateNull.md)           | Creates a null value. *(not used in COM)*                  |
| [CreateUndefined](CreateUndefined.md) | Creates an undefined value. *(not used in COM)*            |
| [Get](Get.md)                         | Returns an array value by its index.                       |
| [GetLength](GetLength.md)             | Returns the length if this object is an array/typed array. |
| [GetProperty](GetProperty.md)         | Returns a property of this object.                         |
| [IsArray](IsArray.md)                 | Returns true if this object is an array.                   |
| [IsBool](IsBool.md)                   | Returns true if this object is a boolean value.            |
| [IsDouble](IsDouble.md)               | Returns true if this object is a double value.             |
| [IsEmpty](IsEmpty.md)                 | Returns true if this object is empty.                      |
| [IsFunction](IsFunction.md)           | Returns true if this object is a function.                 |
| [IsInt](IsInt.md)                     | Returns true if this object is an integer.                 |
| [IsNull](IsNull.md)                   | Returns true if this object is null.                       |
| [IsObject](IsObject.md)               | Returns true if this object is an object.                  |
| [IsString](IsString.md)               | Returns true if this object is a string.                   |
| [IsTypedArray](IsTypedArray.md)       | Returns true if this object is a typed array. *(C++, COM, .Net only)* |
| [IsUndefined](IsUndefined.md)         | Returns true if this object is undefined.                  |
| [Set](Set.md)                         | Sets an array value by its index.                          |
| [SetProperty](SetProperty.md)         | Sets a property to this object.                            |
| [ToBool](ToBool.md)                   | Converts this object to a boolean value.                   |
| [ToDouble](ToDouble.md)               | Converts this object to a double value.                    |
| [ToInt](ToInt.md)                     | Converts this object to an integer.                        |
| [ToString](ToString.md)               | Converts this object to a string.                          |

:::note
Java uses camelCase method names: `call`, `clear`, `get`, `getLength`, etc.
:::
