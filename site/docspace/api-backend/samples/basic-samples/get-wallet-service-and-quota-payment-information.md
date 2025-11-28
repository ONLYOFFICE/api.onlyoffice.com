import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get wallet service and current quota payment information

This example demonstrates how to retrieve wallet service details and payment information for the current portal quota in ONLYOFFICE DocSpace. You can use it in support or back-office tools to quickly see which wallet service is used and what payment parameters apply to the current quota.

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

  // Step 1: Get wallet service
  async function getWalletService(serviceType) {
    const url = new URL(`${BASE_URL}/api/2.0/portal/payment/walletservice`);
    url.searchParams.set('service', serviceType);

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      return json.response || json;
    }

    const text = await res.text();
    console.log('Failed to get wallet service:', res.status, text);
    return null;
  }

  // Step 2: Get payment information about the current portal quota
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
      return json.response || json;
    }

    const text = await res.text();
    console.log('Failed to get quota payment information:', res.status, text);
    return null;
  }

  // Example usage
  (async () => {
    // Example service type – replace with a real wallet service type
    const walletServiceType = 'wallet-service-type';

    const walletService = await getWalletService(walletServiceType);
    const quotaInfo = await getCurrentQuotaPaymentInformation(false);

    console.log('Wallet service:', walletService);
    console.log('Current quota payment information:', quotaInfo);
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

  # Step 1: Get wallet service
  def get_wallet_service(service_type):
    url = f"{BASE_URL}/api/2.0/portal/payment/walletservice"
    params = {"service": service_type}

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      return data.get("response", data)

    print(
        "Failed to get wallet service:",
        response.status_code,
        response.text,
    )
    return None

  # Step 2: Get payment information about the current portal quota
  def get_current_quota_payment_information(refresh=False):
    url = f"{BASE_URL}/api/2.0/portal/payment/quota"

    params = {}
    if refresh:
      params["refresh"] = "true"

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      return data.get("response", data)

    print(
        "Failed to get quota payment information:",
        response.status_code,
        response.text,
    )
    return None

  if __name__ == "__main__":
    # Example service type – replace with a real wallet service type
    wallet_service_type = "wallet-service-type"

    wallet_service = get_wallet_service(wallet_service_type)
    quota_info = get_current_quota_payment_information(refresh=False)

    print("Wallet service:", wallet_service)
    print("Current quota payment information:", quota_info)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get wallet service details

A GET request is sent to [/api/2.0/portal/payment/walletservice](/docspace/api-backend/usage-api/get-wallet-service) with the `service` query parameter to return the specified wallet service.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getWalletService(serviceType) {
    const url = new URL(`${BASE_URL}/api/2.0/portal/payment/walletservice`);
    url.searchParams.set('service', serviceType);

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      return json.response || json;
    }

    const text = await res.text();
    console.log('Failed to get wallet service:', res.status, text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_wallet_service(service_type):
    url = f"{BASE_URL}/api/2.0/portal/payment/walletservice"
    params = {"service": service_type}

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      return data.get("response", data)

    print(
        "Failed to get wallet service:",
        response.status_code,
        response.text,
    )
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Get payment information for a selected quota

A GET request is sent to [/api/2.0/portal/payment/quota](/docspace/api-backend/usage-api/get-quota-payment-information) to return payment information about the current portal quota.

Query parameters:

- `refresh`: specifies whether to refresh the payment information cache:

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  def get_current_quota_payment_information(refresh=False):
    url = f"{BASE_URL}/api/2.0/portal/payment/quota"

    params = {}
    if refresh:
      params["refresh"] = "true"

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      return data.get("response", data)

    print(
        "Failed to get quota payment information:",
        response.status_code,
        response.text,
    )
    return None
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_current_quota_payment_information(refresh=False):
    url = f"{BASE_URL}/api/2.0/portal/payment/quota"

    params = {}
    if refresh:
      params["refresh"] = "true"

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      return data.get("response", data)

    print(
        "Failed to get quota payment information:",
        response.status_code,
        response.text,
    )
    return None
  ```

  </TabItem>
</Tabs>