const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        count: 0,
        img: '',
        auth: false,
        product: 'sunglasses',
        quantity: 150,
        sale: true,
        users : ['khadijah', 'zainab', 'hafsah', 'aishah']
      }
    },

    methods: {
      incrementCount() {
        this.count++;
        console.log('this.count');
        if (this.count === 10) {
          alert("Count is at 10");
        }
      },

      overTheBox() {
        console.log('Over the green box');
      }
    }
  }).mount('#app')