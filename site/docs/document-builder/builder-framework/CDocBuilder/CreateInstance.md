# CreateInstance

Creates an instance of the `CDocBuilder` class.

:::note
This method is COM only.
:::

## Syntax

```cpp
HRESULT CreateInstance();
```

## Example

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
oBuilder->Initialize();
oBuilder->CreateInstance();
oBuilder->Dispose();
```
