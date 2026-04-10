---
sidebar_position: -2
---

# Python

The ONLYOFFICE DocSpace SDK for Python is a library that provides tools for integrating and managing DocSpace features within your applications.

It simplifies interaction with the DocSpace API by offering ready-to-use methods and models.

**[ONLYOFFICE Python Library on GitHub](https://github.com/ONLYOFFICE/docspace-api-sdk-python)**

## Requirements

Python 3.9+

## Installation & Usage
### Using pip

Install the package directly from [PyPI](https://pypi.org/project/docspace-api-sdk/):

```bash
pip install docspace-api-sdk
```

If the Python package is hosted in a repository, you can install it directly using:

```bash
pip install git+https://github.com/ONLYOFFICE/docspace-api-sdk-python.git
```

### Using setuptools

Alternatively, you can install the package using [setuptools](https://pypi.python.org/pypi/setuptools):

```bash
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
from docspace_api_sdk import Configuration, ApiClient, FoldersApi
from docspace_api_sdk.models.create_folder import CreateFolder
from docspace_api_sdk.rest import ApiException
from pprint import pprint
import os

# Configure Bearer authorization (JWT): Bearer
configuration = docspace_api_sdk.Configuration(
    host = "https://your-docspace.onlyoffice.com",
    access_token = os.environ["BEARER_TOKEN"]
)


# Enter a context with an instance of the API client
with docspace_api_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    folder_instance = FoldersApi(api_client)
    get_folder_my = folder_instance.get_my_folder()
    folder_my_id = get_folder_my.response.current.id
    folder_data = CreateFolder(title="ExampleTitle")

    try:
        # Create a folder
        create_folder = folder_instance.create_folder(folder_id=folder_my_id, create_folder=folder_data)
        print("The response of FoldersApi->create_folder:\n")
        pprint(create_folder)
    except ApiException as e:
        print("Exception when calling FoldersApi->create_folder: %s\n" % e)

```
