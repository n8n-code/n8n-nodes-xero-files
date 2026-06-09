import type { INodeProperties } from 'n8n-workflow';

export const filesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					]
				}
			},
			"options": [
				{
					"name": "Get Associations By Object",
					"value": "Get Associations By Object",
					"action": "Retrieves an association object using a unique object ID",
					"description": "By passing in the appropriate options,",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/Associations/{{$parameter[\"ObjectId\"]}}"
						}
					}
				},
				{
					"name": "Get Files",
					"value": "Get Files",
					"action": "Retrieves files",
					"description": "Retrieves files",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/Files"
						}
					}
				},
				{
					"name": "Upload File",
					"value": "Upload File",
					"action": "Uploads a File",
					"description": "Uploads a File",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/Files"
						}
					}
				},
				{
					"name": "Delete File",
					"value": "Delete File",
					"action": "Deletes a specific file",
					"description": "Delete a specific file",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/Files/{{$parameter[\"FileId\"]}}"
						}
					}
				},
				{
					"name": "Get File",
					"value": "Get File",
					"action": "Retrieves a file by a unique file ID",
					"description": "Retrieves a file by a unique file ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/Files/{{$parameter[\"FileId\"]}}"
						}
					}
				},
				{
					"name": "Update File",
					"value": "Update File",
					"action": "Update a file",
					"description": "Updates file properties of a single file",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/Files/{{$parameter[\"FileId\"]}}"
						}
					}
				},
				{
					"name": "Get File Associations",
					"value": "Get File Associations",
					"action": "Retrieves a specific file associations",
					"description": "By passing in the appropriate options, \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/Files/{{$parameter[\"FileId\"]}}/Associations"
						}
					}
				},
				{
					"name": "Create File Association",
					"value": "Create File Association",
					"action": "Creates a new file association",
					"description": "By passing in the appropriate options, you can create a new folder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/Files/{{$parameter[\"FileId\"]}}/Associations"
						}
					}
				},
				{
					"name": "Delete File Association",
					"value": "Delete File Association",
					"action": "Deletes an existing file association",
					"description": "By passing in the appropriate options, you can create a new folder",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/Files/{{$parameter[\"FileId\"]}}/Associations/{{$parameter[\"ObjectId\"]}}"
						}
					}
				},
				{
					"name": "Get File Content",
					"value": "Get File Content",
					"action": "Retrieves the content of a specific file",
					"description": "By passing in the appropriate options, retrieve data for specific file",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/Files/{{$parameter[\"FileId\"]}}/Content"
						}
					}
				},
				{
					"name": "Get Folders",
					"value": "Get Folders",
					"action": "Retrieves folders",
					"description": "By passing in the appropriate options, you can search for available folders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/Folders"
						}
					}
				},
				{
					"name": "Create Folder",
					"value": "Create Folder",
					"action": "Creates a new folder",
					"description": "By passing in the appropriate properties, you can create a new folder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/Folders"
						}
					}
				},
				{
					"name": "Delete Folder",
					"value": "Delete Folder",
					"action": "Deletes a folder",
					"description": "By passing in the appropriate ID, you can delete a folder",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/Folders/{{$parameter[\"FolderId\"]}}"
						}
					}
				},
				{
					"name": "Get Folder",
					"value": "Get Folder",
					"action": "Retrieves specific folder by using a unique folder ID",
					"description": "By passing in the appropriate ID, you can search for specific folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/Folders/{{$parameter[\"FolderId\"]}}"
						}
					}
				},
				{
					"name": "Update Folder",
					"value": "Update Folder",
					"action": "Updates an existing folder",
					"description": "By passing in the appropriate ID and properties, you can update a folder",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/Folders/{{$parameter[\"FolderId\"]}}"
						}
					}
				},
				{
					"name": "Get Inbox",
					"value": "Get Inbox",
					"action": "Retrieves inbox folder",
					"description": "Search for the user inbox",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/Inbox"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /Associations/{ObjectId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Associations By Object"
					]
				}
			}
		},
		{
			"displayName": "Object Id",
			"name": "ObjectId",
			"required": true,
			"description": "Object id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Associations By Object"
					]
				}
			}
		},
		{
			"displayName": "GET /Files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files"
					]
				}
			}
		},
		{
			"displayName": "Pagesize",
			"name": "pagesize",
			"description": "pass an optional page size value",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pagesize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "number of records to skip for pagination",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "values to sort by",
			"default": "CreatedDateUTC DESC",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "Name"
				},
				{
					"name": "Size",
					"value": "Size"
				},
				{
					"name": "Created Date UTC",
					"value": "CreatedDateUTC"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files"
					]
				}
			}
		},
		{
			"displayName": "POST /Files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "Folder Id",
			"name": "FolderId",
			"description": "pass an optional folder id to save file to specific folder",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "FolderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "POST /Files<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "DELETE /Files/{FileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete File"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "FileId",
			"required": true,
			"description": "File id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete File"
					]
				}
			}
		},
		{
			"displayName": "GET /Files/{FileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get File"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "FileId",
			"required": true,
			"description": "File id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get File"
					]
				}
			}
		},
		{
			"displayName": "PUT /Files/{FileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "FileId",
			"required": true,
			"description": "File id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "Created Date Utc",
			"name": "CreatedDateUtc",
			"type": "string",
			"default": "2020-12-03T19:04:58.6970000",
			"description": "Created date in UTC",
			"routing": {
				"send": {
					"property": "CreatedDateUtc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "Folder Id",
			"name": "FolderId",
			"type": "string",
			"default": "0f8ccf21-7267-4268-9167-a1e2c40c84c8",
			"description": "Folder relation object's UUID",
			"routing": {
				"send": {
					"property": "FolderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"type": "string",
			"default": "d290f1ee-6c54-4b01-90e6-d701748f0851",
			"description": "File object's UUID",
			"routing": {
				"send": {
					"property": "Id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "Mime Type",
			"name": "MimeType",
			"type": "string",
			"default": "image/jpeg",
			"description": "MimeType of the file (image/png, image/jpeg, application/pdf, etc..)",
			"routing": {
				"send": {
					"property": "MimeType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "File2.jpg",
			"description": "File Name",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "Size",
			"type": "number",
			"default": 3615,
			"description": "Numeric value in bytes",
			"routing": {
				"send": {
					"property": "Size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "Updated Date Utc",
			"name": "UpdatedDateUtc",
			"type": "string",
			"default": "2020-12-03T19:04:58.6970000",
			"description": "Updated date in UTC",
			"routing": {
				"send": {
					"property": "UpdatedDateUtc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "User",
			"type": "json",
			"default": "{\n  \"FirstName\": \"John\",\n  \"FullName\": \"Smith\",\n  \"Id\": \"4ff1e5cc-9835-40d5-bb18-09fdb118db9c\",\n  \"LastName\": \"Smith\",\n  \"Name\": \"john.smith@mail.com\"\n}",
			"routing": {
				"send": {
					"property": "User",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update File"
					]
				}
			}
		},
		{
			"displayName": "GET /Files/{FileId}/Associations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get File Associations"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "FileId",
			"required": true,
			"description": "File id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get File Associations"
					]
				}
			}
		},
		{
			"displayName": "POST /Files/{FileId}/Associations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create File Association"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "FileId",
			"required": true,
			"description": "File id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create File Association"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "FileId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the file",
			"routing": {
				"send": {
					"property": "FileId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create File Association"
					]
				}
			}
		},
		{
			"displayName": "Object Group",
			"name": "ObjectGroup",
			"type": "options",
			"default": "Account",
			"description": "The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API.",
			"options": [
				{
					"name": "Account",
					"value": "Account"
				},
				{
					"name": "Bank Transaction",
					"value": "BankTransaction"
				},
				{
					"name": "Contact",
					"value": "Contact"
				},
				{
					"name": "Credit Note",
					"value": "CreditNote"
				},
				{
					"name": "Invoice",
					"value": "Invoice"
				},
				{
					"name": "Item",
					"value": "Item"
				},
				{
					"name": "Manual Journal",
					"value": "ManualJournal"
				},
				{
					"name": "Overpayment",
					"value": "Overpayment"
				},
				{
					"name": "Payment",
					"value": "Payment"
				},
				{
					"name": "Prepayment",
					"value": "Prepayment"
				},
				{
					"name": "Receipt",
					"value": "Receipt"
				}
			],
			"routing": {
				"send": {
					"property": "ObjectGroup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create File Association"
					]
				}
			}
		},
		{
			"displayName": "Object Id",
			"name": "ObjectId",
			"type": "string",
			"default": "",
			"description": "The identifier of the object that the file is being associated with (e.g. InvoiceID, BankTransactionID, ContactID)",
			"routing": {
				"send": {
					"property": "ObjectId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create File Association"
					]
				}
			}
		},
		{
			"displayName": "Object Type",
			"name": "ObjectType",
			"type": "options",
			"default": "Unknown",
			"description": "The Object Type",
			"options": [
				{
					"name": "Unknown",
					"value": "Unknown"
				},
				{
					"name": "Accpay",
					"value": "Accpay"
				},
				{
					"name": "Acc Pay Credit",
					"value": "AccPayCredit"
				},
				{
					"name": "Acc Pay Payment",
					"value": "AccPayPayment"
				},
				{
					"name": "Acc Rec",
					"value": "AccRec"
				},
				{
					"name": "Acc Rec Credit",
					"value": "AccRecCredit"
				},
				{
					"name": "Acc Rec Payment",
					"value": "AccRecPayment"
				},
				{
					"name": "Adjustment",
					"value": "Adjustment"
				},
				{
					"name": "Ap Credit Payment",
					"value": "ApCreditPayment"
				},
				{
					"name": "Ap Over Payment",
					"value": "ApOverPayment"
				},
				{
					"name": "Ap Over Payment Payment",
					"value": "ApOverPaymentPayment"
				},
				{
					"name": "Ap Over Payment Source Payment",
					"value": "ApOverPaymentSourcePayment"
				},
				{
					"name": "Ap Prepayment",
					"value": "ApPrepayment"
				},
				{
					"name": "Ap Prepayment Payment",
					"value": "ApPrepaymentPayment"
				},
				{
					"name": "Ap Prepayment Source Payment",
					"value": "ApPrepaymentSourcePayment"
				},
				{
					"name": "Ar Credit Payment",
					"value": "ArCreditPayment"
				},
				{
					"name": "Ar Over Payment",
					"value": "ArOverPayment"
				},
				{
					"name": "Ar Overpayment Payment",
					"value": "ArOverpaymentPayment"
				},
				{
					"name": "Ar Overpayment Source Payment",
					"value": "ArOverpaymentSourcePayment"
				},
				{
					"name": "Ar Prepayment",
					"value": "ArPrepayment"
				},
				{
					"name": "Ar Prepayment Payment",
					"value": "ArPrepaymentPayment"
				},
				{
					"name": "Ar Prepayment Source Payment",
					"value": "ArPrepaymentSourcePayment"
				},
				{
					"name": "Cash Paid",
					"value": "CashPaid"
				},
				{
					"name": "Cash Rec",
					"value": "CashRec"
				},
				{
					"name": "Exp Payment",
					"value": "ExpPayment"
				},
				{
					"name": "Man Journal",
					"value": "ManJournal"
				},
				{
					"name": "Purchase Order",
					"value": "PurchaseOrder"
				},
				{
					"name": "Receipt",
					"value": "Receipt"
				},
				{
					"name": "Transfer",
					"value": "Transfer"
				},
				{
					"name": "Account",
					"value": "Account"
				},
				{
					"name": "Contact",
					"value": "Contact"
				},
				{
					"name": "Business",
					"value": "Business"
				},
				{
					"name": "Employee",
					"value": "Employee"
				},
				{
					"name": "Person",
					"value": "Person"
				},
				{
					"name": "User",
					"value": "User"
				},
				{
					"name": "Org",
					"value": "Org"
				},
				{
					"name": "Fixed Asset",
					"value": "FixedAsset"
				},
				{
					"name": "Pay Run",
					"value": "PayRun"
				},
				{
					"name": "Price List Item",
					"value": "PriceListItem"
				},
				{
					"name": "Bank",
					"value": "Bank"
				},
				{
					"name": "Current",
					"value": "Current"
				},
				{
					"name": "Equity",
					"value": "Equity"
				},
				{
					"name": "Expense",
					"value": "Expense"
				},
				{
					"name": "Fixed",
					"value": "Fixed"
				},
				{
					"name": "Liability",
					"value": "Liability"
				},
				{
					"name": "Prepayment",
					"value": "Prepayment"
				},
				{
					"name": "Revenue",
					"value": "Revenue"
				},
				{
					"name": "Sales",
					"value": "Sales"
				},
				{
					"name": "Overheads",
					"value": "Overheads"
				},
				{
					"name": "Depreciatn",
					"value": "Depreciatn"
				},
				{
					"name": "Other Income",
					"value": "OtherIncome"
				},
				{
					"name": "Direct Costs",
					"value": "DirectCosts"
				},
				{
					"name": "Currliab",
					"value": "Currliab"
				},
				{
					"name": "Termliab",
					"value": "Termliab"
				},
				{
					"name": "Non Current",
					"value": "NonCurrent"
				}
			],
			"routing": {
				"send": {
					"property": "ObjectType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create File Association"
					]
				}
			}
		},
		{
			"displayName": "DELETE /Files/{FileId}/Associations/{ObjectId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete File Association"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "FileId",
			"required": true,
			"description": "File id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete File Association"
					]
				}
			}
		},
		{
			"displayName": "Object Id",
			"name": "ObjectId",
			"required": true,
			"description": "Object id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete File Association"
					]
				}
			}
		},
		{
			"displayName": "GET /Files/{FileId}/Content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get File Content"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "FileId",
			"required": true,
			"description": "File id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get File Content"
					]
				}
			}
		},
		{
			"displayName": "GET /Folders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Folders"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "values to sort by",
			"default": "CreatedDateUTC DESC",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "Name"
				},
				{
					"name": "Size",
					"value": "Size"
				},
				{
					"name": "Created Date UTC",
					"value": "CreatedDateUTC"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /Folders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create Folder"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "string",
			"default": "foo@bar.com",
			"description": "The email address used to email files to the inbox. Only the inbox will have this element.",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create Folder"
					]
				}
			}
		},
		{
			"displayName": "File Count",
			"name": "FileCount",
			"type": "number",
			"default": 5,
			"description": "The number of files in the folder",
			"routing": {
				"send": {
					"property": "FileCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create Folder"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"type": "string",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"description": "Xero unique identifier for a folder  Files",
			"routing": {
				"send": {
					"property": "Id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create Folder"
					]
				}
			}
		},
		{
			"displayName": "Is Inbox",
			"name": "IsInbox",
			"type": "boolean",
			"default": true,
			"description": "to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted.",
			"routing": {
				"send": {
					"property": "IsInbox",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create Folder"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "assets",
			"description": "The name of the folder",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Create Folder"
					]
				}
			}
		},
		{
			"displayName": "DELETE /Folders/{FolderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Folder"
					]
				}
			}
		},
		{
			"displayName": "Folder Id",
			"name": "FolderId",
			"required": true,
			"description": "Folder id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Folder"
					]
				}
			}
		},
		{
			"displayName": "GET /Folders/{FolderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Folder"
					]
				}
			}
		},
		{
			"displayName": "Folder Id",
			"name": "FolderId",
			"required": true,
			"description": "Folder id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Folder"
					]
				}
			}
		},
		{
			"displayName": "PUT /Folders/{FolderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update Folder"
					]
				}
			}
		},
		{
			"displayName": "Folder Id",
			"name": "FolderId",
			"required": true,
			"description": "Folder id for single object",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update Folder"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "string",
			"default": "foo@bar.com",
			"description": "The email address used to email files to the inbox. Only the inbox will have this element.",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update Folder"
					]
				}
			}
		},
		{
			"displayName": "File Count",
			"name": "FileCount",
			"type": "number",
			"default": 5,
			"description": "The number of files in the folder",
			"routing": {
				"send": {
					"property": "FileCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update Folder"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"type": "string",
			"default": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
			"description": "Xero unique identifier for a folder  Files",
			"routing": {
				"send": {
					"property": "Id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update Folder"
					]
				}
			}
		},
		{
			"displayName": "Is Inbox",
			"name": "IsInbox",
			"type": "boolean",
			"default": true,
			"description": "to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted.",
			"routing": {
				"send": {
					"property": "IsInbox",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update Folder"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "assets",
			"description": "The name of the folder",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Update Folder"
					]
				}
			}
		},
		{
			"displayName": "GET /Inbox",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Inbox"
					]
				}
			}
		},
];
