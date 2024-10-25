# [<BACK](../README.md)
# Routes Controller API Documentation

## Overview
This document describes the API endpoints for managing routes in the application. It allows retrieval of all routes, retrieval of a specific route by its number, and the addition of new routes along with their associated stops.

## Base Route
**/routes**

## Endpoints

### 1. Get All Routes
**GET** `/routes`

#### Description
Retrieves all routes along with their associated stops.

#### Response
- **Status Code**: 200
- **Body**: An array of route objects with their stops.

#### Example Response
```json
[
    {
        "routeNo": "9A",
        "routeId": "505",
        "name": "Poonamalle",
        "type": "NONAC",
        "startPoint": "Karayanchavadi",
        "geometry": {...},
        "stops": [
            {
                "name": "Karayanchavadi",
                "lat": 13.047380628699885,
                "long": 80.109635553246
            },
            // Additional stops...
        ]
    }
]
```

### 2. Get Specific Route
**GET** `/routes/:id`

#### Parameters
- `id` (string): The route number to retrieve.

#### Description
Retrieves a specific route based on the provided route number.

#### Response
- **Status Code**: 
  - 200 if the route is found
  - 401 if the route number is not found

#### Example Response (Success)
```json
{
    "routeNo": "9A",
    "routeId": "505",
    "name": "Poonamalle",
    "type": "NONAC",
    "startPoint": "Karayanchavadi",
    "geometry": {...},
    "stops": [
        {
            "name": "Karayanchavadi",
            "lat": 13.047380628699885,
            "long": 80.109635553246
        },
        // Additional stops...
    ]
}
```

#### Example Response (Error)
```json
{
    "message": "Route no not found"
}
```

### 3. Add New Route
**POST** `/routes`

#### Request Body
The request body should contain the following structure for the new route:

```json
{
    "routeNo": "string",
    "routeId": "string",
    "name": "string",
    "type": "string",
    "startPoint": "string",
    "stops": [
        {
            "name": "string",
            "lat": "number",
            "long": "number"
        }
    ]
}
```

#### Example Request Body
```json
{
    "routeNo": "9A",
    "routeId": "505",
    "name": "Poonamalle",
    "type": "NONAC",
    "startPoint": "Karayanchavadi",
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
        // Additional stops...
    ]
}
```

#### Response
- **Status Code**: 200
- **Body**: A success message.

#### Example Response
```json
{
    "message": "route added successfully"
}
```

## Implementation Notes
- The endpoints handle the retrieval and addition of routes and their associated stops.
- When adding a new route, the destination is set to a default value if not provided.
- The `getPolygon` utility is called to compute the geometry of the route based on the stops.

## Additional Information
- Ensure that the incoming request data adheres to the expected structure to prevent errors during processing.
- Consider implementing input validation to enhance data integrity and application stability. 

This documentation provides a detailed overview of the routes management functionality, outlining expected inputs, outputs, and example data for easier integration and use.