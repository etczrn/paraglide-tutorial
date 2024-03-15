import type { Article } from '$lib/models/public/article';
import { type AvailableLanguageTag } from '$paraglide/runtime';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, depends }) => {
	// The Adapter automatically calls `invalidate("paraglide:lang")` whenever the langauge changes
	// This tells SvelteKit to re-run this function whenever that happens
	depends('paraglide:lang');
	const {
		paraglide: { lang }
	} = locals;
	console.log({ lang });
	return {
		research: research[lang as AvailableLanguageTag],
		insights: insights[lang as AvailableLanguageTag],
		jobs: jobs[lang as AvailableLanguageTag]
	};
};

const thumbnail = 'https://source.unsplash.com/random';

const research: {
	[key in AvailableLanguageTag]: Article[];
} = {
	en: [
		{
			id: 1,
			title:
				"High and dry:The global energy transition's looming impact on the LNG and oil shipbuilding industry",
			thumbnail,
			tags: ['Report', 'Public Finance', 'Private Finance'],
			postedOn: '2023-09-23T00:00:00.000Z'
		},
		{
			id: 2,
			title: 'Global trends in climate change litigation 2022',
			thumbnail,
			tags: ['Gas', 'Hydrogen'],
			postedOn: '2023-09-23T00:00:00.000Z'
		},
		{
			id: 3,
			title: 'Offshore Wind Colloquium Brief No.1 - UK case of Fisheries Engagement',
			thumbnail,
			tags: ['Report', 'Public Finance', 'Private Finance'],
			postedOn: '2023-09-23T00:00:00.000Z'
		}
	],
	ko: [
		{
			id: 1,
			title: '고도 및 건조: 글로벌 에너지 전환이 LNG 및 석유 조선 산업에 미치는 영향',
			thumbnail,
			tags: ['Report', 'Public Finance', 'Private Finance'],
			postedOn: '2023-09-23T00:00:00.000Z'
		},
		{
			id: 2,
			title: '기후변화 소송의 글로벌 동향 2022',
			thumbnail,
			tags: ['Gas', 'Hydrogen'],
			postedOn: '2023-09-23T00:00:00.000Z'
		},
		{
			id: 3,
			title: '해상풍력 콜로키움 브리핑 No.1 - 영국 수산업 참여 사례',
			thumbnail,
			tags: ['Report', 'Public Finance', 'Private Finance'],
			postedOn: '2023-09-23T00:00:00.000Z'
		}
	]
};

const insights: {
	[key in AvailableLanguageTag]: Article[];
} = {
	en: [
		{
			id: 1,
			title: 'The Grand Escape Rush of Climate Neglect Festivals',
			thumbnail,
			tags: ['Coal', 'Gas', 'Solar'],
			postedOn: '2023-09-23T00:00:00.000Z'
		},
		{
			id: 2,
			title: 'The Victory of Future Generations for Climate',
			thumbnail,
			tags: ['Coal', 'Gas'],
			postedOn: '2023-09-23T00:00:00.000Z'
		},
		{
			id: 1,
			title: 'The World is Set to Melt',
			thumbnail,
			tags: [],
			postedOn: '2023-09-23T00:00:00.000Z'
		}
	],
	ko: [
		{
			id: 1,
			title: '기후 방치 축제의 대탈출 러시',
			thumbnail,
			tags: ['Coal', 'Gas', 'Solar'],
			postedOn: '2023-09-23T00:00:00.000Z'
		},
		{
			id: 2,
			title: '기후를 위한 미래 세대의 승리',
			thumbnail,
			tags: ['Coal', 'Gas'],
			postedOn: '2023-09-23T00:00:00.000Z'
		},
		{
			id: 1,
			title: '세상이 녹을 것 같다',
			thumbnail,
			tags: [],
			postedOn: '2023-09-23T00:00:00.000Z'
		}
	]
};

const jobs: {
	[key in AvailableLanguageTag]: Pick<Article, 'id' | 'title' | 'thumbnail'>[];
} = {
	en: [
		{ id: 1, title: 'Climate Finance', thumbnail },
		{ id: 2, title: 'Oil & Gas', thumbnail },
		{ id: 3, title: 'Industry', thumbnail },
		{ id: 4, title: 'RE Permitting', thumbnail },
		{ id: 5, title: 'Power', thumbnail },
		{ id: 6, title: 'Bioenergy & Land use', thumbnail }
	],
	ko: [
		{ id: 1, title: '기후 재정', thumbnail },
		{ id: 2, title: '석유 및 가스', thumbnail },
		{ id: 3, title: '산업', thumbnail },
		{ id: 4, title: 'RE 허용', thumbnail },
		{ id: 5, title: '전력', thumbnail },
		{ id: 6, title: '생물에너지 및 토지 이용', thumbnail }
	]
};
