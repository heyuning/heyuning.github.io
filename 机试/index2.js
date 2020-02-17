Vue.component('navrow2',{
  template:`
  <el-row class="tac" style="width: 600px;height: 300px;">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title"> <a href="#/texiao/no1/研发团队">特效药原理</a></span>
              </el-menu-item>
              <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title"> <a href="#/texiao/no1/特效药受众对象">特效药受众对象</a></span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span slot="title"> <a href="#/texiao/no1/特效药常见问题">特效药常见问题</a></span>
                </el-menu-item>
            </el-menu>
          </el-col>
          
  `,
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  
})



Vue.component('navrow1',{
  template:`
  <el-row class="tac" style="width: 600px;height: 300px;">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title"> <a href="#/yanfa/no1/研发团队">研发团队</a></span>
              </el-menu-item>
              <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title"> <a href="#/yanfa/no1/技术力量">技术力量</a></span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span slot="title"> <a href="#/yanfa/no1/研发展望">研发展望</a></span>
                </el-menu-item>
            </el-menu>
          </el-col>
          
  `,
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  
})



Vue.component('navrow',{
    template:`
    <el-row class="tac" style="width: 600px;height: 300px;">
            <el-col :span="12">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title"> <a href="#/guanyu/no1/企业理念">企业理念</a></span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title"> <a href="#/guanyu/no1/愿景使命">愿景使命</a></span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title"> <a href="#/guanyu/no1/发展规划">发展规划</a></span>
                  </el-menu-item>
              </el-menu>
            </el-col>
            
    `,
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    
})




Vue.component('navz',{
    template:`
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"> <a href="#/">网站首页</a></el-menu-item>
            <el-submenu index="2">
              <template slot="title"><a href="#/guanyu">关于我们</a></template>
              <el-menu-item index="2-1"><a href="#/texiao/no1/企业理念">企业理念</a></el-menu-item>
              <el-menu-item index="2-2"><a href="#/texiao/no1/愿景使命">愿景使命</a></el-menu-item>
              <el-menu-item index="2-3"><a href="#/texiao/no1/发展规划">发展规划</a></el-menu-item>
            </el-submenu>
            <el-menu-item index="3"> <a href="#/chanpin">产品中心</a></el-menu-item>
            <el-submenu index="4">
              <template slot="title"><a href="#/yanfa">研发中心</a></template>
              <el-menu-item index="2-1"><a href="#/texiao/no1/研发团队">研发团队</a></el-menu-item>
              <el-menu-item index="2-2"><a href="#/texiao/no1/技术力量">技术力量</a></el-menu-item>
              <el-menu-item index="2-3"><a href="#/texiao/no1/研发展望">研发展望</a></el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><a href="#/texiao">特效药品</a></template>
              <el-menu-item index="2-1"><a href="#/texiao/no1/特效药原理">特效药原理</a></el-menu-item>
              <el-menu-item index="2-2"><a href="#/texiao/no1/特效药受众对象">特效药受众对象</a></el-menu-item>
              <el-menu-item index="2-3"><a href="#/texiao/no1/特效药常见问题">特效药常见问题</a></el-menu-item>
            </el-submenu>
            <el-menu-item index="6"> <a href="#/zixun">咨询中心</a></el-menu-item>
            <el-menu-item index="6"> <a href="#/lianxi">联系我们</a></el-menu-item>
          </el-menu>
    `,
    data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
})
