# CDocBuilderContext

Class used by ONLYOFFICE Document Builder for getting JS context for working.

## Syntax

```cpp
class CDocBuilderContext
```

## Instance Methods

| **Name**                                          | **Description**                                                |
| ------------------------------------------------- | -------------------------------------------------------------- |
| [AllocMemoryTypedArray](AllocMemoryTypedArray.md) | Allocates the memory for a typed array.                        |
| [CreateArray](CreateArray.md)                     | Creates an array, an analogue of `new Array (length)` in JS.   |
| [CreateNull](CreateNull.md)                       | Creates a null value, an analogue of `null` in JS.             |
| [CreateObject](CreateObject.md)                   | Creates an empty object, an analogue of `{}` in JS.            |
| [CreateScope](CreateScope.md)                     | Creates a context scope.                                       |
| [CreateTypedArray](CreateTypedArray.md)           | Creates a Uint8Array value, an analogue of `Uint8Array` in JS. |
| [CreateUndefined](CreateUndefined.md)             | Creates an undefined value, an analogue of `undefined` in JS.  |
| [FreeMemoryTypedArray](FreeMemoryTypedArray.md)   | Frees the memory for a typed array.                            |
| [GetGlobal](GetGlobal.md)                         | Returns the global object for the current context.             |
| [IsError](IsError.md)                             | Checks for errors in JS.                                       |
