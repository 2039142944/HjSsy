<template>
	<div>
		<div class="forgeryblock">
			<slot name="context"></slot>
		</div>
	</div>
</template>

<script>
</script>

<style>
	
	.forgeryblock {
		position: relative;
		width: 144px;
	    min-width: 144px;
		height: 28px;
		min-height: 28px;
		border: 2px solid #e4393c;
		overflow: hidden;
		line-height: 28px;
		font-size: 13px;
	}
	.forgeryblock::before {
		content: "";
		display: block;
		width: 24px;
		height: 24px;
		transform: rotate(45deg);
		position: absolute;
		bottom: -12px;
		right: -12px;
		z-index: 1;
		background-color: #e4393c;
	
	}
	.forgeryblock::after {
		content: "√";
		/* display: block; */
		font-size: 10px;
		position: absolute;
		bottom: 12px;
		right: 0px;
		z-index: 2;
		color: white;
		width: 10px;
		height: 6px;
	}
</style>
