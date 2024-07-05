#### new CDocBuilderValue

Class used by **ONLYOFFICE Document Builder** for getting the results of called JS commands. It represents a wrapper for a JS object.

The **CDocBuilderValue** class can be created from the primitive data types:

```
CDocBuilderValue(const bool& value);
CDocBuilderValue(const int& value);
CDocBuilderValue(const unsigned int& value);
CDocBuilderValue(const double& value);
CDocBuilderValue(const char* value);
CDocBuilderValue(const wchar_t* value);
```

## Methods

| Name                                                                             | Description                                                |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Call](/docbuilder/integrationapi/c/cdocbuildervalue/call)                       | Calls the specified Document Builder method.               |
| [Clear](/docbuilder/integrationapi/c/cdocbuildervalue/clear)                     | Clears the object.                                         |
| [CreateNull](/docbuilder/integrationapi/c/cdocbuildervalue/createnull)           | Creates a null value.                                      |
| [CreateUndefined](/docbuilder/integrationapi/c/cdocbuildervalue/createundefined) | Creates an undefined value.                                |
| [Get](/docbuilder/integrationapi/c/cdocbuildervalue/get)                         | Returns an array value by its index.                       |
| [GetLength](/docbuilder/integrationapi/c/cdocbuildervalue/getlength)             | Returns the length if this object is an array/typed array. |
| [GetProperty](/docbuilder/integrationapi/c/cdocbuildervalue/getproperty)         | Returns a property of this object.                         |
| [IsArray](/docbuilder/integrationapi/c/cdocbuildervalue/isarray)                 | Returns true if this object is an array.                   |
| [IsBool](/docbuilder/integrationapi/c/cdocbuildervalue/isbool)                   | Returns true if this object is a boolean value.            |
| [IsDouble](/docbuilder/integrationapi/c/cdocbuildervalue/isdouble)               | Returns true if this object is a double value.             |
| [IsEmpty](/docbuilder/integrationapi/c/cdocbuildervalue/isempty)                 | Returns true if this object is empty.                      |
| [IsFunction](/docbuilder/integrationapi/c/cdocbuildervalue/isfunction)           | Returns true if this object is a function.                 |
| [IsInt](/docbuilder/integrationapi/c/cdocbuildervalue/isint)                     | Returns true if this object is an integer.                 |
| [IsNull](/docbuilder/integrationapi/c/cdocbuildervalue/isnull)                   | Returns true if this object is null.                       |
| [IsObject](/docbuilder/integrationapi/c/cdocbuildervalue/isobject)               | Returns true if this object is an object.                  |
| [IsString](/docbuilder/integrationapi/c/cdocbuildervalue/isstring)               | Returns true if this object is a string.                   |
| [IsTypedArray](/docbuilder/integrationapi/c/cdocbuildervalue/istypedarray)       | Returns true if this object is a typed array.              |
| [IsUndefined](/docbuilder/integrationapi/c/cdocbuildervalue/isundefined)         | Returns true if this object is undefined.                  |
| [Set](/docbuilder/integrationapi/c/cdocbuildervalue/set)                         | Sets an array value by its index.                          |
| [SetProperty](/docbuilder/integrationapi/c/cdocbuildervalue/setproperty)         | Sets a property to this object.                            |
| [ToBool](/docbuilder/integrationapi/c/cdocbuildervalue/tobool)                   | Converts this object to a boolean value.                   |
| [ToDouble](/docbuilder/integrationapi/c/cdocbuildervalue/todouble)               | Converts this object to a double value.                    |
| [ToInt](/docbuilder/integrationapi/c/cdocbuildervalue/toint)                     | Converts this object to an integer.                        |
| [ToString](/docbuilder/integrationapi/c/cdocbuildervalue/tostring)               | Converts this object to a string.                          |