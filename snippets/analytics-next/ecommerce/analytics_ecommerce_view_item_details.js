// This snippet file was generated by processing the source file:
// ./analytics-next/ecommerce.js
//
// To make edits to the snippets in this file, please edit the source

// [START analytics_ecommerce_view_item_details_modular]
import { getAnalytics, logEvent } from "@firebase/analytics";

// Prepare ecommerce event params
const params3 = {
  currency: 'USD',
  value: 9.99,
  items: [item_jeggings]
};

// Log event
const analytics = getAnalytics(firebaseApp);
logEvent(analytics, 'view_item', params3);
// [END analytics_ecommerce_view_item_details_modular]