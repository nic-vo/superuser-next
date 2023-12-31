export const SPOT_PLAYLIST_ITER_INT = 10;
export const SPOT_PLAYLIST_PAGE_LIMIT = 49;
export const SPOT_LOGIN_WINDOW = 50 * 60;
export const LOCAL_EXPIRES = `${process.env.NEXT_PUBLIC_STORAGE_SALT}_expires`;
export const LOCAL_END = `${process.env.NEXT_PUBLIC_STORAGE_SALT}_end`;
export const LOCAL_USER_LISTS = `${process.env.NEXT_PUBLIC_STORAGE_SALT}_user_lists`;
export const LOCAL_CUSTOM_LISTS = `${process.env.NEXT_PUBLIC_STORAGE_SALT}_custom_lists`;
export const CLIENT_DIFF_TYPES = {
	'adu': "Add what's different to the target",
	'odu': "Delete everything except what's unique to the differ",
	'otu': "Delete everything except what's unique to the target",
	'bu': 'Delete all similarities but keep all differences',
	'stu': "Keep only what's similar to the differ"
};

export const SERVER_DIFF_TYPES = {
	adu: (params: { target: { owner: string, name: string }, differ: { owner: string, name: string } }) => {
		const { target, differ } = params;
		return `Anything different in ${differ.owner}'s "${differ.name}" is added to ${target.owner}'s "${target.name}"`;
	},
	odu: (params: { target: { owner: string, name: string }, differ: { owner: string, name: string } }) => {
		const { target, differ } = params;
		return `All that remains is anything unique to ${differ.owner}'s "${differ.name}"`;
	},
	otu: (params: { target: { owner: string, name: string }, differ: { owner: string, name: string } }) => {
		const { target, differ } = params;
		return `All that remains is anything unique to ${target.owner}'s "${target.name}"`
	},
	bu: (params: { target: { owner: string, name: string }, differ: { owner: string, name: string } }) => {
		const { target, differ } = params;
		return `Any similarities between ${target.owner}'s "${target.name}" and ${differ.owner}'s "${differ.name}" are gone; only their uniques remain`;
	},
	stu: (params: { target: { owner: string, name: string }, differ: { owner: string, name: string } }) => {
		const { target, differ } = params;
		return `Only shared tracks between ${target.owner}'s "${target.name}" and ${differ.owner}'s "${differ.name}"`;
	}
};

export const SPOT_URL_BASE = 'https://api.spotify.com/v1/'
