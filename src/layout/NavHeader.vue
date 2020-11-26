<template>
      <v-card flat>
        <v-toolbar
          dark
          extended
		  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
		  >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-toolbar>
        <v-card
          class="mx-auto"
          max-width="700"
          style="margin-top: -64px;">
          <v-toolbar flat>
            <!-- <v-toolbar-title class="grey--text">
              
            </v-toolbar-title> -->
            <v-text-field
              hide-details
              
              single-line
            ></v-text-field>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-apps</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>
          <!-- <v-card-text style="height: 200px;"></v-card-text> -->
        </v-card>
		<!--导航菜单-->
		<v-tabs
          v-model="tab"
		  center-active
          align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>
		  <v-tab
            v-for="item in items"
            :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
		<v-tabs-items v-model="tab">
			<v-tab-item
				v-for="item in items"
				:key="item"
			>
				<v-card flat>
				<v-card-text v-text="text"></v-card-text>
				</v-card>
			</v-tab-item>
		</v-tabs-items>
      </v-card>
</template>
<script>
export default{
	name:"nav-header",
	props:{
      title:String
    },
	data(){
		return {
			tab:"",
			items:["首页","首页1","首页2","首3"],
			text: 'Lorem ipsum dolor sit amet, consectetur .',
		}
	},
	filters:{

	},
	mounted(){
		console.log(this.$vuetify.breakpoint.width)
	},
	methods:{
		
	}
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/reset.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';

.page-header{
	.nav-topbar{
		height:39px;
		line-height:39px;
		background-color:#333333;
		.container{
			min-width: 1226px;
			margin: 0 auto;
			@include flex();
			a{
				display:inline-block;
				color: #B0B0B0;
				margin-right: 17px;
			}
			.my-car{
				width: 110px;
				background-color: #FF6600;
				text-align: center;
				color:#ffffff;
				margin-right:0px;
				.icon-cart{
					@include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
					margin-right:4px;
				}
			}
		}
	}
	.nav-header{
		background-color: #fff;
		.container{
			position:relative;
			@include flex();
			.wrapTipHead{
				position: relative;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.header-logo{
					display: inline-block;
					overflow: hidden;
					margin-right: 5px;
					//使用伪类在在before和after上设置图片
					a{
						display: inline-block;
						width: 110px;
						height: 55px;
						//background-color: #fff;
						&:before{
							content:' ';
							@include bgImg(55px,55px,'/imgs/logo.png',55px);
							transition: margin .2s;
						}
						&:after{
							content:"";
							display:inline-block;
							@include bgImg(55px,55px,'/imgs/logo.png',55px);
						}
						&:hover:before{
							margin-left: -110px;
							transition: margin .2s;
						}
					}
				}
				.title-logo{
					padding-left:34px;
					border-left: 1px solid #dfdfdf;
					h2{
						font-size:28px;
						color:#333333;
					}
					span{
						font-size:14px;
						margin-left:17px;
						color:#999999;
						font-weight:200;
					}
				}
			}
			
			.nav-meun{
				display:inline-block;
				padding-left: 40px;
				text-align:left;
				height: 45px;
				line-height: 45px;
				.item-menu{
					position: relative;
					display: inline-block;
					color: #333333;
					font-weight: 700;
					font-size: 16px;
					line-height: 16px;
					margin-right:50px;
					span{
						cursor: pointer;
					}
					&:hover{
						color:$colorA;
						.children{
							display: block;
						}
					}
					.children{
						font-size: $fontI;
						display: none;
						position: absolute;
						top: 16px;
						left: -40px;
						width:600px;
						border-top: 1px solid #E5E5E5;
						z-index:10;
						background-color:#ffffff;
						.children-left{
							width: 350px;
							padding:10px 5px 0px 10px;  
							float: left;
							overflow: hidden;
							.children_nav-item{
								display: inline-block;
								float: left;
								margin-right: 10px;
								padding: 0 7px;
								height: 24px;
								line-height: 24px;
								white-space: nowrap;
								font-weight: 500;
								color: $colorC;
								&:hover{
									color: $colorA;
								}
							}
							span{
								margin-left: 5px;
								color: #000;
							}
						}
						&:after{
							content:' ';
							position:absolute;
							top:28px;
							right:0;
							border-left:1px solid #d7d7d7;
							height:1px;
						}
						.children-right{
							float: right;
							width: 200px;
							min-height: 140px;
							padding:10px 5px 0px 10px;
							img{
								width: 100%;
							}
						}
					}
				}
			}
			.header-search{
				width: 379px;
				.wrapper{
					height: 38px;
					border: 2px solid $colorA;
					display: flex;
					align-items:center;
					input{
						border:none;
						box-sizing: border-box;
						border-right:1px solid $colorA;
						width:306px;
						padding-left: 14px;
						font-size:$fontI;
					}
					a{
						//@include bgImg(18px,18px,'/imgs/icon-search.png');
						margin-left: 17px;
					}					
				}
			}
		}
	}
}
</style>