const Author = require ("../models/authors.model");



module.exports = {
    showIndex : (req,res) => {
        res.json({
            message:"Welcome to the Authors Page!"
        })
    },
    createAuthor: (req,res) => {
        Author.create(req.body)
                .then(newAuthor => res.json(newAuthor))
                .catch (err => res.status(400).json({message:"Something went wrong",error:err}));
            },
    getAuthorById : (req,res) => {
        Author.findOne({_id:req.params._id})
            .then((oneAuthor) => {res.json(oneAuthor)})
            .catch((err) => {res.json({message:'Something went wrong',error:err})});
            },
    getAllAuthors : (req,res) => {
        Author.find()
            .then((allAuthors) =>{res.json(allAuthors)})
            .catch((err) => {res.json({message: 'Something went wrong',error:err})});
            },
    updateAuthor : (req,res) => {
        Author.findOneAndUpdate({_id:req.params._id},req.body,{new:true, runValidators:true})
            .then(updatedAuthor => {res.json(updatedAuthor)})
            .catch((err) => {res.status(400).json({message:'Something went wrong',error:err})});
            },
    deleteAuthor : (req,res) => {
        Author.deleteOne({_id:req.params._id})
            .then(result => {res.json(result)
                })
            .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });
            }
}