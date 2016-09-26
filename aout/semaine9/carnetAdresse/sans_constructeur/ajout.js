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
      // remplir l'élément avec les infos du contact
      elementListe.appendChild(li);
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
};
