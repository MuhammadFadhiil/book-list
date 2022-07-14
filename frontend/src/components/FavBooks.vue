<template>
    <div class="p-4">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Authors</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book, index) in books" :key="index">
                <td v-text="book.title"></td>
                <td v-text="book.authors"></td>
                <td>
                    <img v-bind:src="book.thumbnail" class="img-fluid img-thumbnail" alt="Sheep" />
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import BookService from '../service/BookService'
export default {
  name: "books-favorite",
  data() {
    return {
      books: [],
    };
  },
  methods: {
    retrieveBooks() {
      BookService.getAllFavBooks()
        .then((response) => {
          this.books = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveBooks();
    },
  },
  mounted() {
    this.retrieveBooks();
  },
};
</script>
<style>
.list {
  max-width: 750px;
}
</style>