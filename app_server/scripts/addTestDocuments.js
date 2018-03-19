db.dropDatabase();

db.guilds.save(
    [
        {mones:'1', kilta:'Ensidia'},
        {mones:'2', kilta:'Stars'},
        {mones:'3', kilta:'Premonition'},
        {mones:'4', kilta:'Paragon'},
        {mones:'5', kilta:'Method'}
    ]
);

db.factions.save(
    [
        {mones:'1', faction:'Horde', kilta: 'Ensidia'},
        {mones:'2', faction:'Horde', kilta: 'Stars'},
        {mones:'3', faction:'Alliance', kilta: 'Premonition'},
        {mones:'4', faction:'Horde', kilta: 'Paragon'},
        {mones:'5', faction:'Alliance', kilta: 'Method'}
    ]
);