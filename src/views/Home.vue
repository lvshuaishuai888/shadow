<template>
  <div>
    <my-add></my-add>
    <my-sub></my-sub>
  </div>
</template>

<script>
import Add from '../components/add'
import Sub from '../components/sub'
export default {
    data () {
        return {
            num: 0
        }
    },
    components: {
        'my-add': Add,
        'my-sub': Sub
    }
}
</script>
