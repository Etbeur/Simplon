var prenom = document.getElementById('chpPrenom');
var nom = document.getElementById('chpNom');
var email = document.getElementById('chpMail');

var gestionnaireContact = {
  contacts:[],
  ajouteContact:function( nom, prenom, mail ){
    console.log('ajout d\'un contact');
    //  créer un objet nouveauContact avec les valeurs transmises
    var nouveauContact = {
      id:this.contacts.length + 1,
      mail:mail,
      nom:nom,
      prenom:prenom
    };

    //  ajoute nouveauContact à contacts
    this.contacts.push(nouveauContact);
    console.log(this.contacts);
    this.afficheContacts();
  },
  // Permet d'afficher la liste des contacts sous le bouton valider
  afficheContacts:function(){
    this.videListe();
    var elementListe = document.getElementById('listeContacts');
    // Pour tous les contacts
    for(var i = 0; i < this.contacts.length; i++){
      var contact = this.contacts[i];
      // crée un élément <li>
      var li = document.createElement('li');
      li.innerText = contact.prenom + " " + contact.nom + " " + contact.mail;
      // // Création d'un boutton 'modifier' à coté de chaque contact
      // var buttonModify = document.createElement('input');
      // buttonModify.type = 'button';
      // buttonModify.setAttribute('id','modify' + i);
      // buttonModify.setAttribute('data-contacts', contact.nom, contact.prenom, contact.mail);
      // buttonModify.value = 'Modify';
      // buttonModify.id = 'modify';
      // buttonModify.addEventListener('click', function(event){
      //   // recupération des données de l'utilisateur
      // });

      //Création d'un bouton 'supprimer' à coté de chaque contact
      var buttonDelete = document.createElement('input');
      buttonDelete.type = 'button';
      buttonDelete.setAttribute('id', 'delete'+ i);
      buttonDelete.setAttribute('data-mail', contact.mail);
      buttonDelete.value = 'Delete';
      buttonDelete.id = "delete";
      buttonDelete.addEventListener('click',function(event){
        // recupération du mail de l'utilisateur associé au boutton supprimer
        var mailDeleted = event.target.dataset.mail;

        //On cherche l'index du mail a supprimer
        var IndexMailToDelete = this.searchIndexMail(mailDeleted);

        // On supprime le contact
        this.deleteContact(IndexMailToDelete);
        console.log('contact deleted, mail is', mailDeleted);
        alert("You have deleted your information");
      }.bind(this));

      // remplir l'élément avec les infos du contact
      elementListe.appendChild(li);

      // // ajout du bouton modifier
      // li.appendChild(buttonModify);
      
      // ajout du bouton supprime
      li.appendChild(buttonDelete);
    }
  },
  // recherche de l'index du mail
  searchIndexMail:function(mail){
    var index;
    for(var i = 0; i < this.contacts.length; i++){
      if(this.contacts[i].mail == mail){
        index = i;
      }
      return index;
    }
  },
  // Crée une nouvelle liste à chaque nouvel ajout pour éviter la répétition en plus de l'ajout
  videListe:function(){
    var elementListe = document.getElementById('listeContacts');
    var elements = elementListe.children;
    for(var j = elements.length - 1; j >= 0; j --){
      elementListe.removeChild(elements[j]);
    }
  },
  // Suppression de contact
  deleteContact: function(itemIndex){
    this.contacts.splice(itemIndex, 1);
    this.afficheContacts();
  }
  // modification d'un contact

};
