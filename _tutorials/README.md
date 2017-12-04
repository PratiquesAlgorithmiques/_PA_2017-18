<img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" height="100px">

# Git, c'est magique !

Bonjour !

Je vais expliciter ici, les commandes et ce qui s'est passé durant le cours précédent. J'espère que vous comprendrez mieux, et je suis à votre disposition pour toutes vos questions ! :p

  * **[Git](https://git-scm.com/)** est un _logiciel de gestion de version_. Cela consiste à garder en mémoire l’ensemble des ajouts/retrait apportées à un ou plusieurs fichiers. La nature open-source et la légèreté d’utilisation de ce logiciel le rend très populaire dans le milieu du développement. Dans la pratique, ce logiciel permet d’éviter les duplicatas, de retrouver des anciennes versions. En gros, c’est de l’organisation potentielle.

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

  * **pwd** : signifie *Print Working Directory*. Elle indique l'endroit où l'on se trouve. Elle est très utile pour se repérer.

  * **ls** : pour *LiSt*. Utlisé sans option, elle permet de lister les fichiers et les dossiers à l'endroit où l'on se trouve. Avec l'option -a, les fichiers "cachés" sont aussi listé.

  * **cd** : *Change Directory*. Une fois que nous avons les outils pour se repérer dans l'architecture du systeme, nous pouvons nous déplacer ! **cd** nous amène vers le dossier indiqué en paramètre. **"cd .."** pour aller en arrière (".." signifie dossier précédent et "." dossier actuel) et un **"cd"** tout simple pour revenir au *"home"*, le point de depart. 

<img src="https://www.pcsuggest.com/wp-content/uploads/2017/08/cd_command_example.png" width="500px">

Pour toutes les commandes, il y a un manuel. Il suffit de taper **man** avant la commande et de lire le gros pavé. (ex: **"man ls"**)

(Et puis pour entrer une commande, il suffit de l'écrire et d'appuyer sur la touche "entrée".)

Voilà pour les commandes de base. \(^-^)/

## Git tout simplement !

Je parlerai ici des commandes pour une utilisation très basique de **Git**. Une utilisation avec une seule branche : la branche "master" en local, c'est à dire sur votre machine.

  * **git init** : Initialise un dépot git. Ceci est a faire dans le dossier que vous voulez transformer en dépot.
  
  * **git init** : Initialise un dépot git. Ceci est a faire dans le dossier que vous voulez transformer en dé
  
  * **git status** : Permet d'avoir un aperçu l'état du dépot. 
  
  * **git add** : 

