---
sidebar_position: -2
---

# TypeScript

The ONLYOFFICE DocSpace SDK for TypeScript is a library that provides tools for integrating and managing DocSpace features within your applications.

It simplifies interaction with the DocSpace API by offering ready-to-use methods and models.

**[ONLYOFFICE Typescript Library on GitHub](https://github.com/ONLYOFFICE/docspace-api-sdk-typescript)**

### Building

To build and compile the TypeScript sources to JavaScript, use the following commands:

```bash
npm install
npm run build
```

### Consuming

To use the SDK in your project, navigate to the root folder of your consuming project and run one of the following commands:

#### From published package (recommended)

```bash
npm install @onlyoffice/docspace-api-sdk --save
```

#### From local build (not recommended)

```bash
npm install PATH_TO_GENERATED_PACKAGE --save
```

## Getting Started

Please follow the [building](#building) instruction and execute the following TS code:

```typescript

import { Configuration, ApiKeysApi } from '@onlyoffice/docspace-api-sdk';

const config = new Configuration ({
    basePath: "https://your-docspace.onlyoffice.com",
    accessToken: "YOUR ACCESS TOKEN",
});

const apiInstance = new ApiKeysApi(config);

const opts: any = {
  'createApiKeyRequestDto':  // 
};
try {
    const result = await apiInstance.createApiKey(
      opts
    );
    console.log('API called successfully. Returned data: ', result.data);
  } catch (error) {
    console.error(error);
}


```
