# CDocBuilderValue

Class used by ONLYOFFICE Document Builder for getting the results of called JS commands. It represents a wrapper for a JS object.

## Syntax

```java
class CDocBuilderValue
```

The `CDocBuilderValue` class can be created from the primitive data types:

``` java
CDocBuilderValue(boolean value);
CDocBuilderValue(int value);
CDocBuilderValue(double value);
CDocBuilderValue(String value);
CDocBuilderValue(Object[] values);
```

## Instance Methods

| **Name**                              | **Description**                                 |
| ------------------------------------- | ----------------------------------------------- |
| [call](call.md)                       | Calls the specified Document Builder method.    |
| [clear](clear.md)                     | Clears the object.                              |
| [createArray](createArray.md)         | Creates an array value.                         |
| [createNull](createNull.md)           | Creates a null value.                           |
| [createUndefined](createUndefined.md) | Creates an undefined value.                     |
| [get](get.md)                         | Returns an array value by its index or name.    |
| [getLength](getLength.md)             | Returns the length if this object is an array.  |
| [getProperty](getProperty.md)         | Returns a property of this object.              |
| [isArray](isArray.md)                 | Returns true if this object is an array.        |
| [isBool](isBool.md)                   | Returns true if this object is a boolean value. |
| [isDouble](isDouble.md)               | Returns true if this object is a double value.  |
| [isEmpty](isEmpty.md)                 | Returns true if this object is empty.           |
| [isFunction](isFunction.md)           | Returns true if this object is a function.      |
| [isInt](isInt.md)                     | Returns true if this object is an integer.      |
| [isNull](isNull.md)                   | Returns true if this object is null.            |
| [isObject](isObject.md)               | Returns true if this object is an object.       |
| [isString](isString.md)               | Returns true if this object is a string.        |
| [isUndefined](isUndefined.md)         | Returns true if this object is undefined.       |
| [set](set.md)                         | Sets an array value by its index or name.       |
| [setProperty](setProperty.md)         | Sets a property to this object.                 |
| [toBool](toBool.md)                   | Converts this object to a boolean value.        |
| [toDouble](toDouble.md)               | Converts this object to a double value.         |
| [toInt](toInt.md)                     | Converts this object to an integer.             |
| [toString](toString.md)               | Converts this object to a string.               |
