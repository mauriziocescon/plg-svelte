<script lang="ts">
	let padAll = $state(false);

	const content = `<h5 style="color: red; text-align: center">This is centered</h5>`;
</script>

<button onclick={() => padAll = !padAll} type="button">Expand / collapse</button>
<br><br>
<div class="my-box" style={padAll ? 'padding: 4em' : 'padding-left: 4em'}>
	<b>Expected</b>: to have left-padding ALL THE TIME!<br>
	<b>Actual</b>: loses left-padding after expanding<br>
</div>

<hr>

<div>{@html content}</div>

<style>
    .my-box {
        display: block;
        background: #eee;
        border: 1px solid #666;
        border-radius: 4px;
        margin-bottom: 2em;
    }
</style>
