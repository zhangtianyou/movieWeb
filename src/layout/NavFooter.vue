<template>
  <v-footer
    dark
    padless>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <!-- 免责声明：本网站所有内容都是靠程序在互联网上自动搜集而来，仅供测试和学习交流。
					目前正在逐步删除和规避程序自动搜索采集到的不提供分享的版权影视。
						若侵犯了您的权益,请 联系我们 万分感谢！请联系邮箱：1194347263@qq.com ，本站将于24小时内删除！ -->
		</v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default{
	name:"nav-footer",
	data(){
		return {
			icons: [ 'mdi-facebook','mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
		}
	}
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
.footer{
    width:100%;
    height:100px;
    //line-height: 100px;
    text-align:center;
    background-color:$colorB;
	.container{
		width: 1226px;
		min-width: 1226px;
		margin: 0 auto;
		font-size: 12px;
		font-family: MicrosoftYaHei;
		color: $colorD;
		letter-spacing: 0px;
		.footer-item{
				padding: 0 8px;
				height: 12px;
				font-size: 12px;
				line-height: 11px;
				display: inline-block;
				border-left: 1px solid #555;
				text-decoration: none;
				color: $colorD;
			}
		.footer-webtip{
			padding-top:20px;
			span{
				margin-right: 10px;
			}
		}
	}
	
}
</style>