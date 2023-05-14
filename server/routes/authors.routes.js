const AuthorController = require('../controllers/authors.controller');

module.exports = (app) => {
    app.get('/', AuthorController.showIndex);
    app.get('/api/authors',AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors/:_id',AuthorController.getAuthorById);
    app.patch('/api/authors/:_id', AuthorController.updateAuthor);
    app.delete('/api/authors/:_id', AuthorController.deleteAuthor);
    
}