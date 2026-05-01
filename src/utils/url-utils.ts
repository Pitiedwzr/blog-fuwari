export function pathsEqual(path1: string, path2: string) {
	const normalizedPath1 = path1.replace(/^\/|\/$/g, "").toLowerCase();
	const normalizedPath2 = path2.replace(/^\/|\/$/g, "").toLowerCase();
	return normalizedPath1 === normalizedPath2;
}

function joinUrl(...parts: string[]): string {
	const joined = parts.join("/");
	return joined.replace(/\/+/g, "/");
}

export function getPostUrlBySlug(slug: string) {
	// If it's a Chinese post...
	if (slug.startsWith('zh/')) {
		// 1. Remove the 'zh/' from the slug
		const cleanSlug = slug.replace(/^zh\//, '');
		// 2. Put '/zh/' at the very beginning of the URL!
		return url(`/zh/posts/${cleanSlug}/`);
	}

	// Otherwise, treat it like a normal English post
	return url(`/posts/${slug}/`);
}

export function getTagUrl(tag: string, lang?: string): string {
	// Determine the correct base path based on language
	const prefix = lang === 'zh' ? '/zh' : '';

	if (!tag) return url(`${prefix}/archive/`);
	return url(`${prefix}/archive/?tag=${encodeURIComponent(tag.trim())}`);
}
export function getCategoryUrl(category: string | null, lang?: string): string {
	// Determine the correct base path based on language
	const prefix = lang === 'zh' ? '/zh' : '';

	if (!category || category.trim() === "") return url(`${prefix}/archive/`);
	return url(`${prefix}/archive/?category=${encodeURIComponent(category.trim())}`);
}

export function getDir(path: string): string {
	const lastSlashIndex = path.lastIndexOf("/");
	if (lastSlashIndex < 0) {
		return "/";
	}
	return path.substring(0, lastSlashIndex + 1);
}

export function url(path: string) {
	return joinUrl("", import.meta.env.BASE_URL, path);
}