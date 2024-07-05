#### CDocBuilderContextScope CreateScope();

Creates a [context scope](/docbuilder/integrationapi/c/cdocbuildercontextscope) which sets the execution context for all operations executed within a local scope.

Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateScope* method is not used.

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CContextScope oScope = oContext.CreateScope();
CDocBuilder::Dispose();
```