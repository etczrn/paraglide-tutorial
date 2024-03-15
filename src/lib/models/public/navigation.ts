export type NavLink = {
	name: string;
	href?: string;
	children?: Required<Omit<NavLink, 'children'>>[];
};
