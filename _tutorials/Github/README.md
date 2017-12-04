<img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" height="100px">

# Git, c'est magique !

Bonjour !

Je vais expliciter ici, les commandes et ce qui s'est passé durant le cours précédent. J'espère que vous comprendrez mieux, et je suis à votre disposition pour toutes vos questions :D

  * **[Git](https://git-scm.com/)** est un _logiciel de gestion de version de fichier_. Il garde en mémoire l’ensemble des ajouts/retrait apportées à un ou plusieurs fichiers. La nature open-source et la légèreté d’utilisation de ce logiciel le rend très populaire dans le milieu du développement. Dans la pratique, ce logiciel permet d’éviter les duplicatas, de retrouver des anciennes versions. En gros, c’est de l’organisation potentielle.

  * **[GitHub](https://github.com/)** est une plateforme en ligne proposant un _service de stockage_. Son interface et ses restrictions sont basées sur “git”. Comme pour les ICloud, dropBox, GoogleDrive, il existe plusieurs plateforme de ce genre, par exemple Gitlab, Gitbucket... Une porte ouverte à la collaboration, à l’indépendance vis à vis du poste de travail.

Dans le cadre de Pratique Algorithmique, nous utilisons **Github**. Un "**[repository](https://github.com/PratiquesAlgorithmiques/_PA_2017-18)**" existe déjà. :)

Un **repository** (surnommé **"Repo"**) est une zone de stockage réservée sur les serveurs de **Github**.

Nous avons donc d’une part un logiciel et d’autre part une plateforme de partage.

Pour les utilisateurs de windows, je conseille d'installer **[git bash](https://git-for-windows.github.io/)**.
Cela permet de partager un vocabulaire commun (entre mac et pc), si nous utilisons la console.

## La console...

  >...c'est une grosse boite dans laquelle tu peux entrer des formules magiques permettant d'effectuer des actions.
  
  >...c'est un programme très basique et très proche du système.
  
  >...une boite de texte ou tu peux entrer des commandes qui affichent ses résultats uniquement en texte.
  
  >...C'est une façon de parler à l'ordinateur pour lui demander d'effectuer des actions.

De base, elle ressemble à ça :

<img src="http://static5.businessinsider.com/image/56fc286452bcd024008b9bdf-562-422/bash_screenshot.png" width="500px">

Et elle est très puissante !

Il ne faut donc pas faire n'importe quoi avec et ne surtout pas recopier une commande trouvé sur internet sans la comprendre. Méfiez-vous des facétieux et surtout de la commande **rm** (pour *ReMove*, elle supprime définitivement ce qu'on lui passe en argument sans passer par la corbeille (0_0))!

## Petit lexique des formules magiques du terminal :

  * **pwd** : signifie *Print Working Directory*. Elle indique l'endroit où l'on se trouve dans l'architecture de dossier. Elle est très utile pour se repérer.

  * **ls** : pour *LiSt*. Utlisé sans option, elle permet de lister les fichiers et les dossiers à l'endroit où l'on se trouve. Avec l'option -a, les fichiers "cachés" sont aussi listé.

  * **cd** : *Change Directory*. Une fois que nous avons les outils pour se repérer dans l'architecture du systeme, nous pouvons nous déplacer ! **cd** nous amène vers le dossier indiqué en argument. **"cd .."** pour aller en arrière (".." signifie dossier précédent et "." dossier actuel) et un **"cd"** tout simple pour revenir au *"home"*, le point de depart. 

<img src="https://www.pcsuggest.com/wp-content/uploads/2017/08/cd_command_example.png" width="500px">

Pour toutes les commandes, il y a un manuel. Il suffit de taper **man** avant la commande et de lire le gros pavé. (ex: **"man ls"**)

(Et puis pour entrer une commande, il suffit de l'écrire et d'appuyer sur la touche "entrée".)

Voilà pour les commandes de base. \(^-^)/

## Git tout simplement !

Je parlerai ici des commandes pour une utilisation très basique de **Git**. Une utilisation avec une seule branche : la branche "master" en local, c'est à dire sur votre machine. Nous pouvons retrouver ses commandes sur sublime Text, elles font plus ou moins la même chose avec plus ou moins de souplesse.

 * **git init** : Initialise un dépot git, transforme un dossier normal en un dossier gérer par le gestionnaire de version git. un ".git" va se greffer dans le dossier. Cette commande est a entrer dans le dossier que vous voulez transformer en dépot.
  
 * **git status** : Permet d'avoir un aperçu l'état du dépot.
   * *Les fichiers "untracked"* ne sont pas recensé dans le depot git. Ce dernier n'a donc aucune idée de ce qu'ils sont et ne possède pas d'historique pour ces derniers.
   * *Les fichiers "modified"* sont les fichiers recensés et modifiés entre le dernier "commit" (une photo) et l'état actuel non sauvagardé du dépot.
   
 <img src="./img/git_status.png" width="500px">
   
 * **git add** : Permet d'ajouter des *untracked* ou des *modified* sur le stage, c'est... comme prendre des objets et les installer sur une table pour faire une photo. Nous pouvons dire que les fichiers prennent la pose.
 
 * **git commit** : cette commande permet de faire la photo. C'est à dire enregistrer l'état actuel du dépot. Elle est à utiliser l'argument -m comme ceci :
 ```
 git commit -m "message blablabla"
 ```
 Le message entre guillemet accompagnera le commit toute sa vie ( ou presque :D ). Il est conseillé de faire des messages explicites.
 
  * **git log** : Affiche l'historique de tous les commits qu'il y a eu. Cette commande est très utile lorsque nous voulons revenir en arrière. (Pour en sortir, il faut appuyer sur la touche "q").
  
```
La routine habituelle :

-> Ouvrir votre console préférée (terminal, iterm, git bash, powershell...).
-> Aller dans le dossier avec 'cd' ou bien glisser/deposer le dossier dans la fenêtre de la console.
-> 'git init'.
-> 'git add' des fichiers. ( '*' permet de selectionner tous les fichiers dans le dossier actuel )
-> 'git commit -m "message du premier commit"'
-> et voilà, un petit dépot avec une premiere sauvegarde ! :)

Vous pouvez faire un 'git status' entre chaque étape. et un 'git log' a la fin.

```
  
## GitHub !



Bientôt dans les nuages (git remote add, git pull, git push, git fetch, les forks et les pull request). 

## Plusieurs versions, plusieurs branches

La fin des v1, v2, v3 même si c'est moins ludique. (git checkout, git branch, git merge..)

## Bonus : les sous-modules

Pour aller vraiment partout (git submodule.)
