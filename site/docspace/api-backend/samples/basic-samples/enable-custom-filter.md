import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Enable custom filter mode for a file

This example demonstrates how to enable the Custom Filter mode for a specific file in ONLYOFFICE DocSpace using the API. The Custom Filter feature allows you to restrict spreadsheet views so that users only see their own applied filters.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/enable-custom-filter.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/enable-custom-filter.py)

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
  const FILE_ID = 123456; // Replace with your actual file ID

  // Headers with authorization token
  const headers = { Authorization: API_KEY };

  // Step 1: Enable Custom Filter mode
  function enableCustomFilter(fileId) {
    const payload = { enabled: true };

    return fetch(`${API_HOST}/api/2.0/files/file/${fileId}/customfilter`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          console.log(`Custom Filter enabling failed. Status code: ${res.status}, Message: ${t}`);
          return null;
        });
      })
      .then((data) => {
        const result = data?.response || {};
        console.log(`Custom Filter enabled for file ID ${fileId}`);
        console.log(`• Title: ${result.title}`);
        console.log(`• View URL: ${result.webUrl || result.viewUrl}`);
        console.log(`• Filter Enabled By: ${result.customFilterEnabledBy}`);
        return result;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  // Run the method
  console.log('Enabling Custom Filter mode...');
  enableCustomFilter(FILE_ID);
  ```
  
  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set your DocSpace portal URL and access token
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'
  FILE_ID = 123456  # Replace with your actual file ID

  # Headers with authorization token
  headers = {'Authorization': API_KEY}

  # Step 1: Enable Custom Filter mode
  def enable_custom_filter(file_id):
    payload = { 'enabled': True }
    response = requests.put(
      f'{API_HOST}/api/2.0/files/file/{file_id}/customfilter',
      headers=headers,
      json=payload
    )

    if response.status_code == 200:
      result = response.json().get('response', {})
      print(f'Custom Filter enabled for file ID {file_id}')
      print(f'• Title: {result.get('title')}')
      print(f'• View URL: {result.get('webUrl') or result.get('viewUrl')}')
      print(f'• Filter Enabled By: {result.get('customFilterEnabledBy')}')
    else:
      print(f"Custom Filter enabling failed. Status code: {response.status_code}, Message: {response.text}")

  # Run the method
  if __name__ == '__main__':
    print('Enabling Custom Filter mode...')
    enable_custom_filter(FILE_ID)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to [/api/2.0/files/file/:fileId/customfilter](/docspace/api-backend/usage-api/get-all-permissions) with the following payload:

- `enabled: true` — turns on Custom Filter mode for the specified file.

The response contains file metadata, including:
- `title`: Document title
- `webUrl`: Direct view link
- `customFilterEnabledBy`: User ID who applied the filter