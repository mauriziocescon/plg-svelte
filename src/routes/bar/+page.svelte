<script lang="ts">
	let name = $state('World');
</script>

<h1>Bar Page</h1>
<nav>
	<a href="/bar">Go to Bar</a>
	<a href="/foo">Go to Foo</a>
</nav>

<p>Hello, {name}!</p>
<input bind:value={name} placeholder="Enter your name" />


