<script setup>
import store from './store/index.js'

const incr =()=>{
  //同步或异步都可以调用
  //store.dispatch('increment');
  //只能同步
store.commit('INCREMENT')
};
const deincr =()=>{
  //同步或异步都可以调用
  //store.dispatch('deincrement')
  //仅同步调用
store.commit('DEINCREMENT')
};
const asynincr=(num)=>{
  //store.commit('ASYNINCREMENT')
  store.dispatch('asynincrement',num)
};
</script>

<template>
  <div>
    <h2>当前值:{{$store.state.count}}</h2>
    <button @click="incr">增加</button><br>
    <button @click="deincr">减少</button><br>
    <button @click="asynincr(100)">异步扩大100倍</button>
   
  </div>
</template>

<style>

</style>
