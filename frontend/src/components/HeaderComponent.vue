

<template>
     <header>
          <i class="fas fa-bars"  @click="toggleNav"></i>
          <div class="input-container">
            <input type="text" placeholder="My work place"/>
            <div><i class="fas fa-angle-down"></i></div>
           
          </div>
          <div class="input-container">
            <input type="text" placeholder="Search here"/>
            <div>Search</div>
            
          </div>
          
     </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    data() {
    return {
      isNavOpen: true,

    };
  },
  methods: {
    toggleNav() {
      
      this.isNavOpen = !this.isNavOpen;
      this.$nextTick(() => {
        const navElement = document.querySelector('nav');
        navElement.style.display = this.isNavOpen ? 'block' : 'none';
      });
    },
    checkNavOpenClass() {
    
      const navElement = document.querySelector('#container nav');
      const displayPropertyValue = window.getComputedStyle(navElement).getPropertyValue('display');
      this.isNavOpen =(displayPropertyValue === 'block') ? true: false;

    },
  },
  mounted() {
   
    this.checkNavOpenClass();

  }
}
  
  </script>
  
  <style scoped>
  
  </style>
  