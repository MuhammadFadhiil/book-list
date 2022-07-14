<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search Books"
          v-model="keyword"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchBooks"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Books List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(book, index) in books"
          :key="index"
          @click="setActiveBook(book, index)"
        >
          {{ book.title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentBook">
        <h4>Detail Book</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentBook.title }}
        </div>
        <div>
          <label><strong>Authors:</strong></label> {{ currentBook.authors }}
        </div>
        <div>
            <img v-bind:src="currentBook.thumbnail" class="img-thumbnail" alt="..."/>
        </div>
        <button class="btn btn-warning" type="button" @click="addToFav"> Add To Favorite </button>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Book...</p>
      </div>
    </div>
  </div>
</template>
<script>
import BookService from '../service/BookService'
export default {
  name: "books-list",
  data() {
    return {
      books: [],
      currentBook: null,
      currentIndex: -1,
      keyword: ""
    };
  },
  methods: {
    setActiveBook(book, index) {
      this.currentBook = book;
      this.currentIndex = book ? index : -1;
    },
    searchBooks() {
      BookService.findBooks(this.keyword)
        .then(response => {
          this.books = response.data.data;
          this.setActiveBook(null);
          console.log(response.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    addToFav() {
      var index = this.currentIndex;
      var data = {
        title: this.books[index].title,
        authors: this.books[index].authors,
        thumbnail: this.books[index].thumbnail,
      };
      BookService.favBook(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>