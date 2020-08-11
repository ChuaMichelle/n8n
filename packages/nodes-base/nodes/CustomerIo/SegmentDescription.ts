import { INodeProperties } from 'n8n-workflow';

export const segmentOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'segment',
				],
			},
		},
		options: [
			{
				name: 'Add Customer',
				value: 'add',
			},
			{
				name: 'Remove Customer',
				value: 'remove',
			},
		],
		default: 'add',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const segmentFields = [

/* -------------------------------------------------------------------------- */
/*                                   segment:add                              */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'segment',
				],
				operation: [
					'add', 'remove'
				]
			},
		},
		description: 'The unique identifier of the segment.',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'segment',
				],
				operation: [
					'add', 'remove'
				]
			},
		},
		description: 'A list of customer ids to add to the segment.',
	},
] as INodeProperties[];