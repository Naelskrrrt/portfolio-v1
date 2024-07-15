export const navItems = [
	{ name: "Home", link: "#", icon: "/home.svg" },
	{ name: "About", link: "#about", icon: "/info.svg" },
	{ name: "Projects", link: "#projects", icon: "/monitor.svg" },
	{ name: "Experiences", link: "#experience", icon: "/briefcase.svg" },
	{ name: "Contact", link: "#contact", icon: "/phone.svg" },
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		url: "https://github.com/NaelSkrrrt",
	},
	{
		id: 2,
		img: "/mail.svg",
		url: "mailto:ralalanael@gmail.com",
	},
	{
		id: 3,
		img: "/link.svg",
		url: "https://www.linkedin.com/in/lalasonnael/",
	},
	{
		id: 4,
		img: "/whatsapp.svg",
		url: "https://wa.me/+261320570760",
	},
];

export const WORK_EXPERIENCES = [
	{
		id: 1,
		title: "Apprentice in Web and Mobile Design and Integration",
		desc: [
			"Modeling and wireframing for websites and mobile applications.",
			"Creation of intuitive and attractive user interfaces (UI).",
			"Use of tools such as Adobe XD, Sketch, or Figma.",
			"Converting mockups to ReactJS and JavaScript code.",
			"Optimization for a responsive user experience.",
			"Mastery of frameworks.",
			"Experience with modern frameworks such as React.",
			"Implementing interactive features with JavaScript.",
			"Using development and debugging tools like Chrome DevTools.",
		],
		className: "md:col-span-2",
		thumbnail: "/abm-logo.svg",
	},

	{
		id: 2,
		title: "Web Developer Intern",
		desc: [
			"Conception et Implémentation d'une Application de Gestion des Congés pour les Employés de l'Entreprise",
			"Expérience dans le développement complet d'une application complète de gestion des congés conçue pour les employés de l'entreprise.",
			"J'ai mis en œuvre des interfaces conviviales, respectant les normes de sécurité les plus élevées.",
			"Implémentation de fonctionnalités complexes dans une application de gestion des congés : Intégration de la synchronisation de calendrier, Gestion des congés basée sur l'accréditation, ...",
			"Technologies et Outils : ReactJS, NodeJs, ExpressJS, MySQL, Figma, MERISE, Git/Github, Notion, Gestion des ressources humaines",
		],
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/spat.png",
	},
	// {
	// 	id: 3,
	// 	title: "Freelance App Dev Project",
	// 	desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
	// 	className: "md:col-span-2", // change to md:col-span-2
	// 	thumbnail: "/exp3.svg",
	// },
	// {
	// 	id: 4,
	// 	title: "Lead Frontend Developer",
	// 	desc: "Developed and maintained user-facing features using modern frontend technologies.",
	// 	className: "md:col-span-2",
	// 	thumbnail: "/exp4.svg",
	// },
];

export const GRID_ITEMS = [
	{
		id: 1,
		title: "I prioritize client collaboration, fostering open communication ",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently building a JS Reusable library",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-3",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const PROJECTS = [
	{
		id: 1,
		title: "Travlog - Combine Travel Blog with Social Media",
		des: "A design and website project that combines a travel blog with a social media platform.",
		img: "/p1.png",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
		link: "https://travlog-website.vercel.app/",
		designLink:
			"https://www.figma.com/proto/kBSqf76ZmwuD5AKMeUvKBe/Travlog?page-id=0%3A1&node-id=101-2624&viewport=432%2C1028%2C0.27&t=j98majqtCIxcDvWq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=101%3A2624&show-proto-sidebar=1",
	},
	{
		id: 2,
		title: "Interior Design",
		des: "A landing page design for an interior design company.",
		img: "/p2.png",
		iconLists: [
			// "/next.svg",
			// "/tail.svg",
			// "/ts.svg",
			// "/stream.svg",
			// "/c.svg",
			"/figma.svg",
			"adobe-xd.svg",
		],
		link: "https://www.figma.com/proto/tP3X7nBoz7L6jMP5N3LFgF/InteriorDesign?page-id=0%3A1&node-id=8-31&viewport=530%2C171%2C0.25&t=FK3EHufbVoCFOP8k-1&scaling=scale-down&content-scaling=fixed",
	},
	{
		id: 3,
		title: "Wallet - Finance Tracker",
		des: "Mobile Design with figma, and a finance tracker app using React Native and Expo, For an entreprise.",
		img: "/p3.png",
		iconLists: [
			"/re.svg",
			"/tail.svg",
			"/ts.svg",
			"react-native.svg",
			"expo.svg",
		],
		link: "https://www.figma.com/proto/UexyZHyvWdqoApe1PwO8Le/Wallet-Mobile-App-(3QXXX)?page-id=&n  ode-id=102-262&starting-point-node-id=102%3A262&t=0l5o8kWvbPjujD6O-1",
	},
	{
		id: 4,
		title: "E-leave - Leave Management System",
		des: "A leave management system for an entreprise, with a web and mobile app.",
		img: "/p4.png",
		iconLists: [
			"/next.svg",
			// "/tail.svg",
			// "/ts.svg",
			// "/three.svg",
			"/gsap.svg",
			"/node.svg",
			"/express.svg",
			"/mysql.svg",
			"/sequelize.svg",
		],
		link: "https://github.com/Naelskrrrt/leave-management-next",
	},
	{
		id: 5,
		title: "This Portfolio",
		des: "A showcase of my work, built with Next.js, Tailwind CSS, shadcn/ui, Three.js, gsap and TypeScript.",
		img: "/p5.png",
		iconLists: [
			"/next.svg",
			"/tail.svg",
			"/ts.svg",
			"/three.svg",
			"/gsap.svg",
		],
		link: "https://github.com/Naelskrrrt/portfolio-v1.git",
	},
];
