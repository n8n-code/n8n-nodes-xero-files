import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class XeroFilesApi implements ICredentialType {
        name = 'N8nDevXeroFilesApi';

        displayName = 'Xero Files API';

        icon: Icon = { light: 'file:../nodes/XeroFiles/xero-files.svg', dark: 'file:../nodes/XeroFiles/xero-files.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.xero.com/files.xro/1.0/',
                        required: true,
                        placeholder: 'https://api.xero.com/files.xro/1.0/',
                        description: 'The base URL of your Xero Files API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
