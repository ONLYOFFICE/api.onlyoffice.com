import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Delete an API Key

This example demonstrates how to delete an existing API key in ONLYOFFICE DocSpace by its unique identifier (UUID). Use this operation to revoke a key that is no longer needed or compromised.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/delete-api-key.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/delete-api-key.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set your DocSpace portal URL and access token
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with authorization token
  const HEADERS = {
    Authorization: API_KEY,
  };

  // Step 1: Delete the API key by ID
  function deleteApiKey(keyId) {
    const url = `${API_HOST}/api/2.0/keys/${keyId}`;

    return fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`API key deletion failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .then((data) => {
        if (data?.response === true) {
          console.log('API key deleted successfully.');
        }
      })
      .catch((err) => {
        console.log(`API key deletion error: ${err.message}`);
      });
  }

  // Run the method
  deleteApiKey('your_key_uuid');
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set your DocSpace portal URL and access token
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with authorization token
  HEADERS = {
    'Authorization': API_KEY
  }

  # Step 1: Delete the API key by ID
  def delete_api_key(key_id):
    url = f'{API_HOST}/api/2.0/keys/{key_id}'
    response = requests.delete(url, headers=HEADERS)

    if response.status_code == 200 and response.json().get('response') is True:
      print('API key deleted successfully.')
    else:
      print(f"API key deletion failed. Status code: {response.status_code}, Message: {response.text}")

  # Run the method
  if __name__ == '__main__':
    delete_api_key('your_key_uuid')
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A DELETE request is sent to [/api/2.0/keys/:keyId](/docspace/api-backend/usage-api/delete-api-key) using the UUID of the key.

If successful, the API responds with:

- `response: true` — confirming that the key has been deleted.

This operation is typically used to revoke API keys that are no longer needed or that may have been compromised.