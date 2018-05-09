<template>
  <div class="soul-drag-control">
    <div class="soul-drag-control__preview">
      <slot name="preview"></slot>
    </div>
  </div>
</template>
<script>

  export default{
    name: 'Control',
    props: {
      controlConfig: [Object],
    },
    mounted(){
      // this.$el.controlConfig = this.controlConfig
      this.$el.setAttribute('draggable', true)
      // this.$el.ondragstart = onDragStart
      // this.$el.ondrag = onDrag
      // this.$el.ondragend = onDragEnd
    }
  }
</script>
<style>
  .soul-drag-control {
    display: inline-block;
    padding: 2px;
    margin: 5px 0 0 5px;
    background-color: #dddee1;
    border-radius: 4px;
}
</style>
