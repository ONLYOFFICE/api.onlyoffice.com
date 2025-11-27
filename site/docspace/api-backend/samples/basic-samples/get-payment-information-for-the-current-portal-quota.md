import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get payment information for the current portal quota

This example demonstrates how to retrieve payment information for the current portal quota in ONLYOFFICE DocSpace using the API. It can be used in a custom billing dashboard to display the current plan details, pricing, and billing parameters before upgrading or changing the quota.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };

  // Get payment information about the current portal quota
  async function getCurrentQuotaPaymentInformation(refresh = false) {
    const url = new URL(`${BASE_URL}/api/2.0/portal/payment/quota`);

    if (refresh) {
      url.searchParams.set('refresh', 'true');
    }

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const info = json.response || json;
      console.log('Current quota payment information:');
      console.log(info);
      return info;
    }

    const text = await res.text();
    console.log(
      'Failed to get quota payment information:',
      res.status,
      text
    );
    return null;
  }

  // Example usage
  (async () => {
    // Get cached payment information
    await getCurrentQuotaPaymentInformation(false);

    // Optionally, refresh the payment information cache
    // await getCurrentQuotaPaymentInformation(true);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
  }

  # Get payment information about the current portal quota
  def get_current_quota_payment_information(refresh=False):
    url = f"{BASE_URL}/api/2.0/portal/payment/quota"

    params = {}
    if refresh:
      params["refresh"] = "true"

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Current quota payment information:")
      print(info)
      return info

    print(
        "Failed to get quota payment information:",
        response.status_code,
        response.text,
    )
    return None

  if __name__ == "__main__":
    # Get cached payment information
    get_current_quota_payment_information(refresh=False)

    # Optionally, refresh the payment information cache
    # get_current_quota_payment_information(refresh=True)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/portal/payment/quota](/docspace/api-backend/usage-api/get-quota-payment-information) to return payment information about the current portal quota.

You can control whether the information is taken from cache or refreshed using the `refresh` query parameter:

- `refresh=false`: use cached payment information.
- `refresh=true`: force the server to refresh the payment information before returning it.
