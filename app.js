(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});
			
	var gems =[ 
		{	name: '1. ALEXANDRITE',
			price: 2.95,
			description: 'Alexandrite is a variety of chrysoberyl that displays a colour change depending on light conditions and the angle it is view from (pleochroism).The ideal colour change would be fine emerald green to fine purplish red, but this is rare and expensive. Alexandrite was discovered in the Ural Mountains of Russia in the 1830\'s, and named after tsaravitch Alexander, the future tsar. That area was mined for over 60 years and still today Russian Alexandrite is considered the best quality. Today, small quantities of Alexandrite are mined in Brazil, Sri Lanka, India, Myanmar, Tanzania and Zimbabwe.',
			canPurchase: true,
			specs: 'Colour: Green in daylight and red-violet in incandescent light.  Hardness: 8.5',
			image:"logo-preview.png",
		},

		{	name: '2. AMBER',
			price: 3.95,
			description: 'Amber is the fossilized resin from ancient forests. In ancient times the resin dripped and oozed down trees, filling fissures and trapping debris such as seeds, leaves, feathers and insects. The resin then became buried and fossilized through a natural polymerisation creating amber. The two main sources of amber in today\'s market are the Baltic states and the Dominican Republic. Amber from the Baltic states is older than that from the Dominican Republic is more likely to have insect inclusions. Most of the world\'s amber is in the range of 30-90 million years old. Semi-fossilized resin or sub-fossil amber is called copal.',
			canPurchase: true,
			specs: 'Hardness: 2.5-3',
			image:"logo-preview.png",
		},
		{	name: '3. IOLITE',
			price: 5.95,
			description: 'Iolite is a blue silicate mineral that occurs as crystals or grains in igneous rocks, Origin of name: from the Greek ios, which means violet. Iolite changes colours (pleochism) depending upon which angle it is viewed from and the gems are cut to take advantage of that. It is found in Sri Lanka, Burma, Australia\'s Northern Territory, Namibia, Brazil, Tanzania, Madagascar, Connecticut, and the Yellowknife area of the Northwest Territories of Canada. ',
			canPurchase: true,
			specs: 'Colour: Transparent, violet-blue, light blue, blue, rich blue-violet stone.  Hardness 7.5',
			image:"logo-preview.png",
		},
		{	name: '4. QUARTZ',
			price: 9.95,
			description: 'Quartz is a crystalline rock or mineral composed of silicon dioxide. Quartz is the second most common mineral in the Earth\'s continental crust and found in all types of geological environment. There are 49 variety\'s, a number of which are gemstones, some of which are very beautiful and very rare. Origin of name from Saxon word Querkluftertz = cross-vein ore.',
			canPurchase: true,
			specs: 'Colour: colourless, white, gray, yellow to brown to black, violet, pink. Hardness: 7',
			image:"logo-preview.png",
		},
		{	name: '5. RUBY',
			price: 7.95,
			description: 'Ruby is the red variety of the mineral called Corundum which is composed of aluminium oxide (any other colour of corundrum is a sapphire, see below). The red colour is caused mainly by chromium and titanium. It is natural for rubies to have imperfections in them, including colour impurities and inclusions of rutile needles known as "silk. Origin of name comes from ruber, Latin for red. Some rubies show a 3-point or 6-point star or asterism. These rubies are cut into cabochons to display this effect. Natural occurring rubies are very rare and extremely rare in large sizes over 3 carats. They can be found in many regions around the world from India, to East Africa, to South America, the Hindu Kush and a few deposits in the United States. ',
			canPurchase: true,
			specs: 'Colour: pinkish red or deep, rich red colour. Hardness: 9',
			image:"logo-preview.png",
		}
			
	];
})();