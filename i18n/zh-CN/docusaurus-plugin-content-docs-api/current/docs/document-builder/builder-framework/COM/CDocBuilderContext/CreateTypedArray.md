# CreateTypedArray（创建类型化数组）

创建一个 Uint8Array 值，类似于 JS 中的 `Uint8Array`。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderContext.CreateTypedArray` 方法。

## 语法

```cpp
HRESULT CreateTypedArray([in] VARIANT buffer, [in] long length, [out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

| 参数   | 类型                                                            | 描述                 |
| ------ | --------------------------------------------------------------- | -------------------- |
| buffer | VARIANT                                                         | 数组缓冲区。         |
| length | long                                                            | 数组长度。           |
| result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 返回的类型化数组。   |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oArr = NULL;
CComSafeArray<BYTE> arr;
arr.Add(1);
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateTypedArray(ATL::CComVariant(arr), 1, &oArr);
oBuilder->Dispose();
```