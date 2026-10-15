---
description: "Uploader is a file upload component that supports chunked uploads, folder uploads, and file size validation."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/uploader/Uploader.mdx"
---

import ThemedImage from '@theme/ThemedImage';

# Uploader

:::warning[Portal only]

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

Uploader is a file upload component that supports chunked uploads, folder uploads, and file size validation. It uses the ONLYOFFICE Apps API SDK for upload operations and provides a drag-and-drop interface.

### Default file upload

This example shows the basic file uploader with multiple file support and file type restrictions.

<ThemedImage alt="Default" width={1019} sources={{ light: require('./uploader--default-light.png').default, dark: require('./uploader--default-dark.png').default }} />

Basic usage with file type restrictions and multiple file upload enabled:

```tsx
<Uploader
  width="800px"
  height="300px"
  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
  shortText="PDF, DOC, DOCX, XLS, XLSX"
  fullText="PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX"
  badgeValue={2}
  linkMainText="Upload files"
  secondaryText="or drag and drop files here"
  isMultipleUpload={true}
  targetId="123"
/>
```

### Single file upload

Demonstrates uploading a single file at a time.

<ThemedImage alt="Single File Upload" width={1019} sources={{ light: require('./uploader--single-file-upload-light.png').default, dark: require('./uploader--single-file-upload-dark.png').default }} />

Restrict to single file upload by setting `isMultipleUpload` to false:

```tsx
<Uploader
  linkMainText="Upload file"
  secondaryText="or drag and drop a file here"
  isMultipleUpload={false}
  targetId="123"
/>
```

### Folder upload

Shows how to enable folder upload mode for uploading entire directories.

<ThemedImage alt="Folder Upload" width={1019} sources={{ light: require('./uploader--folder-upload-light.png').default, dark: require('./uploader--folder-upload-dark.png').default }} />

Enable folder upload with `isFolderUpload` prop:

```tsx
<Uploader
  shortText="Any files"
  linkMainText="Upload folder"
  secondaryText="or drag and drop a folder here"
  isFolderUpload={true}
  isMultipleUpload={true}
  targetId="123"
/>
```

### Single folder upload

Demonstrates uploading a single folder at a time.

<ThemedImage alt="Single Folder Upload" width={1019} sources={{ light: require('./uploader--single-folder-upload-light.png').default, dark: require('./uploader--single-folder-upload-dark.png').default }} />

```tsx
<Uploader
  linkMainText="Upload folder"
  secondaryText="or drag and drop a folder here"
  isFolderUpload={true}
  isMultipleUpload={false}
  targetId="123"
/>
```

### Image upload

Specialized uploader for image files only.

<ThemedImage alt="Image Upload" width={1019} sources={{ light: require('./uploader--image-upload-light.png').default, dark: require('./uploader--image-upload-dark.png').default }} />

Restrict to image file types:

```tsx
<Uploader
  accept=".png,.jpg,.jpeg,.gif,.webp,.svg"
  shortText="PNG, JPG, JPEG, GIF"
  fullText="PNG, JPG, JPEG, GIF, WEBP, SVG"
  badgeValue={2}
  linkMainText="Upload images"
  secondaryText="or drag and drop images here"
  targetId="123"
/>
```

### With size limit

Shows how to set maximum file size per upload.

<ThemedImage alt="With Size Limit" width={1019} sources={{ light: require('./uploader--with-size-limit-light.png').default, dark: require('./uploader--with-size-limit-dark.png').default }} />

Set maximum file size with `maxPerUploadSize`:

```tsx
<Uploader
  linkMainText="Upload files (max 10MB each)"
  maxPerUploadSize="10MB"
  targetId="123"
/>
```

### With total size limit

Demonstrates setting both per-file and total upload size limits.

<ThemedImage alt="With Total Size Limit" width={1019} sources={{ light: require('./uploader--with-total-size-limit-light.png').default, dark: require('./uploader--with-total-size-limit-dark.png').default }} />

Set both individual and total size limits:

```tsx
<Uploader
  linkMainText="Upload files (max 100MB total)"
  maxPerUploadSize="10MB"
  maxTotalUploadSize="100MB"
  targetId="123"
/>
```

### Any file types

Allows uploading any file type without restrictions.

<ThemedImage alt="Any Files" width={1019} sources={{ light: require('./uploader--any-files-light.png').default, dark: require('./uploader--any-files-dark.png').default }} />

Accept all file types with wildcard:

```tsx
<Uploader
  accept="*"
  shortText="Any files"
  linkMainText="Upload any files"
  secondaryText="All file types are accepted"
  targetId="123"
/>
```

### Custom upload settings

Shows how to customize chunk size, thread count, and concurrent file uploads.

<ThemedImage alt="Custom Settings" width={1019} sources={{ light: require('./uploader--custom-settings-light.png').default, dark: require('./uploader--custom-settings-dark.png').default }} />

Configure upload behavior with `filesSettings`:

```tsx
<Uploader
  filesSettings={{
    chunkUploadSize: 10 * 1024 * 1024,
    maxUploadThreadCount: 5,
    maxUploadFilesCount: 3,
  }}
  linkMainText="Upload with custom settings"
  secondaryText="10MB chunks, 5 threads, 3 files at once"
  targetId="123"
/>
```
