```yml signature
- {type: keyword, text: static}
- {type: text, text: " "}
- {id: ../../CDocBuilderValue/index.md, token: {type: type, text: CDocBuilderValue}}
- {type: text, text: " "}
- {type: entity, text: CreateUndefined}
- {type: text, text: (}
- {type: text, text: )}
```

## Description

Creates an undefined value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [CreateUndefined](../CDocBuilderContext/CreateUndefined.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.CreateUndefined` method is not used.

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oUndefined = oApi.CreateUndefined();
CDocBuilder::Dispose();
```
