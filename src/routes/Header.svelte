<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		border-bottom: 1px solid var(--divider-color);
		width: 100%;
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		/* background: var(--background); */
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::after {
		content: '';
		width: 100%;
		height: 0.2em;
		background: var(--color-primary);
		position: absolute;
		left: 0;
	}

	li:hover::after {
		/* content: '';
		width: 100%;
		height: 0.2em;
		background: var(--color-primary);
		position: absolute;
		left: 0; */
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text-secondary);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-text);
	}
</style>
