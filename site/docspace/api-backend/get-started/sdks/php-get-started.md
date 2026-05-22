---
sidebar_position: -4
---

# PHP

The ONLYOFFICE DocSpace SDK for PHP is a library that provides tools for integrating and managing DocSpace features within your applications.

It simplifies interaction with the DocSpace API by offering ready-to-use methods and models.

**[ONLYOFFICE PHP Library on GitHub](https://github.com/ONLYOFFICE/docspace-api-sdk-php)**

## Installation & Usage

The SDK is available on [Packagist](https://packagist.org/packages/onlyoffice/docspace-api-sdk).

### Requirements

PHP 8.1 and later.

### Using Packagist (recommended)

Run the following command in your project directory:
```bash
composer require onlyoffice/docspace-api-sdk
```

### Using the GitHub repository

To install directly from the [GitHub repository](https://github.com/ONLYOFFICE/docspace-api-sdk-php), add the following to your `composer.json`:
```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/ONLYOFFICE/docspace-api-sdk-php"
    }
  ],
  "require": {
    "onlyoffice/docspace-api-sdk": "*@dev"
  }
}
```

Then run:
```bash
composer install
```

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/onlyoffice/docspace-api-sdk/vendor/autoload.php');
```

## Getting Started

Once you have installed the SDK (via Packagist or GitHub repository) and set up autoloading, you can run the following example to create a folder by using the SDK:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure API key authorization: asc_auth_key
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('asc_auth_key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('asc_auth_key', 'Bearer');


$foldersInstance = new OpenAPI\Client\Files\FoldersApi(
    new GuzzleHttp\Client(),
    $config
);

try {
	$myFolder = $foldersInstance->getMyFolder(null, null, null, 100, 0, null, null, null);
	$myFolderId = $myFolder->getResponse()->getCurrent()->getId();

	$createDto = new \OpenAPI\Client\Model\CreateFolder();
	$createDto->setTitle("TestTitle");
    $result = $foldersInstance->createFolder($myFolderId, $createDto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoldersApi->createFolder: ', $e->getMessage(), PHP_EOL;
}

```
