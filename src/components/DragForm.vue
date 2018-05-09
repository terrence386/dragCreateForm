<template>
  <div>
    <Layout>
        <Header>Header</Header>
        <Layout>
            
            <Sider hide-trigger id="dragArea">
                <Collapse v-model="open" :key="index" v-for="(item, index) in stayDrag">
                <Panel :name="index+1+''">
                  {{item.name}}
                  <p slot="content" class="index-layout-content__class" >
                    <Control
                      v-for="(child,childIdex) in item.controls"
                      
                      :key="childIdex">
                      <div slot="preview" >
                        <MenuItem
                          :name="childIdex + '-' + childIdex">{{child.name}}
                        </MenuItem>
                      </div>
                    </Control>
                  </p>
                </Panel>
              </Collapse>
            </Sider>
            <Content id="dropArea">
            </Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
import Control from './control.vue'
import { drag } from '../utils/drag'
export default {
  name: 'DragForm',
  components:{
    Control
  },
  data () {
    return {
      open:'1',
      msg: 'Welcome to Your Vue.js App',
      stayDrag:[
          {
            name:'Layout',
            controls:[
              {name:'Row'},
              {name:'Col'},
              {name:'Card'},
              {name:'Tabs'},
              {name:'TabPane'}
            ]
          },
          {
            name:'Form',
            controls:[
              {name:'Input'},
              {name:'FormItem'},
              {name:'Select'},
              {name:'Radio'},
              {name:'Checkbox'},
              {name:'Upload'},
              {name:'DatePicker'},
              {name:'TimePicker'},
              {name:'InputNumber'},
              {name:'Form'},
              {name:'Buttom'}
            ]
          }
        ]

    }
  },
  mounted(){
    console.log('drag',drag)
    console.log(typeof drag)
    let test = {
      dragArea:"dragArea",
      dropArea:"dropArea"
    }
    drag(test)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#dragArea{
  height:100%;
}
</style>
