const thumbnail = 'https://source.unsplash.com/random';

export const load = async () => {
	return {
		jobs: [
			{
				id: 1,
				title: 'Climate finance',
				body: 'We aim to increase the risk of financing the fossil fuel industry through public pressure and strengthening regulation. We are also engaging the financial sector including banks, insurance, and institutional investors, to implement policies that better respond to the climate crisis.',
				thumbnail
			},
			{
				id: 2,
				title: 'Oil & Gas',
				body: `We aim to stop the world's largest sources of oil and gas public financing. We partner with key stakeholders, such as policymakers, businesses and civil society organizations from across the globe, to stop oil and gas exploration, and the build-out of fossil fuel infrastructure, including LNG carriers, terminals and plants.`,
				thumbnail
			},
			{
				id: 3,
				title: 'Industry',
				body: 'We monitor company activities and engage with key industry stakeholders, such as policymakers, companies, investors and customers, to provide them with up-to-date research and to advocate for stronger climate policies and commitments.',
				thumbnail
			},
			{
				id: 4,
				title: 'RE permitting',
				body: 'We work to establish a foundation for the systematic and rapid deployment of renewable energy. By providing up-to-date research and bringing together policymakers and experts from across the globe, we inform decision-making around laws and regulations around solar and wind energy siting and permitting.',
				thumbnail
			},
			{
				id: 5,
				title: 'Power',
				body: 'Starting from South Korea, we are working to transform fossil fuel-oriented power markets and grids to become distributed and renewable-friendly. We also engage with businesses to accelerate their renewable energy transition, and amplify their voices to drive meaningful change in the power sector.',
				thumbnail
			},
			{
				id: 6,
				title: 'Bioenergy & Land use',
				body: `We aim to shatter the green myth of biomass and bioenergy through media and public engagement campaigns, and expose companies' deforestation, human rights violations and contributions to the climate crisis. We also work to end subsidies and policies that favor biomass and bioenergy over renewable energy, such as solar and wind.`,
				thumbnail
			}
		]
	};
};
