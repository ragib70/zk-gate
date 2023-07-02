export const fuel_abi = {
    "types": [
      {
        "typeId": 0,
        "type": "()",
        "components": [],
        "typeParameters": null
      },
      {
        "typeId": 1,
        "type": "[_; 25]",
        "components": [
          {
            "name": "__array_element",
            "type": 23,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 2,
        "type": "[_; 25]",
        "components": [
          {
            "name": "__array_element",
            "type": 5,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 3,
        "type": "[_; 25]",
        "components": [
          {
            "name": "__array_element",
            "type": 1,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 4,
        "type": "b256",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 5,
        "type": "enum Identity",
        "components": [
          {
            "name": "Address",
            "type": 16,
            "typeArguments": null
          },
          {
            "name": "ContractId",
            "type": 17,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 6,
        "type": "generic T",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 7,
        "type": "raw untyped ptr",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 8,
        "type": "str[13]",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 9,
        "type": "str[15]",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 10,
        "type": "str[17]",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 11,
        "type": "str[18]",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 12,
        "type": "str[24]",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 13,
        "type": "str[27]",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 14,
        "type": "str[36]",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 15,
        "type": "str[41]",
        "components": null,
        "typeParameters": null
      },
      {
        "typeId": 16,
        "type": "struct Address",
        "components": [
          {
            "name": "value",
            "type": 4,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 17,
        "type": "struct ContractId",
        "components": [
          {
            "name": "value",
            "type": 4,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 18,
        "type": "struct RawVec",
        "components": [
          {
            "name": "ptr",
            "type": 7,
            "typeArguments": null
          },
          {
            "name": "cap",
            "type": 23,
            "typeArguments": null
          }
        ],
        "typeParameters": [
          6
        ]
      },
      {
        "typeId": 19,
        "type": "struct Vec",
        "components": [
          {
            "name": "buf",
            "type": 18,
            "typeArguments": [
              {
                "name": "",
                "type": 6,
                "typeArguments": null
              }
            ]
          },
          {
            "name": "len",
            "type": 23,
            "typeArguments": null
          }
        ],
        "typeParameters": [
          6
        ]
      },
      {
        "typeId": 20,
        "type": "struct course_info",
        "components": [
          {
            "name": "creator_address",
            "type": 5,
            "typeArguments": null
          },
          {
            "name": "course_fee",
            "type": 23,
            "typeArguments": null
          },
          {
            "name": "num_sections",
            "type": 23,
            "typeArguments": null
          },
          {
            "name": "section_deadlines",
            "type": 1,
            "typeArguments": null
          },
          {
            "name": "section_refund_fee",
            "type": 1,
            "typeArguments": null
          },
          {
            "name": "enrolled_students",
            "type": 2,
            "typeArguments": null
          },
          {
            "name": "curr_enrollment_count",
            "type": 23,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 21,
        "type": "struct user_course_info",
        "components": [
          {
            "name": "time_enrolled",
            "type": 23,
            "typeArguments": null
          },
          {
            "name": "sections_completed",
            "type": 1,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 22,
        "type": "struct user_custom_database",
        "components": [
          {
            "name": "user",
            "type": 5,
            "typeArguments": null
          },
          {
            "name": "enrolled_courses_id",
            "type": 1,
            "typeArguments": null
          },
          {
            "name": "sections_completed",
            "type": 3,
            "typeArguments": null
          }
        ],
        "typeParameters": null
      },
      {
        "typeId": 23,
        "type": "u64",
        "components": null,
        "typeParameters": null
      }
    ],
    "functions": [
      {
        "inputs": [
          {
            "name": "_course_fee",
            "type": 23,
            "typeArguments": null
          },
          {
            "name": "_num_sections",
            "type": 23,
            "typeArguments": null
          },
          {
            "name": "_kachra_array",
            "type": 19,
            "typeArguments": [
              {
                "name": "",
                "type": 23,
                "typeArguments": null
              }
            ]
          },
          {
            "name": "_generic_input_array",
            "type": 19,
            "typeArguments": [
              {
                "name": "",
                "type": 23,
                "typeArguments": null
              }
            ]
          }
        ],
        "name": "create_course",
        "output": {
          "name": "",
          "type": 20,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read",
              "write"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "_course_id",
            "type": 23,
            "typeArguments": null
          }
        ],
        "name": "enroll_course",
        "output": {
          "name": "",
          "type": 0,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "payable",
            "arguments": []
          },
          {
            "name": "storage",
            "arguments": [
              "read",
              "write"
            ]
          }
        ]
      },
      {
        "inputs": [],
        "name": "get_contract_balance",
        "output": {
          "name": "",
          "type": 23,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "_course_id",
            "type": 23,
            "typeArguments": null
          }
        ],
        "name": "get_course_database",
        "output": {
          "name": "",
          "type": 20,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read"
            ]
          }
        ]
      },
      {
        "inputs": [],
        "name": "get_course_id",
        "output": {
          "name": "",
          "type": 23,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read"
            ]
          }
        ]
      },
      {
        "inputs": [],
        "name": "get_user_data",
        "output": {
          "name": "",
          "type": 22,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "_course_id",
            "type": 23,
            "typeArguments": null
          }
        ],
        "name": "get_user_database",
        "output": {
          "name": "",
          "type": 21,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read"
            ]
          }
        ]
      },
      {
        "inputs": [
          {
            "name": "_course_id",
            "type": 23,
            "typeArguments": null
          },
          {
            "name": "_section_id",
            "type": 23,
            "typeArguments": null
          }
        ],
        "name": "section_completed",
        "output": {
          "name": "",
          "type": 0,
          "typeArguments": null
        },
        "attributes": [
          {
            "name": "storage",
            "arguments": [
              "read",
              "write"
            ]
          }
        ]
      }
    ],
    "loggedTypes": [
      {
        "logId": 0,
        "loggedType": {
          "name": "",
          "type": 8,
          "typeArguments": null
        }
      },
      {
        "logId": 1,
        "loggedType": {
          "name": "",
          "type": 11,
          "typeArguments": null
        }
      },
      {
        "logId": 2,
        "loggedType": {
          "name": "",
          "type": 12,
          "typeArguments": null
        }
      },
      {
        "logId": 3,
        "loggedType": {
          "name": "",
          "type": 13,
          "typeArguments": null
        }
      },
      {
        "logId": 4,
        "loggedType": {
          "name": "",
          "type": 10,
          "typeArguments": null
        }
      },
      {
        "logId": 5,
        "loggedType": {
          "name": "",
          "type": 11,
          "typeArguments": null
        }
      },
      {
        "logId": 6,
        "loggedType": {
          "name": "",
          "type": 14,
          "typeArguments": null
        }
      },
      {
        "logId": 7,
        "loggedType": {
          "name": "",
          "type": 9,
          "typeArguments": null
        }
      },
      {
        "logId": 8,
        "loggedType": {
          "name": "",
          "type": 15,
          "typeArguments": null
        }
      }
    ],
    "messagesTypes": [],
    "configurables": []
  }