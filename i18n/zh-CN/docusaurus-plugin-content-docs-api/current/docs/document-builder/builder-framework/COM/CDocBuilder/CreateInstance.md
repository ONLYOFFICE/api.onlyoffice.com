# CreateInstance（创建实例）

创建 `CDocBuilder` 类的实例。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.CreateInstance` 方法。

## 语法

```cpp
HRESULT CreateInstance();
```

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
oBuilder->Initialize();
oBuilder->CreateInstance();
oBuilder->Dispose();
```