---
sidebar_position: -5
---

# Java

The ONLYOFFICE DocSpace SDK for Java is a library that provides tools for integrating and managing DocSpace features within your applications.

It simplifies interaction with the DocSpace API by offering ready-to-use methods and models.

**[ONLYOFFICE Java Library on GitHub](https://github.com/ONLYOFFICE/docspace-api-sdk-java)**

## Requirements

Building the API client library requires:

1. Java 1.8+
2. Maven/Gradle

## Installation

The SDK is hosted on [Maven Central](https://central.sonatype.com/artifact/com.onlyoffice/docspace-api-sdk).

### Using Maven (recommended)

Add the dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>com.onlyoffice</groupId>
    <artifactId>docspace-api-sdk</artifactId>
    <version>1.0.0</version> <!-- replace with the latest version from Maven Central -->
</dependency>
```

## Getting Started

Once you have Java 1.8+ installed and added the SDK dependency (via Maven or Gradle), you can create an instance of the API client and call DocSpace endpoints.

```java
import org.openapitools.client.*;
import org.openapitools.client.auth.*;
import org.openapitools.client.model.*;
import org.openapitools.client.Files.FoldersApi;

public class FoldersApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://your-docspace.onlyoffice.com");
        
        // Configure API key authorization: asc_auth_key
        ApiKeyAuth asc_auth_key = (ApiKeyAuth) defaultClient.getAuthentication("asc_auth_key");
        asc_auth_key.setApiKey("YOUR API KEY");

        FoldersApi foldersApi = new FoldersApi(defaultClient);

        FolderContentIntegerWrapper myFolder = foldersApi.getMyFolder(null, null, null, 100, 0, null, null, null);
        Integer myFolderId = myFolder.getResponse().getCurrent().getId();
        
        CreateFolder createDto = new CreateFolder();
        createDto.setTitle("TestTitle");

        try {
            FolderIntegerWrapper result = foldersApi.createFolder(myFolderId, createDto);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FoldersApi#createFolder");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```
