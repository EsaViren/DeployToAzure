/* GET home page */
const ranklist = function(req, res){
    res.render('factions',{
        ranks:
        [
            {mones:'1', faction:'Horde', kilta: 'Ensidia'},
            {mones:'2', faction:'Horde', kilta: 'Stars'},
            {mones:'3', faction:'Alliance', kilta: 'Premonition'},
            {mones:'4', faction:'Horde', kilta: 'Paragon'},
            {mones:'5', faction:'Alliance', kilta: 'Method'}
        ]});
};
module.exports = {
    ranklist
};