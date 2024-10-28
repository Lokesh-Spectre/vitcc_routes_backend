# [<BACK](../README.md)
# Routes Update API Documentation

## Overview
This document describes the API endpoint for updating route information in the application. The endpoint processes a list of routes, clears existing routes, and inserts new ones along with their associated stops.

## Endpoint
**POST** `/updateRoutes`

## Request Body
The request body should contain an array of route objects with the following structure:

### Route Object Structure
```json
{
    "routeNo": "string",
    "routeId": "string",
    "name": "string",
    "type": "string",
    "stops": [
        {
            "name": "string",
            "lat": "number",
            "long": "number"
        }
    ],
    "startPoint": "optional string",
    "destination": "optional string"
}
```

### Example Request Body
```json
[
    {
        "routeNo": "9A",
        "routeId": "505",
        "name": "Poonamalle",
        "type": "NONAC",
        "stops": [
            {
                "name": "Karayanchavadi",
                "lat": 13.047380628699885,
                "long": 80.109635553246
            },
            {
                "name": "Porur",
                "lat": 13.036237000868617,
                "long": 80.14912287676385
            },
            {
                "name": "Gerugambakkam",
                "lat": 13.011599342507768,
                "long": 80.1288963376111
            },
            // Additional stops...
            {
                "name": "VIT CHENNAI",
                "lat": 12.840561042795008,
                "long": 80.15310348748496
            }
        ]
    }
]
```

## Response
### Success
- **Status Code**: 200
- **Body**: `"ROUTES ARE UPDATED SUCCESSFULLY"`

### Error
- **Status Code**: 500
- **Body**: `"ERROR UPDATING DATA"`
- **Error Message**: The console will log the error details for debugging.

## Implementation Notes
- The endpoint clears all existing routes from the database before processing the new routes.
- It uses the `getPolygon` utility to compute the geometry of the route based on the stops.
- Error handling is implemented to catch and log any issues that arise during the process.

## Example of Error Logging
If an error occurs, the following will be logged to the console:
```
ERROR UPDATING DATA
[Error Message]
STACK:
[Error Stack]
```

## Additional Information
- Consider implementing input validation to ensure the integrity of the incoming data.
- Use a logging library (like `winston`) for better management of error logs.

This documentation provides a concise overview of the route update functionality, its expected input and output, and implementation details for further enhancement.