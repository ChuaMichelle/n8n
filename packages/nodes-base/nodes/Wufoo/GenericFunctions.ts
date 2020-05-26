import { OptionsWithUri } from 'request';
import {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	ILoadOptionsFunctions,
	IHookFunctions,
} from 'n8n-core';
import { IDataObject} from 'n8n-workflow';

export async function wufooApiRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: string, resource: string, body: any = {}, qs: IDataObject = {}, uri?: string, option: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
	const credentials = this.getCredentials('wufooApi');
	if (credentials === undefined) {
		throw new Error('No credentials got returned!');
	}

	let options: OptionsWithUri = {
		auth: {
			username: credentials!.apiKey as string,
			password: '',
		},
		method,
		form : body,
		body,
		qs,
		uri: `https://${credentials!.subdomain}.wufoo.com/api/v3/${resource}`,
		json: true
	};

	options = Object.assign({}, options, option);
	if (Object.keys(options.body).length === 0 || method === 'PUT') {
		delete options.body;
	}

	try {
		return await this.helpers.request!(options);
	} catch (error) {
		throw new Error(error.message);
	}
}