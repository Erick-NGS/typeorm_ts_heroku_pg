if (process.env.NODE_ENV === "DEV") {
  config = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
      "src/models/**/*.ts"
    ],
    "migrations": [
      "src/database/migrations/**/*.ts"
    ],
    "cli": {
      "migrationsDir": [
        "src/database/migrations/"
      ],
      "entitiesDir": "src/models"
    }
  }
} else {
  config = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
      "dist/models/**/*.js"
    ],
    "migrations": [
      "dist/database/migrations/**/*.js"
    ],
    "cli": {
      "migrationsDir": [
        "src/database/migrations/"
      ],
      "entitiesDir": "src/models"
    }
  }

}

module.exports = config;



