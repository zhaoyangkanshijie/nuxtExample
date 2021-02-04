<template>
  <div class="mod-wel">
    <span>index {{ msg }}</span> <span @click="change">hello</span>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Ref,
  Watch
} from 'vue-property-decorator'

@Component({
  layout: 'blog',
  name: 'tsExample'
})
export default class App extends Vue {
    // 初始化数据
    private msg: number = 123;

    @Prop({ type: Number, default: 0 })
    private propA?: number;

    @Prop({ default: 'default value' })
    private propB?: string;

    @Prop([String, Boolean])
    private propC?: string | boolean;

    @Watch('msg')
    onChildChanged (val: string, oldVal: string) {
      console.log(val, oldVal)
    }

    @Emit('delemit') private delEmitClick (event: MouseEvent) {}

    @Ref('aButton') readonly ref!: HTMLButtonElement;

    // 声明周期钩子
    mounted () {
      this.greet()
    }

    // 计算属性
    get computedMsg () {
      return 'computed ' + this.msg
    }

    // 方法
    public greet () {
      console.log('greeting: ' + this.msg)
    }

    public change () {
      this.msg = 789
    }
}
</script>
<style scoped>
.mod-wel {
  padding: 100px;
  text-align: center;
}
</style>
