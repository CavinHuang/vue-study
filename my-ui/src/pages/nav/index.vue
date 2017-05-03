<template>
	<div class="aui-container">
		<div class="aui-page">
			<div class="aui-t-header">
				<div class="header">
					<div class="header-background"></div>
					<div class="toolbar statusbar-padding">
						<button class="bar-button back-button"  onclick="history.go(-1);"><i class="icon icon-back"></i></button>
						<div class="header-title">
							<div class="title">底部导航</div>
						</div>
					</div>
				</div>
			</div>
			<div class="aui-s-title">
				<div class="aui-s-content">
					<h2>底部导航</h2>
					<p>icon是以base64位的形式展现</p>
				</div>
			</div>

			<!-- 导航 begin -->
			<div class="aui-n-header">
				<h2 class="aui-n-center">导航</h2>
				<div class="aui-n-center">
					<a href="javascript:history.go(-1);" class="aui-n-back" >
						<i class="icon icon-back"></i>
					</a>
				</div>
				<div class="aui-n-center">
					<a href="#" class="aui-n-menu">
						<i class="icon icon-menu"></i>
					</a>
					<div style="position:absolute; top:50px; right:1px;" class="aui-menu-sel">
						<a class="" href="#">关于我们</a>
						<a class="" href="#">服务协议</a>
					</div>
				</div>
			</div>
			<!-- 导航 end -->
			<div id="demo">
				1
			</div>
			<!-- 底部导航 begin -->
			<div class="tab-bar tab-bottom" id="footer">
				<a class="tab-button "><i class="tab-button-icon icon icon-home"></i><span class="tab-button-txt">首页</span></a>
				<a class="tab-button "><i class="tab-button-icon icon icon-post"></i><span class="tab-button-txt">分类</span></a>
				<a class="tab-button "><i class="tab-button-icon icon icon-car"></i><span class="tab-button-txt">购物</span></a>
				<a class="tab-button "><i class="tab-button-icon icon icon-serve"></i><span class="tab-button-txt">服务</span></a>
				<a class="tab-button "><i class="tab-button-icon icon icon-myme"></i><span class="tab-button-txt">我的</span></a>
			</div>
			<!-- 导航切换 end -->

		</div>
	</div>
</template>