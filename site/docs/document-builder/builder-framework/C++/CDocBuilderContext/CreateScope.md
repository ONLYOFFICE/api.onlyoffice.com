# CreateScope

Creates a [context scope](../CDocBuilderContextScope/CDocBuilderContextScope.md) which sets the execution context for all operations executed within a local scope.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateScope` method is not used.

## Syntax

```cpp
CDocBuilderContextScope CreateScope();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CContextScope oScope = oContext.CreateScope();
CDocBuilder::Dispose();
```
