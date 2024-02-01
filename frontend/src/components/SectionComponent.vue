

<template>
    <HeaderSettingComponent/>
    <CoreSettingComponent/>
  </template>
  
  <script>
  import HeaderSettingComponent from './SectionComponents/HeaderSettingComponent.vue';
  import CoreSettingComponent from './SectionComponents/CoreSettingComponent.vue';
  export default {
    name: 'SectionComponent',
    components:{
      HeaderSettingComponent,
      CoreSettingComponent
    }
  }
  </script>
  
  
  