import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets = {
	[LinkPreset.Home]: {
		name: { en: "Home", zh: "主页" }, // Change string to object
		url: { en: "/", zh: "/zh/" },
	},
	[LinkPreset.About]: {
		name: { en: "About", zh: "关于" },
		url: { en: "/about/", zh: "/zh/about/" },
	},
	[LinkPreset.Archive]: {
		name: { en: "Archive", zh: "时间线" },
		url: { en: "/archive/", zh: "/zh/archive/" },
	},
	[LinkPreset.Series]: {
		name: { en: "Series", zh: "专栏" },
		url: { en: "/series/", zh: "/zh/series/" },
	},
	[LinkPreset.Friends]: {
		name: { en: "Links", zh: "友链" },
		url: { en: "/friends/", zh: "/zh/friends/" },
	},
};
