<template>
	<div>
    <div class="aui-container">
    <div class="aui-page">
      <div class="aui-header">
        <h1 class="aui-h-title"><img src="../../assets/images/ui-logo/logo.png"></h1>
        <p class="aui-h-text"><em>AZENUI Touch</em>让移动端开发更快速、简单，从设计上考虑主流设备,保证代码轻,性能高,提供现有的UI组件方便用户快速整合,降低使用成本。</p>
        <p class="aui-h-text">采用 Flexbox 布局,灵活自如地对齐、收缩、扩展元素，轻松搞定移动页面布局。</p>
      </div>
      <div class="aui-list">
        <ul class="aui-btn-menu">
          <li>
            <router-link to="nav">
            <div class="aui-list-flex aui-header">
              <p>导航</p>
              <img src="../../assets/images/icon-home/aui-nav.png">
            </div>
          	</router-link>
            <div class="aui-btn-show">
              <div class="aui-cells">
                <a href="nav.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>底部导航</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="tab.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>导航切换</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="aui-list-flex aui-header">
              <p>列表</p>
              <img src="../../assets/images/icon-home/aui-menu.png">
            </div>
            <div class="aui-btn-show">
              <div class="aui-cells">
                <a href="list-news.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>图标说明跳转</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="list-text.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>文字列表</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="list-ex.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>说明列表</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="list-icon.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>图标列表</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="list-skip.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>跳转列表</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="news-list.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>消息列表</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="aui-list-flex aui-header">
              <p>表单</p>
              <img src="../../assets/images/icon-home/aui-form.png">
            </div>
            <div class="aui-btn-show">
              <div class="aui-cells">
                <a href="switch.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>开关</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="form-in.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>单选复选表单</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="form-pu.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>普通表单</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="textarea.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>文本域表单</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="aui-list-flex aui-header">
              <p>搜索</p>
              <img src="../../assets/images/icon-home/aui-s.png">
            </div>
            <div class="aui-btn-show">
              <div class="aui-cells">
                <a href="search.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>搜索文本框</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="btn-search.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>按钮搜索框</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="aui-list-flex aui-header">
              <p>组件</p>
              <img src="../../assets/images/icon-home/aui-z.png">
            </div>
            <div class="aui-btn-show">
              <div class="aui-cells">
                <a href="btn.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>按钮</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="icon.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>图标</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="badge.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>徽章</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="up.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>上传</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="flex.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>布局</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="dialog.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>对话框</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="toast.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>弹窗</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="aui-list-flex aui-header">
              <p>面板</p>
              <img src="../../assets/images/icon-home/aui-m.png">
            </div>
            <div class="aui-btn-show">
              <div class="aui-cells">
                <a href="nine.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>九宫格</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="sides-nav.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>侧滑导航</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="it.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>图文混排</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="ba.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>轮播</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
                <a href="class.html" class="aui-cell aui-nav-text">
                  <div class="aui-cells-header"><p>分类切换</p></div>
                  <div class="aui-cells-arrow"><i class="icon-arrow"></i></div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <footer>
    <div class="aui-footer">
      <p>Copyright © 2012-2016 azenui.com</p>
    </div>
  </footer>
  </div>
</template>