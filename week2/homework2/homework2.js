1. db.movieDetails.find({year:2013, rated: "PG-13", 'awards.wins': 0}, {title: 1, _id:0}).pretty()
3. db.movieDetails.find({'countries.1': 'Sweden'}).count()
4. db.movieDetails.find({'genres': ['Comedy', 'Crime']}).count()
5. db.movieDetails.find({'genres': {$all: ['Comedy', 'Crime']}}).count()