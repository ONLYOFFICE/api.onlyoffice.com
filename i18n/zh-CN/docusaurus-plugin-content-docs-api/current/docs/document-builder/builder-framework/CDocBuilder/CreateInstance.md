# CreateInstance

创建 `CDocBuilder` 类的实例。

:::note
此方法仅适用于 **COM**。
:::

## 语法

```cpp
HRESULT CreateInstance();
```

## 示例

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
oBuilder->Initialize();
oBuilder->CreateInstance();
oBuilder->Dispose();
```
