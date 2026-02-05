---
sidebar_position: -4
---

# Python

The ONLYOFFICE DocSpace SDK for Python is a library that provides tools for integrating and managing DocSpace features within your applications.

It simplifies interaction with the DocSpace API by offering ready-to-use methods and models.

**[ONLYOFFICE Python Library on GitHub](https://github.com/ONLYOFFICE/docspace-api-sdk-python)**

## Requirements

Python 3.9+

## Installation & Usage
### Using pip

If the Python package is hosted in a repository, you can install it directly using:

```sh
pip install git+https://github.com/ONLYOFFICE/docspace-api-sdk-python.git
```

If required, run with root permissions:

```bash
sudo pip install git+https://github.com/ONLYOFFICE/docspace-api-sdk-python.git
```

Then import the package:
```python
import docspace_api_sdk
```

### Using setuptools

Alternatively, you can install the package using [setuptools](http://pypi.python.org/pypi/setuptools):

```sh
python setup.py install --user
```

To install the package for all users, run the following command:

```bash
sudo python setup.py install
```

Then import the package:
```python
import docspace_api_sdk
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import docspace_api_sdk
from docspace_api_sdk.rest import ApiException
from pprint import pprint

configuration = docspace_api_sdk.Configuration(
    host = "https://your-docspace.onlyoffice.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = docspace_api_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)


# Enter a context with an instance of the API client
with docspace_api_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = docspace_api_sdk.ApiKeysApi(api_client)
    create_api_key_request_dto = docspace_api_sdk.CreateApiKeyRequestDto() # CreateApiKeyRequestDto |  (optional)

    try:
        # Create a user API key
        api_response = api_instance.create_api_key(create_api_key_request_dto=create_api_key_request_dto)
        print("The response of ApiKeysApi->create_api_key:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ApiKeysApi->create_api_key: %s\n" % e)

```
