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
        first_name: 'John',
        last_name: 'Doe',
        color: "green",
        text: "",
        checked: true,
        comment: null,
        comments: [],
        error: null,
        users : [
          {
            id: 567,
            name: "Khadijah",
            position: "One"
          },
          {
            id: 568,
            name: "Aishah",
            position: "Two"
          },
          {
            id: 569,
            name: "Zainab",
            position: "Three"
          },
          {
            id: 570,
            name: "Hafsah",
            position: "Four"
          }
        ]
      }
    },

    computed: {
      getRandomComputed() {
        return Math.random();
      },
      
      getFullName() {
        return `${ this.first_name } ${ this.last_name }`;
      },

      reversedFullName() {
        let first = this.first_name.split("").reverse().join("");
        let last = this.last_name.split("").reverse().join("");
        return `${ first } ${ last }`
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
      },

      getRandomNumber() {
        return Math.random();
      },

      onSubmit() {
        if (this.comment ) {
          let newComment = this.comment;
          this.comments.push(newComment);
          this.comment = null;

          if (this.error) {
            this.error = null;
          }
          
        } else {
          this.error = 'The comment field cannot be empty';
        }
      }
    }
  }).mount('#app')