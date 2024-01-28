<script>
	// // get days since May 2017
	// let timeBeingDeveloper = Math.floor((Date.now() - new Date('2017-05-01')) / 1000 / 60 / 60 / 24);
	// setInterval(() => {
	// 	timeBeingDeveloper += 1000;
	// }, 1000);
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>More about me</h1>

	<p>
		Developer since May 2017 after attending both Mount Royal and the University of Calgary. Since
		then, my journey has taken me through a variety of different jobs and roles.
	</p>

	<ul>
		<li>
			🏢
			<a aria-label="Work link" href="https://stackdx.com" target="_blank"
				>Stack Technologies Ltd.</a
			>
		</li>
		<li>📍Calgary, Alberta</li>
		<li>🍁Canadian born and raised</li>
	</ul>

	<p />
</div>
