#### new CDocBuilderValue

Class used by **ONLYOFFICE Document Builder** for getting the results of called JS commands. It represents a wrapper for a JS object.

The **CDocBuilderValue** class can be created from the primitive data types:

```
CDocBuilderValue(bool value);
CDocBuilderValue(int value);
CDocBuilderValue(unsigned int value);
CDocBuilderValue(double value);
CDocBuilderValue(String^ value);
```

## Methods

| Name                                                                               | Description                                                |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Call](/docbuilder/integrationapi/net/cdocbuildervalue/call)                       | Calls the specified Document Builder method.               |
| [Clear](/docbuilder/integrationapi/net/cdocbuildervalue/clear)                     | Clears the object.                                         |
| [CreateNull](/docbuilder/integrationapi/net/cdocbuildervalue/createnull)           | Creates a null value.                                      |
| [CreateUndefined](/docbuilder/integrationapi/net/cdocbuildervalue/createundefined) | Creates an undefined value.                                |
| [Get](/docbuilder/integrationapi/net/cdocbuildervalue/get)                         | Returns an array value by its index.                       |
| [GetLength](/docbuilder/integrationapi/net/cdocbuildervalue/getlength)             | Returns the length if this object is an array/typed array. |
| [GetProperty](/docbuilder/integrationapi/net/cdocbuildervalue/getproperty)         | Returns a property of this object.                         |
| [IsArray](/docbuilder/integrationapi/net/cdocbuildervalue/isarray)                 | Returns true if this object is an array.                   |
| [IsBool](/docbuilder/integrationapi/net/cdocbuildervalue/isbool)                   | Returns true if this object is a boolean value.            |
| [IsDouble](/docbuilder/integrationapi/net/cdocbuildervalue/isdouble)               | Returns true if this object is a double value.             |
| [IsEmpty](/docbuilder/integrationapi/net/cdocbuildervalue/isempty)                 | Returns true if this object is empty.                      |
| [IsFunction](/docbuilder/integrationapi/net/cdocbuildervalue/isfunction)           | Returns true if this object is a function.                 |
| [IsInt](/docbuilder/integrationapi/net/cdocbuildervalue/isint)                     | Returns true if this object is an integer.                 |
| [IsNull](/docbuilder/integrationapi/net/cdocbuildervalue/isnull)                   | Returns true if this object is null.                       |
| [IsObject](/docbuilder/integrationapi/net/cdocbuildervalue/isobject)               | Returns true if this object is an object.                  |
| [IsString](/docbuilder/integrationapi/net/cdocbuildervalue/isstring)               | Returns true if this object is a string.                   |
| [IsTypedArray](/docbuilder/integrationapi/net/cdocbuildervalue/istypedarray)       | Returns true if this object is a typed array.              |
| [IsUndefined](/docbuilder/integrationapi/net/cdocbuildervalue/isundefined)         | Returns true if this object is undefined.                  |
| [Set](/docbuilder/integrationapi/net/cdocbuildervalue/set)                         | Sets an array value by its index.                          |
| [SetProperty](/docbuilder/integrationapi/net/cdocbuildervalue/setproperty)         | Sets a property to this object.                            |
| [ToBool](/docbuilder/integrationapi/net/cdocbuildervalue/tobool)                   | Converts this object to a boolean value.                   |
| [ToDouble](/docbuilder/integrationapi/net/cdocbuildervalue/todouble)               | Converts this object to a double value.                    |
| [ToInt](/docbuilder/integrationapi/net/cdocbuildervalue/toint)                     | Converts this object to an integer.                        |
| [ToString](/docbuilder/integrationapi/net/cdocbuildervalue/tostring)               | Converts this object to a string.                          |