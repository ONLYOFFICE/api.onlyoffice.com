---
sidebar_position: 10
---

# Document storage service

These parameters define the document storage service configuration.

## storage.name

`Type: string`   `Default: "storage-fs"`

Defines the document storage service name. E.g., the "storage-s3" value allows connecting Amazon S3 bucket as a cache. The "storage-az" value allows connecting MS Azure Blob Storage as a cache.

## storage.fs

`Type: object`

Defines a fileSystem object parameters.

### storage.fs.folderPath

`Type: string`   `Default: ""`

Defines a path to the `App_Data` folder where all files are stored.

### storage.fs.urlExpires

`Type: integer`   `Default: 900`

Defines the time when the temporary URL to the fileSystem object expires (measured in seconds).

### storage.fs.secretString

`Type: string`   `Default: "verysecretstring"`

Defines the secret string which is used to sign the URL.

:::warning
Do not store sensitive values in version control. Consider using environment variables or a secrets manager.
:::

## storage.region

`Type: string`   `Default: ""`

Defines an AWS region where your Amazon bucket resides.

## storage.endpoint

`Type: string`   `Default: "http://localhost/s3"`

Defines the endpoint of S3 AWS document storage or MS Azure Blob Storage.

## storage.bucketName

`Type: string`   `Default: "cache"`

Defines a unique name of S3 AWS document storage or MS Azure Blob Storage.

## storage.storageFolderName

`Type: string`   `Default: "files"`

Defines the S3 AWS document storage folder name where all the files are stored.

## storage.cacheFolderName

`Type: string`   `Default: "data"`

Defines the cache folder name for working in the multi-tenant mode.

## storage.commandOptions

`Type: object`

Defines parameters that allow customizing commands to a storage, for example, enabling AWS KMS.

### storage.commandOptions.s3

`Type: object`

Defines parameters that allow customizing commands to S3 AWS document storage.

### storage.commandOptions.s3.putObject

`Type: object`

Defines parameters of the putObject command type used to upload an object to a specified S3 bucket.

### storage.commandOptions.s3.putObject.BucketKeyEnabled

`Type: boolean`

This is an optional setting. Optimizes the cost per request by reducing calls to the KMS API.

### storage.commandOptions.s3.putObject.ServerSideEncryption

`Type: string`

Defines the encryption type for the newly uploaded object. The available values are "aws:kms" or "AES256".

### storage.commandOptions.s3.putObject.SSEKMSKeyId

`Type: string`

Defines the identifier (ARN or key) of the Customer-Managed Key in AWS KMS that is used to encrypt the object after it&#x27;s uploaded.

### storage.commandOptions.s3.getObject

`Type: object`

Defines parameters of the getObject command type used to retrieve an object from a specified S3 bucket.

### storage.commandOptions.s3.copyObject

`Type: object`

Defines parameters of the copyObject command type used to create a copy of an object stored in a specified S3 bucket.

### storage.commandOptions.s3.copyObject.MetadataDirective

`Type: string`   `Default: "COPY"`

Defines how Amazon S3 should handle the metadata of the destination object during a copy operation. If the value is set to "COPY", the metadata from the source object is copied to the destination object. If the value is set to "REPLACE", the metadata of the destination object is replaced by the metadata provided in the copyObject request and the metadata from the source object is not copied.

### storage.commandOptions.s3.copyObject.BucketKeyEnabled

`Type: boolean`

This is an optional setting. Optimizes the cost per request by reducing calls to the KMS API.

### storage.commandOptions.s3.copyObject.ServerSideEncryption

`Type: string`

Defines the encryption type for the newly copied object. The available values are "aws:kms" or "AES256".

### storage.commandOptions.s3.copyObject.SSEKMSKeyId

`Type: string`

Defines the identifier (ARN or key) of the Customer-Managed Key in AWS KMS that is used to encrypt the object after it&#x27;s copied.

### storage.commandOptions.s3.listObjects

`Type: object`

Defines parameters of the listObjects command type used to retrieve a list of objects within a specified S3 bucket.

### storage.commandOptions.s3.listObjects.MaxKeys

`Type: integer`   `Default: 1000`

