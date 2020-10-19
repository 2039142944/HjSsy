<template>
	<span class="secondkill">
		<span class="red fl"></span>
		<span class="num fl">0</span>
		<span class="num fl">0</span>
		<span class="colon fl">:</span>
		<span class="num fl">0</span>
		<span class="num fl">0</span>
		<span class="colon fl">:</span>
		<span class="num fl">0</span>
		<span class="num fl">0</span>
	</span>
</template>

<script>
	export default {
		props: {
			info: {
				type: String,
				default: '2010:10:10:13:0:0'
			}
		},
		mounted() {
			this.countdown();
		},
		methods: {
			countdown() {
				var timer = setInterval(() => {
					var infos = this.info.split(":");
					var to = new Date(infos[0], infos[1] - 0 + 1, infos[2], infos[3], infos[4], infos[5]);
					var now = new Date();
					var deltaTime = (to - now) / 1000;
					if (deltaTime <= 0) {
						window.clearInterval(timer);
						return;
					}
					var h = Math.floor((deltaTime % (24 * 60 * 60)) / (60 * 60));
					var m = Math.floor(((deltaTime % (24 * 60 * 60)) % (60 * 60)) / 60);
					var s = Math.floor(((deltaTime % (24 * 60 * 60)) % (60 * 60)) % 60);
					var timeStr = "" + (h < 10 ? "0" + h : h) + "" + (m < 10 ? "0" + m : m) + (s < 10 ? "0" + s : s);
					var infoinfo = document.querySelectorAll(".secondkill .num")
					infoinfo.forEach((val, i) => {
						val.innerHTML = timeStr.substring(i, i + 1)
					})
				}, 1000);
			}
		}
	}
</script>

<style>
</style>
