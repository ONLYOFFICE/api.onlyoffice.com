# 文档信息

info 部分定义文档信息参数。

## 收藏 {#favorite}

**类型：** `boolean`

*收藏*图标的高亮状态。当用户单击图标时，将调用 [onMetaChange](../events.md#onmetachange)事件。如果参数为`undefined`或`null`，则*收藏*图标不会显示在编辑器窗口标题处。

**示例**: `true`

![收藏](/assets/images/editor/favorite.png#gh-light-mode-only)![收藏](/assets/images/editor/favorite.dark.png#gh-dark-mode-only)

## 文件夹

**类型：** `string`

存储文档的文件夹。如果文档位于根文件夹中，可以为空。

**示例**: `"Example Files"`

## 所有者 {#owner}

**类型：** `string`

文档所有者/创建者的名称。

**示例**: `"John Smith"`

## sharingSettings

**类型：** `object[]`

有关允许与其他用户共享文档的设置的信息。

**示例**:

```ts
[
  {
    isLink: false,
    permissions: "Full Access",
    user: "John Smith",
  },
]
```

### sharingSettings.isLink

**类型：** `boolean`

是否用链接图标替换用户图标。

**示例**: `false`

### sharingSettings.permissions

**类型：** `string`

具有上述名称的用户的访问权限。

**示例**: `"Full Access"`

### sharingSettings.user

**类型：** `string`

文档将与之共享的用户的名称。

**示例**: `"John Smith"`

![共享设置](/assets/images/editor/sharing-settings.png#gh-light-mode-only)![共享设置](/assets/images/editor/sharing-settings.dark.png#gh-dark-mode-only)

## 已上传 {#uploaded}

**类型：** `string`

文档上传日期。

**示例**: `"2010-07-07 3:46 PM"`

![文档信息](/assets/images/editor/info.png#gh-light-mode-only)![文档信息](/assets/images/editor/info.dark.png#gh-dark-mode-only)

## 示例

```ts
const config = {
  // ...
  document: {
    // ...
    info: {
      favorite: false,
      folder: "Example Files",
      owner: "John Smith",
      sharingSettings: [
        {
          isLink: false,
          permissions: "Full Access",
          user: "John Smith",
        },
      ],
      uploaded: "2010-07-07 3:46 PM",
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
