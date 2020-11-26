<template>
	<div>
        <searchconditions :getList="shopFilterSearch" @get-sel-data="getFilterSelData"></searchconditions>
	</div>
</template>

<script>
import searchconditions from './../components/SearchConditions'
export default{
	name:"pagelist",
	components:{
		searchconditions
	},
	data(){
		return{
			shopFilterSearch:[
				{"title": "按类型：",
					"childer": [
						{
							"label":"全部",
							"value": null,
							"active": true
						},
						{
							"label": "按仓补货",
							"value": "STRATEGY_TYPE_SHOP_WAREHOUSE",
							"active": false
						}
					]
				},
			]
		}
	},
	methods:{
		getFilterSelData(data) {
			this.filterSelData = data
			//console.log("this.filterSelData",this.filterSelData)
		},
	}
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';

</style>