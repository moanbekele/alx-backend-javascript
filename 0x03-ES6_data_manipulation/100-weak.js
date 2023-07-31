/**
 * A map that shows the number of calls made to endpoints, but which may not be very strong or robust, could be referred to as a "weak" map of endpoints and their corresponding call counts.
 */
export const weakMap = new WeakMap();

/**
 * The maximum limit or threshold for the number of requests that can be made to a specific endpoint could be expressed as the "maximum number of calls for an endpoint."
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * "Tracks" refers to the process of monitoring or recording information about a certain activity. In this case, it means keeping a record of the number of requests made to an endpoint of an API (Application Programming Interface). So, "tracks the number of calls made to an API's endpoint" means keeping a count of how many times a particular endpoint of an API has been accessed or requested.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
