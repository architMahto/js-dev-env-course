export const schema = {
  // the type of schema is an object
  "type": "object",
  // the object has a set of properties
  "properties": {
    // 'users' is the first property
    "users": {
      // the type of this property is an array
      "type": "array",
      // the minimum number of items in an array
      "minItems": 3,
      // the maximum number of items in an array
      "maxItems": 5,
      // 'items' defines the shape of the items in the array
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            // the value of the property should not be duplicated in another item
            "unique": true,
            // the minimum value of the property
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            // the faker library is used
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        // 'required' specifies the list of properties that are required
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};
