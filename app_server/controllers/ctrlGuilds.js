/* GET home page */
const ranklist = function(req, res){
    res.render('guilds',{
        ranks:
        [
            {mones:'1', kilta:'Ensidia'},
            {mones:'2', kilta:'Stars'},
            {mones:'3', kilta:'Premonition'},
            {mones:'4', kilta:'Paragon'},
            {mones:'5', kilta:'Method'}
        ]});
};
module.exports = {
    ranklist
};