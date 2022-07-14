import http from "../http-common";
class BookService {
    findBooks(keyword) {
        return http.get(`/book/${keyword}`);
    }
    favBook(data) {
        return http.post(`/book/favorite`, data);
    }
    getAllFavBooks() {
        return http.get(`/book`);
    }
}
export default new BookService();