#### new CDocBuilderContext

Class used by **ONLYOFFICE Document Builder** for getting JS context for working.

## Methods

| Name                                                                                           | Description                                                    |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [AllocMemoryTypedArray](/docbuilder/integrationapi/c/cdocbuildercontext/allocmemorytypedarray) | Allocates the memory for a typed array.                        |
| [CreateArray](/docbuilder/integrationapi/c/cdocbuildercontext/createarray)                     | Creates an array, an analogue of *new Array (length)* in JS.   |
| [CreateNull](/docbuilder/integrationapi/c/cdocbuildercontext/createnull)                       | Creates a null value, an analogue of *null* in JS.             |
| [CreateObject](/docbuilder/integrationapi/c/cdocbuildercontext/createobject)                   | Creates an empty object, an analogue of *{}* in JS.            |
| [CreateScope](/docbuilder/integrationapi/c/cdocbuildercontext/createscope)                     | Creates a context scope.                                       |
| [CreateTypedArray](/docbuilder/integrationapi/c/cdocbuildercontext/createtypedarray)           | Creates a Uint8Array value, an analogue of *Uint8Array* in JS. |
| [CreateUndefined](/docbuilder/integrationapi/c/cdocbuildercontext/createundefined)             | Creates an undefined value, an analogue of *undefined* in JS.  |
| [FreeMemoryTypedArray](/docbuilder/integrationapi/c/cdocbuildercontext/freememorytypedarray)   | Frees the memory for a typed array.                            |
| [GetGlobal](/docbuilder/integrationapi/c/cdocbuildercontext/getglobal)                         | Returns the global object for the current context.             |
| [IsError](/docbuilder/integrationapi/c/cdocbuildercontext/iserror)                             | Checks for errors in JS.                                       |