#page home

- encart défi -> faire une table de liaison - données temporaires
- encart dernier jeux -> table de liaison 'friends' - populate with name and avatar + the last game (get the last saved from player list)
- encart dernier jeux enregistré -> get the last saved from player list (first img, name, desc, note)

#calendar

- request to take the games with date of creation (15 days before - no limit after - limit of 10-15 after with reload when display of new after the end)

#research

- same system as calendar (limit of 10-15 and when the last item, display 10-15 new items)

#account

- data have to be put in redux (user, favorites and stats) when auth

parameters - put the update user / password query

add a loading spinner on all the query

tout ce qui en rapport avec les jeux : carte et page - rajouter un populate dans la query avec note + status du jeux si l'utilisateur l'a dans sa liste. (pas convaincu)

rajouter dans userGameList un champ averageNote et un array averageStatus avec le nombre de complete, etc...

Quand on ajoute ou mets un nouveau champs, il faudra executer une fonction async dans lapi qui récupère toutes les notes et calcul l'average, pour les status, elle peut simplement regarder quel status le nouveau jeux a et l'incrémenter.

#API

##CE WEEK-END :

- IMPORTANT : faire truc sopika
- réfléchir et mettre en place système d'auth
- faire encart défi

##CE SOIR (par priorité) :

- encart dernier jeux (home) -> à finir
- calendar + research
- averageNote
- commencer redux (si le temps)
