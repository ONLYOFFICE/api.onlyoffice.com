# CDocBuilderValue

Class used by ONLYOFFICE Document Builder for getting the results of called JS commands. It represents a wrapper for a JS object.

## Syntax

```cpp
class CDocBuilderValue
```

The CDocBuilderValue class can be created from the primitive data types:

```cs
CDocBuilderValue(bool value);
CDocBuilderValue(int value);
CDocBuilderValue(unsigned int value);
CDocBuilderValue(double value);
CDocBuilderValue(String^ value);
```

| **Name**                              | **Description**                                            |
| ------------------------------------- | ---------------------------------------------------------- |
| [Call](Call.md)                       | Calls the specified Document Builder method.               |
| [Clear](Clear.md)                     | Clears the object.                                         |
| [CreateNull](CreateNull.md)           | Creates a null value.                                      |
| [CreateUndefined](CreateUndefined.md) | Creates an undefined value.                                |
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
| [IsTypedArray](IsTypedArray.md)       | Returns true if this object is a typed array.              |
| [IsUndefined](IsUndefined.md)         | Returns true if this object is undefined.                  |
| [Set](Set.md)                         | Sets an array value by its index.                          |
| [SetProperty](SetProperty.md)         | Sets a property to this object.                            |
| [ToBool](ToBool.md)                   | Converts this object to a boolean value.                   |
| [ToDouble](ToDouble.md)               | Converts this object to a double value.                    |
| [ToInt](ToInt.md)                     | Converts this object to an integer.                        |
| [ToString](ToString.md)               | Converts this object to a string.                          |
