<template>
  <div class="home">
      <vue-demo></vue-demo>
    <!-- <div @click="btn">点击</div> -->
    <!-- <component v-bind:is="'HelloWorld'" title="1111">
        <template v-slot:header="{text}">
            头部{{text}}
        </template>
    </component> -->
    
    <router-link to="/jsx">jsx</router-link>
    <router-link to="/source">源码区</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
      return {
          dd: "left"
      }
  },
  directives: {
      focus: {
          inserted(el,binding,vnode){
              console.log(el)
              console.log(binding)
              console.log(vnode)
              if(binding.modifiers.a){
                  el.innerHTML ="women"
              }else{
                  el.innerHTML=binding.value;
                  el.style.color = binding.value.color;
              }
              
              el.focus()
          }
      },
      ee(el,binding){
          el.innerHTML = binding.value;
      }
  },
  methods: {
      btn() {
          
      }
  },
}
</script>
