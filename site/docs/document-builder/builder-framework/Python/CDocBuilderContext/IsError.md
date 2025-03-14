# IsError

Checks for errors in JS. The error message and call stack will be written to `std::cerr`.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.IsError` method is not used.

## Syntax

```py
def IsError(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
bError = context.IsError()
```
