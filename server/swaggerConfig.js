const swaggerConfig = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Check It Out API",
        version: "1.0.0",
        description:
          "API for Check It Out Application",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/"
        },
      },
      servers: [
        {
          url: "http://localhost:8080/api"
        }
      ]
    },
    apis: [
      "./server/models/userModel.js", 
      "./server/routes/userRoutes.js"
    ]
  };

module.exports = swaggerConfig;