Defines the maximum number of objects that are returned in a response.

### storage.commandOptions.s3.deleteObject

`Type: object`

Defines parameters of the deleteObject command type used to remove an object from a specified S3 bucket.

### storage.commandOptions.az

`Type: object`

Defines parameters that allow customizing commands to MS Azure Blob Storage.

### storage.commandOptions.az.uploadData

`Type: object`

Defines parameters of the uploadData command type used to upload data to MS Azure Blob Storage.

### storage.commandOptions.az.uploadData.encryptionScope

`Type: string`

Defines the name of the encryption scope used to encrypt an uploaded blob.

### storage.commandOptions.az.uploadStream

`Type: object`

Defines parameters of the uploadStream command type used to upload data from a stream to MS Azure Blob Storage.

### storage.commandOptions.az.uploadStream.encryptionScope

`Type: string`

Defines the name of the encryption scope used to encrypt a blob uploaded from a sream.

### storage.commandOptions.az.download

`Type: object`

Defines parameters of the download command type used to download data from MS Azure Blob Storage.

### storage.commandOptions.az.syncCopyFromURL

`Type: object`

Defines parameters of the syncCopyFromURL command type used to copy a blob from a source URL to a destination blob.

### storage.commandOptions.az.syncCopyFromURL.encryptionScope

`Type: string`

Defines the name of the encryption scope used to encrypt a copied blob.

### storage.commandOptions.az.listBlobsFlat

`Type: object`

Defines parameters of the listBlobsFlat command type used to retrieve a list of all blobs in a container.

### storage.commandOptions.az.listBlobsFlat.maxPageSize

`Type: integer`   `Default: 1000`

Defines the maximum number of blobs to return.

### storage.commandOptions.az.deleteBlob

`Type: object`

Defines parameters of the deleteBlob command type used to remove a blob.

## storage.urlExpires

`Type: integer`   `Default: 604800`

Defines the time when the URL to the S3 AWS document storage expires (measured in milliseconds).

## storage.accessKeyId

`Type: string`   `Default: ""`

Defines a key ID to access the S3 AWS document storage or MS Azure Blob Storage.

## storage.secretAccessKey

`Type: string`   `Default: ""`

Defines a secret key to access the S3 AWS document storage or MS Azure Blob Storage.

:::warning
Do not store sensitive values in version control. Consider using environment variables or a secrets manager.
:::

## storage.sslEnabled

`Type: boolean`   `Default: false`

Defines if SSL of the S3 AWS document storage is enabled or not.

## storage.s3ForcePathStyle

`Type: boolean`   `Default: true`

Defines if the requests to the S3 AWS document storage always use path style addressing.

## storage.externalHost

`Type: string`   `Default: ""`

Defines an external host which is used instead of the host specified in the request.

## storage.useDirectStorageUrls

`Type: boolean`   `Default: false`

Defines the issuance of links to an external storage: direct links or links that are proxied through the Document Server. Setting this parameter to `true` enables direct links, while the `false` value allows using internal links (the server proxies requests to the storage).

## Example

```json
{
  "storage": {
    "name": "storage-fs",
    "fs": {
      "folderPath": "",
      "urlExpires": 900,
      "secretString": "verysecretstring"
    },
    "region": "",
    "endpoint": "http://localhost/s3",
    "bucketName": "cache",
    "storageFolderName": "files",
    "cacheFolderName": "data",
    "commandOptions": {
      "s3": {
        "putObject": {},
        "getObject": {},
        "copyObject": {
          "MetadataDirective": "COPY"
        },
        "listObjects": {
          "MaxKeys": 1000
        },
        "deleteObject": {}
      },
      "az": {
        "uploadData": {},
        "uploadStream": {},
        "download": {},
        "syncCopyFromURL": {},
        "listBlobsFlat": {
          "maxPageSize": 1000
        },
        "deleteBlob": {}
      }
    },
    "urlExpires": 604800,
    "accessKeyId": "",
    "secretAccessKey": "",
    "sslEnabled": false,
    "s3ForcePathStyle": true,
    "externalHost": "",
    "useDirectStorageUrls": false
  }
}
```

