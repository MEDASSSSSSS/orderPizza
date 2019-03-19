<template>
	<div>
		<div class="row mb-5">
			<div class="col-4">
				<!-- sub-nav -->
				<div class="list-group mb-5">
					<router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
					<a href="" class="list-group-item list-group-item-action">History</a>
					</router-link>
					<router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
					<a href="" class="list-group-item list-group-item-action">Contact Us</a>
					</router-link>
					<router-link tag="li" class="nav-link" :to="{name:'guideLink'}">
					<a href="" class="list-group-item list-group-item-action">Order Menu</a>
					</router-link>
					<router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
					<a href="" class="list-group-item list-group-item-action">Delivery Info</a>
					</router-link>
				</div>
			</div>
			<div class="col-8">
				<!-- router content -->
				<router-view>
				</router-view>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}

</script>
<style>
	
</style>