# CreateInstance

Creates an instance of the `CDocBuilder` class.

> Please note, that for the `.docbuilder` file the `CDocBuilder.CreateInstance` method is not used.

## Syntax

```cpp
HRESULT CreateInstance();
```

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
oBuilder->Initialize();
oBuilder->CreateInstance();
oBuilder->Dispose();
```
