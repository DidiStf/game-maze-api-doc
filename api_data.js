define({ "api": [
  {
    "type": "post",
    "url": "/api/comments/create",
    "title": "Add Comment",
    "version": "1.0.0",
    "name": "AddComment",
    "group": "Comments",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "documentation/comments.js",
    "groupTitle": "Comments",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"content\":\"Really love this game.\",\n  \"game\": \"5f8305ee5d7dce5a88142c43\",\n  \"title\": \"Awesome Game\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The Comment's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the comment information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the comment information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"_id\": \"5f8475e197f7c853443fc989\",\n \"author\": \"5f7a43c38506ae29609f1dba\",\n \"content\": \"Really love this game.\",\n \"game\": \"5f8305ee5d7dce5a88142c43\",\n \"title\": \"Awesome Game\",\n \"createdAt\": \"2020-10-12T15:27:29.056Z\",\n \"updatedAt\": \"2020-10-12T15:27:29.056Z\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing required params: game or title</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a game with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Comment Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Game is required.\",\n       \"param\": \"game\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Title is required.\",\n       \"param\": \"title\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Game Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Game not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/comments/delete",
    "title": "Delete Comment",
    "version": "1.0.0",
    "name": "DeleteComment",
    "group": "Comments",
    "permission": [
      {
        "name": "private, admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Confirmation message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"message\": \"Comment deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/comments.js",
    "groupTitle": "Comments",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Comment's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "author",
            "description": "<p>Author's object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author._id",
            "description": "<p>Author's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author.avatar",
            "description": "<p>Author's avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author.username",
            "description": "<p>Author's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the comment information was added</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the comment information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"id\": \"5f8475e197f7c853443fc989\",\n \"author\": {\n      \"id\": \"5f7a43c38506ae29609f1dba\",\n      \"avatar\": \"1\",\n      \"username\": \"user1\"\n  },\n \"content\": \"Really love this game.\",\n \"game\": \"5f8305ee5d7dce5a88142c43\",\n \"title\": \"Awesome Game\",\n \"createdAt\": \"2020-10-12T15:27:29.056Z\",\n \"updatedAt\": \"2020-10-12T15:27:29.056Z\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a game with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Authorized Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Not authorized\"\n}",
          "type": "json"
        },
        {
          "title": "Game Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Game not found\"\n}",
          "type": "json"
        },
        {
          "title": "Comment Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Comment not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/comments/:id",
    "title": "Get All Comments By Game",
    "version": "1.0.0",
    "name": "GetComments",
    "group": "Comments",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Game's ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://game-maze.herokuapp.com/api/comments/5f8305ee5d7dce5a88142c43",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comments",
            "description": "<p>List of all game's comments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n[\n {\n  \"_id\": \"5f84765397f7c853443fc98a\",\n  \"author\": {\n      \"_id\": \"5f8474c497f7c853443fc988\",\n      \"avatar\": \"2\",\n      \"username\": \"user2\"\n  },\n  \"content\": \"Me too\",\n  \"game\": \"5f8305ee5d7dce5a88142c43\",\n  \"title\": \"Best Game Ever\",\n  \"createdAt\": \"2020-10-12T15:29:23.977Z\",\n  \"updatedAt\": \"2020-10-12T15:29:23.977Z\",\n  \"__v\": 0\n },\n {\n  \"_id\": \"5f8475e197f7c853443fc989\",\n  \"author\": {\n      \"_id\": \"5f7a43c38506ae29609f1dba\",\n      \"avatar\": \"1\",\n      \"username\": \"user1\"\n  },\n  \"content\": \"Really love this game.\",\n  \"game\": \"5f8305ee5d7dce5a88142c43\",\n  \"title\": \"Awesome Game\",\n  \"createdAt\": \"2020-10-12T15:27:29.056Z\",\n  \"updatedAt\": \"2020-10-12T15:27:29.056Z\",\n  \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/comments.js",
    "groupTitle": "Comments",
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/comments/update",
    "title": "Update Comment",
    "version": "1.0.0",
    "name": "UpdateComment",
    "group": "Comments",
    "permission": [
      {
        "name": "private"
      }
    ],
    "filename": "documentation/comments.js",
    "groupTitle": "Comments",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Comment's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "author",
            "description": "<p>Author's object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author._id",
            "description": "<p>Author's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author.avatar",
            "description": "<p>Author's avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author.username",
            "description": "<p>Author's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the comment information was added</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the comment information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"id\": \"5f8475e197f7c853443fc989\",\n \"author\": {\n      \"id\": \"5f7a43c38506ae29609f1dba\",\n      \"avatar\": \"1\",\n      \"username\": \"user1\"\n  },\n \"content\": \"Really love this game.\",\n \"game\": \"5f8305ee5d7dce5a88142c43\",\n \"title\": \"Awesome Game\",\n \"createdAt\": \"2020-10-12T15:27:29.056Z\",\n \"updatedAt\": \"2020-10-12T15:27:29.056Z\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The Comment's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the comment information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the comment information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"_id\": \"5f8475e197f7c853443fc989\",\n \"author\": \"5f7a43c38506ae29609f1dba\",\n \"content\": \"Really love this game.\",\n \"game\": \"5f8305ee5d7dce5a88142c43\",\n \"title\": \"Awesome Game\",\n \"createdAt\": \"2020-10-12T15:27:29.056Z\",\n \"updatedAt\": \"2020-10-12T15:27:29.056Z\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing required params: game or title</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a game with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Comment Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Game is required.\",\n       \"param\": \"game\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Title is required.\",\n       \"param\": \"title\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "User Not Authorized Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Not authorized\"\n}",
          "type": "json"
        },
        {
          "title": "Game Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Game not found\"\n}",
          "type": "json"
        },
        {
          "title": "Comment Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Comment not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/games/create",
    "title": "Add Game",
    "version": "1.0.0",
    "name": "AddGame",
    "group": "Games",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "documentation/games.js",
    "groupTitle": "Games",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "developer",
            "description": "<p>Developer</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "genres",
            "description": "<p>List of game's genres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>List of game's platforms</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date when the game was released</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trailerUrl",
            "description": "<p>Trailer URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"title\": \"Ori And The Blind Forest\",\n   \"description\": \"Ori and the Blind Forest is a 2D platform game...\",\n   \"genres\": [\n      \"platformer\",\n      \"adventure\"\n     ],\n   \"platforms\": [\n      \"PC\",\n      \"Xbox\",\n      \"Switch\"\n    ],\n   \"developer\": \"Moon Studios\",\n   \"publisher\": \"Microsoft Studios\",\n   \"releaseDate\": \"2015-03-11T00:00:00.283Z\",\n   \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg\",\n   \"trailerUrl\": \"https://www.youtube.com/watch?v=cklw-Yu3moE\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The Game's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "averageRating",
            "description": "<p>Average rating</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "developer",
            "description": "<p>Developer</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "genres",
            "description": "<p>List of game's genres</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>List of game's platforms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date when the game was released</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trailerUrl",
            "description": "<p>Trailer URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the game information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the game information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"averageRating\": 0,\n    \"genres\": [\n       \"platformer\",\n       \"adventure\"\n      ],\n    \"platforms\": [\n       \"PC\",\n       \"Xbox\",\n       \"Switch\"\n     ],\n    \"_id\": \"5f8305ee5d7dce5a88142c43\",\n    \"description\": \"Ori and the Blind Forest is a 2D platform game...\",\n    \"developer\": \"Moon Studios\",\n    \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg\",\n    \"publisher\": \"Microsoft Studios\",\n    \"releaseDate\": \"2015-03-11T00:00:00.283Z\",\n    \"trailerUrl\": \"https://www.youtube.com/watch?v=cklw-Yu3moE\",\n    \"title\": \"Ori And The Blind Forest\",\n    \"createdAt\": \"2020-10-11T13:17:34.831Z\",\n    \"updatedAt\": \"2020-10-11T13:17:34.831Z\",\n    \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing required params: genres, imageUrl, platforms or title</p>"
          }
        ],
        "Error 403": [
          {
            "group": "Error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user has no sufficiant rights to perform the operation</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Game Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Genres is required.\",\n       \"param\": \"genres\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"ImageUrl is required.\",\n       \"param\": \"imageUrl\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Platforms is required.\",\n       \"param\": \"platforms\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Title is required.\",\n       \"param\": \"title\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "No Sufficiant Rights Error Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"No sufficiant rights\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/games/delete",
    "title": "Delete Game",
    "version": "1.0.0",
    "name": "DeleteGame",
    "group": "Games",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Confirmation message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"message\": \"Game deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/games.js",
    "groupTitle": "Games",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Game's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "developer",
            "description": "<p>Developer</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "genres",
            "description": "<p>List of game's genres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>List of game's platforms</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date when the game was released</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trailerUrl",
            "description": "<p>Trailer URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"id\": \"5f8305ee5d7dce5a88142c43\",\n   \"title\": \"Ori And The Blind Forest\",\n   \"description\": \"Ori and the Blind Forest is a 2D platform game...\",\n   \"genres\": [\n      \"platformer\",\n      \"adventure\"\n     ],\n   \"platforms\": [\n      \"PC\",\n      \"Xbox\",\n      \"Switch\"\n    ],\n   \"developer\": \"Moon Studios\",\n   \"publisher\": \"Microsoft Studios\",\n   \"releaseDate\": \"2015-03-11T00:00:00.283Z\",\n   \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg\",\n   \"trailerUrl\": \"https://www.youtube.com/watch?v=cklw-Yu3moE\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 403": [
          {
            "group": "Error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user has no sufficiant rights to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a game with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Sufficiant Rights Error Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"No sufficiant rights\"\n}",
          "type": "json"
        },
        {
          "title": "Game Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Game not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/games/:id",
    "title": "Get One Game",
    "version": "1.0.0",
    "name": "GetGame",
    "group": "Games",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Game's ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://game-maze.herokuapp.com/api/games/5f8305ee5d7dce5a88142c43",
        "type": "curl"
      }
    ],
    "filename": "documentation/games.js",
    "groupTitle": "Games",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The Game's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "averageRating",
            "description": "<p>Average rating</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "developer",
            "description": "<p>Developer</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "genres",
            "description": "<p>List of game's genres</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>List of game's platforms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date when the game was released</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trailerUrl",
            "description": "<p>Trailer URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the game information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the game information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"averageRating\": 0,\n    \"genres\": [\n       \"platformer\",\n       \"adventure\"\n      ],\n    \"platforms\": [\n       \"PC\",\n       \"Xbox\",\n       \"Switch\"\n     ],\n    \"_id\": \"5f8305ee5d7dce5a88142c43\",\n    \"description\": \"Ori and the Blind Forest is a 2D platform game...\",\n    \"developer\": \"Moon Studios\",\n    \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg\",\n    \"publisher\": \"Microsoft Studios\",\n    \"releaseDate\": \"2015-03-11T00:00:00.283Z\",\n    \"trailerUrl\": \"https://www.youtube.com/watch?v=cklw-Yu3moE\",\n    \"title\": \"Ori And The Blind Forest\",\n    \"createdAt\": \"2020-10-11T13:17:34.831Z\",\n    \"updatedAt\": \"2020-10-11T13:17:34.831Z\",\n    \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a game with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Game Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Game not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/games",
    "title": "Get All Games",
    "version": "1.0.0",
    "name": "GetGames",
    "group": "Games",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "games",
            "description": "<p>List of all games</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "    HTTP/1.1 200 OK\n[\n      {\n        \"averageRating\": 0,\n        \"genres\": [\n           \"platformer\",\n           \"adventure\"\n          ],\n        \"platforms\": [\n           \"PC\",\n           \"Xbox\",\n           \"Switch\"\n         ],\n        \"_id\": \"5f8305ee5d7dce5a88142c43\",\n        \"description\": \"Ori and the Blind Forest is a 2D platform game...\",\n        \"developer\": \"Moon Studios\",\n        \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg\",\n        \"publisher\": \"Microsoft Studios\",\n        \"releaseDate\": \"2015-03-11T00:00:00.283Z\",\n        \"trailerUrl\": \"https://www.youtube.com/watch?v=cklw-Yu3moE\",\n        \"title\": \"Ori And The Blind Forest\",\n        \"createdAt\": \"2020-10-11T13:17:34.831Z\",\n        \"updatedAt\": \"2020-10-11T13:17:34.831Z\",\n        \"__v\": 0\n     },\n     {\n        \"averageRating\": 0,\n        \"genres\": [\n           \"platformer\",\n           \"adventure\"\n        ],\n        \"platforms\": [\n           \"PC\",\n           \"Xbox One\",\n           \"Xbox Series X/S\",\n           \"Switch\"\n        ],\n        \"_id\": \"5f8308395d7dce5a88142c44\",\n        \"description\": \"Ori and the Will of the Wisps is a platform-adventure Metroidvania video game...\",\n        \"developer\": \"Moon Studios\",\n        \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/en/9/94/Ori_and_the_Will_of_the_Wisps.jpg\",\n        \"publisher\": \"Xbox Game Studios\",\n        \"releaseDate\": \"2020-03-11T00:00:00.283Z\",\n        \"trailerUrl\": \"https://www.youtube.com/watch?v=uVS0GZpPq_A\",\n        \"title\": \"Ori And The Wild Wisps\",\n        \"createdAt\": \"2020-10-11T13:27:21.573Z\",\n        \"updatedAt\": \"2020-10-11T13:27:21.573Z\",\n        \"__v\": 0\n     }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/games.js",
    "groupTitle": "Games",
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/games/update",
    "title": "Update Game",
    "version": "1.0.0",
    "name": "UpdateGame",
    "group": "Games",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "documentation/games.js",
    "groupTitle": "Games",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Game's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "developer",
            "description": "<p>Developer</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "genres",
            "description": "<p>List of game's genres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>List of game's platforms</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date when the game was released</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trailerUrl",
            "description": "<p>Trailer URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"id\": \"5f8305ee5d7dce5a88142c43\",\n   \"title\": \"Ori And The Blind Forest\",\n   \"description\": \"Ori and the Blind Forest is a 2D platform game...\",\n   \"genres\": [\n      \"platformer\",\n      \"adventure\"\n     ],\n   \"platforms\": [\n      \"PC\",\n      \"Xbox\",\n      \"Switch\"\n    ],\n   \"developer\": \"Moon Studios\",\n   \"publisher\": \"Microsoft Studios\",\n   \"releaseDate\": \"2015-03-11T00:00:00.283Z\",\n   \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg\",\n   \"trailerUrl\": \"https://www.youtube.com/watch?v=cklw-Yu3moE\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The Game's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "averageRating",
            "description": "<p>Average rating</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "developer",
            "description": "<p>Developer</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "genres",
            "description": "<p>List of game's genres</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>List of game's platforms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date when the game was released</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trailerUrl",
            "description": "<p>Trailer URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the game information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the game information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"averageRating\": 0,\n    \"genres\": [\n       \"platformer\",\n       \"adventure\"\n      ],\n    \"platforms\": [\n       \"PC\",\n       \"Xbox\",\n       \"Switch\"\n     ],\n    \"_id\": \"5f8305ee5d7dce5a88142c43\",\n    \"description\": \"Ori and the Blind Forest is a 2D platform game...\",\n    \"developer\": \"Moon Studios\",\n    \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg\",\n    \"publisher\": \"Microsoft Studios\",\n    \"releaseDate\": \"2015-03-11T00:00:00.283Z\",\n    \"trailerUrl\": \"https://www.youtube.com/watch?v=cklw-Yu3moE\",\n    \"title\": \"Ori And The Blind Forest\",\n    \"createdAt\": \"2020-10-11T13:17:34.831Z\",\n    \"updatedAt\": \"2020-10-11T13:17:34.831Z\",\n    \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing required params: genres, imageUrl, platforms or title</p>"
          }
        ],
        "Error 403": [
          {
            "group": "Error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user has no sufficiant rights to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a game with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Game Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Genres is required.\",\n       \"param\": \"genres\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"ImageUrl is required.\",\n       \"param\": \"imageUrl\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Platforms is required.\",\n       \"param\": \"platforms\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Title is required.\",\n       \"param\": \"title\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "No Sufficiant Rights Error Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"No sufficiant rights\"\n}",
          "type": "json"
        },
        {
          "title": "Game Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Game not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/messages/create",
    "title": "Add Message",
    "version": "1.0.0",
    "name": "AddMessage",
    "group": "Messages",
    "permission": [
      {
        "name": "user"
      }
    ],
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find an user with the requested id</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing required params: content or recipient</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Recipient Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Recipient not found\"\n}",
          "type": "json"
        },
        {
          "title": "Message Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Content is required.\",\n       \"param\": \"content\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Recipient is required.\",\n       \"param\": \"recipient\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/messages.js",
    "groupTitle": "Messages",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient",
            "description": "<p>Recipient's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"content\": \"Hello, nice to hear from you!\",\n \"recipient\": \"5f7a43c38506ae29609f1dba\",\n \"subject\": \"Hi there\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The Message's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipient",
            "description": "<p>Recipient's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": "<p>Sender's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the message information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the message information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"5f84b38866fccf5314dbbfd8\",\n  \"content\": \"Hello, nice to hear from you!\",\n  \"owner\": \"5f8474c497f7c853443fc988\",\n  \"recipient\": \"5f7a43c38506ae29609f1dba\",\n  \"sender\": \"5f8474c497f7c853443fc988\",\n  \"subject\": \"Hi there\",\n  \"createdAt\": \"2020-10-12T19:50:32.810Z\",\n  \"updatedAt\": \"2020-10-12T19:50:32.810Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/messages/delete",
    "title": "Delete Message",
    "version": "1.0.0",
    "name": "DeleteMessage",
    "group": "Messages",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Confirmation message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"message\": \"Message deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/messages.js",
    "groupTitle": "Messages",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Message's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "recipient",
            "description": "<p>Recipient's object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient._id",
            "description": "<p>Recipient's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient.avatar",
            "description": "<p>Recipient's avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient.username",
            "description": "<p>Recipient's username</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sender",
            "description": "<p>Sender's object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender._id",
            "description": "<p>Sender's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender.avatar",
            "description": "<p>Sender's avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender.username",
            "description": "<p>Sender's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the message information was added</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the message information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"id\": \"5f84b38866fccf5314dbbfd8\",\n \"content\": \"Hello, nice to hear from you!\",\n \"owner\": \"5f8474c497f7c853443fc988\",\n \"recipient\": {\n      \"_id\": \"5f7a43c38506ae29609f1dba\",\n      \"avatar\": \"1\",\n      \"username\": \"user1\"\n  },\n  \"sender\": {\n      \"_id\": \"5f8474c497f7c853443fc988\",\n      \"avatar\": \"2\",\n      \"username\": \"user2\"\n  },\n \"subject\": \"Hi there\",\n \"createdAt\": \"2020-10-12T19:50:32.810Z\",\n \"updatedAt\": \"2020-10-12T19:50:32.810Z\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a message with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Authorized Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Not authorized\"\n}",
          "type": "json"
        },
        {
          "title": "Message Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Message not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/messages/",
    "title": "Get All Messages By Owner",
    "version": "1.0.0",
    "name": "GetMessages",
    "group": "Messages",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "messages",
            "description": "<p>List of all user's messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n[\n {\n  \"_id\": \"5f84b35e66fccf5314dbbfd6\",\n  \"content\": \"Hello, this is my first message ever.\",\n  \"owner\": \"5f7a43c38506ae29609f1dba\",\n  \"recipient\": {\n      \"_id\": \"5f8474c497f7c853443fc988\",\n      \" avatar\": \"2\",\n      \"username\": \"user2\"\n  },\n  \"sender\": {\n      \"_id\": \"5f7a43c38506ae29609f1dba\",\n      \"avatar\": \"1\",\n      \"username\": \"user1\"\n  },\n  \"subject\": \"Hi\",\n  \"createdAt\": \"2020-10-12T19:49:50.781Z\",\n  \"updatedAt\": \"2020-10-12T19:49:50.781Z\",\n  \"__v\": 0\n },\n {\n  \"_id\": \"5f84b38866fccf5314dbbfd9\",\n  \"content\": \"Hello, nice to hear from you!\",\n  \"owner\": \"5f7a43c38506ae29609f1dba\",\n  \"recipient\": {\n      \"_id\": \"5f7a43c38506ae29609f1dba\",\n      \"avatar\": \"1\",\n      \"username\": \"user1\"\n  },\n  \"sender\": {\n      \"_id\": \"5f8474c497f7c853443fc988\",\n      \" avatar\": \"2\",\n      \"username\": \"user2\"\n  },\n  \"subject\": \"Hi there\",\n  \"createdAt\": \"2020-10-12T19:50:32.849Z\",\n  \"updatedAt\": \"2020-10-12T19:50:32.849Z\",\n  \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/messages.js",
    "groupTitle": "Messages",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/ratings/create",
    "title": "Add Rating",
    "version": "1.0.0",
    "name": "AddRating",
    "group": "Ratings",
    "permission": [
      {
        "name": "user"
      }
    ],
    "error": {
      "fields": {
        "Error 409": [
          {
            "group": "Error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Game is already rated by this user</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing required params: game or value</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a game with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Game Already Rated Error Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"message\": \"Game already rated\"\n}",
          "type": "json"
        },
        {
          "title": "Rating Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Game is required.\",\n       \"param\": \"game\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Value is required.\",\n       \"param\": \"value\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Game Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Game not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/ratings.js",
    "groupTitle": "Ratings",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"game\": \"5f8305ee5d7dce5a88142c43\",\n  \"value\": \"5\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The Rating's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the rating information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the rating information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"5f8572d308a0ec6ab8728f8a\",\n  \"author\": \"5f7a43c38506ae29609f1dba\",\n  \"game\": \"5f8305ee5d7dce5a88142c43\",\n  \"value\": 5,\n  \"createdAt\": \"2020-10-13T09:26:43.957Z\",\n  \"updatedAt\": \"2020-10-13T09:26:43.957Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/ratings/delete",
    "title": "Delete Rating",
    "version": "1.0.0",
    "name": "DeleteRating",
    "group": "Ratings",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Confirmation message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"message\": \"Rating deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/ratings.js",
    "groupTitle": "Ratings",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Rating's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "author",
            "description": "<p>Author's object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author._id",
            "description": "<p>Author's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author.avatar",
            "description": "<p>Author's avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author.username",
            "description": "<p>Author's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the rating information was added</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the rating information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"id\": \"5f8572d308a0ec6ab8728f8a\",\n  \"author\": {\n      \"_id\": \"5f7a43c38506ae29609f1dba\",\n      \"avatar\": \"1\",\n      \"username\": \"user1\"\n    },\n  \"game\": \"5f8305ee5d7dce5a88142c43\",\n  \"value\": 3,\n  \"createdAt\": \"2020-10-13T09:26:43.957Z\",\n  \"updatedAt\": \"2020-10-13T09:26:43.957Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a game with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Authorized Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Not authorized\"\n}",
          "type": "json"
        },
        {
          "title": "Game Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Game not found\"\n}",
          "type": "json"
        },
        {
          "title": "Rating Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Rating not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/ratings/:id",
    "title": "Get All Ratings By Game",
    "version": "1.0.0",
    "name": "GetRatings",
    "group": "Ratings",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Game's ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://game-maze.herokuapp.com/api/ratings/5f8305ee5d7dce5a88142c43",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ratings",
            "description": "<p>List of all game's ratings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n[\n {\n   \"_id\": \"5f8572d308a0ec6ab8728f8a\",\n   \"author\": {\n      \"_id\": \"5f7a43c38506ae29609f1dba\",\n      \"avatar\": \"1\",\n      \"username\": \"user1\"\n    },\n   \"game\": \"5f8305ee5d7dce5a88142c43\",\n   \"value\": 5,\n   \"createdAt\": \"2020-10-13T09:26:43.957Z\",\n   \"updatedAt\": \"2020-10-13T09:26:43.957Z\",\n   \"__v\": 0\n },\n {\n   \"_id\": \"5f85731508a0ec6ab8728f8b\",\n   \"author\": {\n      \"_id\": \"5f8474c497f7c853443fc988\",\n      \"avatar\": \"2\",\n      \"username\": \"user2\"\n    },\n   \"game\": \"5f8305ee5d7dce5a88142c43\",\n   \"value\": 4,\n   \"createdAt\": \"2020-10-13T09:27:49.709Z\",\n   \"updatedAt\": \"2020-10-13T09:27:49.709Z\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/ratings.js",
    "groupTitle": "Ratings",
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/ratings/update",
    "title": "Update Rating",
    "version": "1.0.0",
    "name": "UpdateRating",
    "group": "Ratings",
    "permission": [
      {
        "name": "private"
      }
    ],
    "filename": "documentation/ratings.js",
    "groupTitle": "Ratings",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Rating's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "author",
            "description": "<p>Author's object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author._id",
            "description": "<p>Author's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author.avatar",
            "description": "<p>Author's avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author.username",
            "description": "<p>Author's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the rating information was added</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the rating information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"id\": \"5f8572d308a0ec6ab8728f8a\",\n  \"author\": {\n      \"_id\": \"5f7a43c38506ae29609f1dba\",\n      \"avatar\": \"1\",\n      \"username\": \"user1\"\n    },\n  \"game\": \"5f8305ee5d7dce5a88142c43\",\n  \"value\": 3,\n  \"createdAt\": \"2020-10-13T09:26:43.957Z\",\n  \"updatedAt\": \"2020-10-13T09:26:43.957Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The Rating's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Game's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the rating information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the rating information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"5f8572d308a0ec6ab8728f8a\",\n  \"author\": \"5f7a43c38506ae29609f1dba\",\n  \"game\": \"5f8305ee5d7dce5a88142c43\",\n  \"value\": 5,\n  \"createdAt\": \"2020-10-13T09:26:43.957Z\",\n  \"updatedAt\": \"2020-10-13T09:26:43.957Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing required params: game or value</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find a game with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Rating Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Game is required.\",\n       \"param\": \"game\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Value is required.\",\n       \"param\": \"value\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "User Not Authorized Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Not authorized\"\n}",
          "type": "json"
        },
        {
          "title": "Game Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Game not found\"\n}",
          "type": "json"
        },
        {
          "title": "Rating Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Rating not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/users/create",
    "title": "Add User",
    "version": "1.0.0",
    "name": "AddUser",
    "group": "Users",
    "permission": [
      {
        "name": "public"
      }
    ],
    "filename": "documentation/users.js",
    "groupTitle": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"username\": \"user1\",\n \"email\": \"user1@mail.com\",\n \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The User's Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing or invalid required params: username, email or password</p>"
          }
        ],
        "Error 409": [
          {
            "group": "Error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>There is already an account with this email</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Create User Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"msg\": \"The username must be between 3 and 20 characters\",\n       \"param\": \"username\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\": \"Please include a valid email\",\n       \"param\": \"email\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\":  \"Please enter a password with 6 or more characters\",\n       \"param\": \"password\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "User Already Exists Error Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"message\": \"There is already an account with this email\"\n}",
          "type": "json"
        },
        {
          "title": "Username Taken Error Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"message\": \"This username is taken\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/users/delete",
    "title": "Delete User",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "Users",
    "permission": [
      {
        "name": "super-admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Confirmation message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"message\": \"User deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/users.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's Role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the user information was added</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the user information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"role\": \"super-admin\",\n  \"id\": \"5f7a43c38506ae29609f1dba\",\n  \"username\": \"user1\",\n  \"email\": \"user1@mail.com\",\n  \"createdAt\": \"2020-10-04T21:50:59.251Z\",\n  \"updatedAt\": \"2020-10-04T21:50:59.251Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 403": [
          {
            "group": "Error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user has no sufficiant rights to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find an user with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Sufficiant Rights Error Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"No sufficiant rights\"\n}",
          "type": "json"
        },
        {
          "title": "User Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"User not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/users/getOneByToken",
    "title": "Get User By Token",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "Users",
    "permission": [
      {
        "name": "private"
      }
    ],
    "filename": "documentation/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The User's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the user information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the user information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"role\": \"super-admin\",\n  \"_id\": \"5f7a43c38506ae29609f1dba\",\n  \"username\": \"user1\",\n  \"email\": \"user1@mail.com\",\n  \"createdAt\": \"2020-10-04T21:50:59.251Z\",\n  \"updatedAt\": \"2020-10-04T21:50:59.251Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Get All Users",
    "version": "1.0.0",
    "name": "GetUsers",
    "group": "Users",
    "permission": [
      {
        "name": "super-admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of all users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n[\n {\n  \"role\": \"super-admin\",\n  \"_id\": \"5f7a43c38506ae29609f1dba\",\n  \"username\": \"user1\",\n  \"email\": \"user1@mail.com\",\n  \"createdAt\": \"2020-10-04T21:50:59.251Z\",\n  \"updatedAt\": \"2020-10-04T21:50:59.251Z\",\n  \"__v\": 0\n },\n {\n  \"role\": \"user\",\n  \"_id\": \"5f8474c497f7c853443fc988\",\n  \"username\": \"user2\",\n  \"email\": \"user2@mail.com\",\n  \"createdAt\": \"2020-10-12T15:22:44.539Z\",\n  \"updatedAt\": \"2020-10-12T15:22:44.539Z\",\n  \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/users.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 403": [
          {
            "group": "Error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user has no sufficiant rights to perform the operation</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Sufficiant Rights Error Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"No sufficiant rights\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "Login User",
    "version": "1.0.0",
    "name": "LoginUser",
    "group": "Users",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "documentation/users.js",
    "groupTitle": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"username\": \"user1\",\n \"email\": \"user1@mail.com\",\n \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The User's Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing or invalid required params: email or password</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Invalid credentials</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login User Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Please include a valid email\",\n       \"param\": \"email\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\":  \"Please enter a password\",\n       \"param\": \"password\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Invalid Credentials Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Inavlid credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/users/setAdmin",
    "title": "Set User Admin Rights",
    "version": "1.0.0",
    "name": "SetUserAdminRights",
    "group": "Users",
    "permission": [
      {
        "name": "super-user"
      }
    ],
    "filename": "documentation/users.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's Role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the user information was added</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the user information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"role\": \"super-admin\",\n  \"id\": \"5f7a43c38506ae29609f1dba\",\n  \"username\": \"user1\",\n  \"email\": \"user1@mail.com\",\n  \"createdAt\": \"2020-10-04T21:50:59.251Z\",\n  \"updatedAt\": \"2020-10-04T21:50:59.251Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The User's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the user information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the user information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"role\": \"super-admin\",\n  \"_id\": \"5f7a43c38506ae29609f1dba\",\n  \"username\": \"user1\",\n  \"email\": \"user1@mail.com\",\n  \"createdAt\": \"2020-10-04T21:50:59.251Z\",\n  \"updatedAt\": \"2020-10-04T21:50:59.251Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing or invalid required params: role</p>"
          }
        ],
        "Error 403": [
          {
            "group": "Error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The user has no sufficiant rights to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find an user with the requested id</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Set Admin Rights Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Please enter a role\",\n       \"param\": \"role\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "No Sufficiant Rights Error Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"No sufficiant rights\"\n}",
          "type": "json"
        },
        {
          "title": "User Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"User not found\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/users/update",
    "title": "Update User",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "Users",
    "permission": [
      {
        "name": "private"
      }
    ],
    "filename": "documentation/users.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n  \"x-auth-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's Role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the user information was added</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the user information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"role\": \"super-admin\",\n  \"id\": \"5f7a43c38506ae29609f1dba\",\n  \"username\": \"user1\",\n  \"email\": \"user1@mail.com\",\n  \"createdAt\": \"2020-10-04T21:50:59.251Z\",\n  \"updatedAt\": \"2020-10-04T21:50:59.251Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The User's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the user information was added</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the user information was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"role\": \"super-admin\",\n  \"_id\": \"5f7a43c38506ae29609f1dba\",\n  \"username\": \"user1\",\n  \"email\": \"user1@mail.com\",\n  \"createdAt\": \"2020-10-04T21:50:59.251Z\",\n  \"updatedAt\": \"2020-10-04T21:50:59.251Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Missing or invalid required params: username or email</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to perform the operation</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Couldn't find an user with the requested id</p>"
          }
        ],
        "Error 409": [
          {
            "group": "Error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>There is already an account with this email</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A server error occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Update User Required Fields Error Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n   \"errors\": [\n      {\n       \"msg\": \"Please include a valid email\",\n       \"param\": \"email\",\n       \"location\": \"body\"\n      },\n      {\n       \"msg\":  \"Please enter a username\",\n       \"param\": \"username\",\n       \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "User Not Authorized Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Not authorized\"\n}",
          "type": "json"
        },
        {
          "title": "User Not Found Error Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"User not found\"\n}",
          "type": "json"
        },
        {
          "title": "User Already Exists Error Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"message\": \"There is already an account with this email\"\n}",
          "type": "json"
        },
        {
          "title": "Username Taken Error Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"message\": \"This username is taken\"\n}",
          "type": "json"
        },
        {
          "title": "Server Error Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
