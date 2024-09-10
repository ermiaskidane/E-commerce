## Setup Wix Studio headless

Implement the backend with wix Studio for e-commerce is fast and ready to use well stracture Schemas. To set up go to [Go-Headless](https://dev.wix.com/docs/go-headless) follow the [setup](https://dev.wix.com/docs/go-headless/getting-started/setup/general-setup/create-a-project) on the side menu.

Steps to fetch Data

- To fetch data from the wix follow [javaScript-SDK](https://dev.wix.com/docs/go-headless/coding/java-script-sdk/visitors-and-members/create-a-client-with-oauth)

```bash
npm install @wix/sdk
npm install @wix/stores
```

- create context for wixContext sothat we can wrap every part of our app with it

  ```bash
    const myWixClient = createClient({
    modules: {
      products,
      services
    },
    auth: OAuthStrategy({
      clientId: '<YOUR_CLIENT_ID>',
      tokens: {
        accessToken: {
          value: '<ACCESS_TOKEN_VALUE>',
          expiresAt: <ACCESS_TOKEN_EXPIRY_DATE>

        },
        refreshToken: {
          value: '<REFRESH_TOKEN_VALUE>'
        }
      }
    })
  })
  ```

- head over to [setting](https://manage.wix.com/dashboard/<Your-Dashboard-ID>/settings?referralInfo=sidebar) then go to `headless-settings` click the `Create OAuth App` then fetch your `clientId` there.

- `npm install js-cookie` and `npm i isomorphic-dompurify`
- To implement the head over to [WIX-SDK](https://dev.wix.com/docs/sdk/backend-modules/stores/products/introduction)

- Authentication in wixHeadless can be done in [setting](https://manage.wix.com/dashboard/<Your-Dashboard-ID>/oauth-apps-settings) click 3 points followed the `setting` then which you fill the `Allowed direct domain and Allowed authorization redirect URIs`
- continoue to [JavaScript-SDK](https://dev.wix.com/docs/go-headless/coding/java-script-sdk/visitors-and-members/handle-members-with-custom-login)

- utilize [currentCart](https://dev.wix.com/docs/sdk/backend-modules/ecom/current-cart/setup) to work with our cart modals

## Wix Payment setup

First upgrade the wix studio to premium plan so that owners can sell products.

- choose the `WEB` channel from [createCheckoutFromCurrentCart](https://dev.wix.com/docs/sdk/backend-modules/ecom/current-cart/create-checkout-from-current-cart) as we utilize in `/src/components/CartModal.tsx`
- After client use the checkout payment, need redirect [redirect](https://dev.wix.com/docs/sdk/backend-modules/redirects/redirects/create-redirect-session) but need to install `npm install @wix/redirects` before then pass to `createClient` of the `@wix/sdk` inside `src/context/wixContext.tsx`
- To get current [User](https://dev.wix.com/docs/sdk/backend-modules/members/members/get-current-member) and Order history utilize [Order](https://dev.wix.com/docs/sdk/backend-modules/ecom/orders/get-order)

- To get the review we can follow [review](https://dev.wix.com/docs/sdk/backend-modules/reviews/introduction) but it is under developer preview so head over to [resources](https://manage.wix.com/app-market?referral=my-account-header) menu of the dashboard and choose `App Market`
  - search for `reviews` choose with high rating add it and find it [wix-manage-dashboard](https://manage.wix.com/dashboard/<Your-Dashboard-ID>/fera-product-reviews?referralInfo=sidebar) in the apps menu
- Get the `API_KEY` from [setting](https://manage.wix.com/dashboard/<Your-Dashboard-ID>/fera-product-reviews?referralInfo=sidebar)
- This `review` package got private api and public api. Utilize private if to implement inside the website, if to sending by email utilize the public api.
- Get the `reviews` docs [here](https://developers.fera.ai/reference/list-reviews-1)
