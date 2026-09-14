import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { filesDescription } from './resources/files';

export class XeroFiles implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Xero Files',
                name: 'N8nDevXeroFiles',
                icon: { light: 'file:./xero-files.svg', dark: 'file:./xero-files.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Xero Files API endpoints.',
                defaults: { name: 'Xero Files' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevXeroFilesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Files",
					"value": "Files",
					"description": "Operations available to regular developers"
				}
			],
			"default": ""
		},
		...filesDescription
                ],
        };
}
