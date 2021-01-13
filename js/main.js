console.log("test1");

var dataUser = [{
        "adr_mail": "foulenbenfoulen@gmail.com",
        "pw": "Azerty12",
        "nom": "ben Foulen",
        "prenom": "Foulen",
        "index": 0
    },
    {
        "adr_mail": "admin@gmail.com",
        "pw": "Admin12",
        "nom": "administrateur",
        "prenom": "admin",
        "index": 1
    },
    {
        "adr_mail": "user@gmail.com",
        "pw": "User12",
        "nom": "Useur",
        "prenom": "user",
        "index": 2
    }

]

var dataBoards = [{
        "index": 0,
        "titel": "Avant de voyager",
        "nbTach": 3,
        "nomTableau": "voyager",
        "img": "res/voyager.jpeg"

    },
    {
        "index": 1,
        "titel": "Projet demo",
        "nbTach": 4,
        "nomTableau": "demo",
        "img": "res/demo.png"
    },
    {
        "index": 2,
        "titel": "Equipe Feras",
        "nbTach": 5,
        "nomTableau": "Feras",
        "img": "res/feras.jpg"
    },
    {
        "index": 3,
        "titel": "HR",
        "nbTach": 3,
        "nomTableau": "HR",
        "img": "res/hr.jpg"
    },
    {
        "index": 4,
        "titel": "IT",
        "nbTach": 3,
        "nomTableau": "IT",
        "img": "res/it.jpg"
    },
    {
        "index": 5,
        "titel": "Equipe Lina",
        "nbTach": 4,
        "nomTableau": "Lina",
        "img": "res/lina.jpg"
    },
    {
        "index": 6,
        "titel": "Marketing",
        "nbTach": 3,
        "nomTableau": "Marketing",
        "img": "res/Marketing.jpg"
    },
    {
        "index": 7,
        "titel": "Equipe de relations publiques",
        "nbTach": 3,
        "nomTableau": "publiques",
        "img": "res/publiques.jfif"
    },
    {
        "index": 8,
        "titel": "VENTES",
        "nbTach": 4,
        "nomTableau": "VENTES",
        "img": "res/VENTES.jpg"
    },
    {
        "index": 9,
        "titel": "Equipe des médias sociaux",
        "nbTach": 4,
        "nomTableau": "sociaux",
        "img": "res/medias.webp"
    },
    {
        "index": 10,
        "titel": "développement de site Web",
        "nbTach": 3,
        "nomTableau": "web",
        "img": "res/web.jpg"
    }

]
var arryMembres = ["res/img0.png", "res/img1.png", "res/img2.png", "res/img3.png"]
var arryEtiquette = ["list-group-item list-group-item-action text-white bg-primary", "list-group-item list-group-item-action text-white bg-secondary",
    "list-group-item list-group-item-action text-white bg-success ", "list-group-item list-group-item-action text-white bg-danger",
    "list-group-item list-group-item-action text-white bg-warning", "list-group-item list-group-item-action text-white bg-info",
    "list-group-item list-group-item-action text-white bg-dark"
]
var arryTxtEtiquette = ["Fini", "En attente", "Validation", "Urgent", "Bug", "Information"]
    // *********************************************************
var lst = "";
var tach = "";
var color = "";
// *********************************************************
const connection = document.getElementById("connection");
const inscrire = document.getElementById("inscrire");
const page_Inscription = document.getElementById("page_Inscription");
const txtDate = document.getElementById("txtDate");
const idList = document.getElementById("list")
const btn = document.getElementById("btnClose");


if (btn) {
    btn.onclick = function() {
        var modal = document.getElementById("Members");
        modal.style.display = "none";
        tache(tach, lst);
    }
}


function ListMembres(a) {
    console.log(a);
}





// *********************************************************************************************************
//                                         CONNECTION-Inscription
// *********************************************************************************************************
if (page_Inscription) {
    page_Inscription.addEventListener("submit", function(e) {
        e.preventDefault();
        window.location.href = "inscrire.html";
    })
}
// *************************************************************
if (connection) {
    connection.addEventListener("submit", function(e) {
        e.preventDefault();
        var coordonnees = JSON.parse(localStorage.getItem('coord'));
        var Email = document.getElementById("inputEmail").value;
        var Password = document.getElementById("inputPassword").value;



        for (var i = 0; i < dataUser.length; i++) {
            if ((Email === dataUser[i].adr_mail && Password === dataUser[i].pw)) {
                window.location.href = "projet.html";
            } else if (coordonnees != null) {
                if ((coordonnees.Password === Password && coordonnees.Email === Email)) {
                    window.location.href = "projet.html";
                }
            } else {
                document.getElementById("erreur").innerHTML = "Identifiant ou Mot de passe incorrect";
            }
        }
    });
}
// *************************************************
if (inscrire) {
    inscrire.addEventListener("submit", function(e) {
        e.preventDefault();

        document.getElementById("erreur").innerHTML = "";
        var pwc = document.getElementById("inputPasswordC").value;
        var pw = document.getElementById("inputPassword").value;
        var coordonnees = {
            nom: document.getElementById("inputName").value,
            prenom: document.getElementById("inputUsername").value,
            Email: document.getElementById("inputEmail").value,
            Password: document.getElementById("inputPassword").value,
        };
        document.getElementById("erreur").innerHTML = "";
        if (pw !== pwc) {

            document.getElementById("erreur").innerHTML = "Le mot de passe  ne correspond pas au mot de passe défini";
        } else {
            localStorage.setItem('coord', JSON.stringify(coordonnees));
            window.location.href = "projet.html";
        }
    })
}
// *********************************************************************************************************
//                                        Afficher Tous Les Projets
// *********************************************************************************************************

function affichageTousProjet() {
    var html = [];
    html.push(`
    <h5 class="card-title text-secondary">My boards</h5>
    <hr class="my-4 border-info">
    <div id="projetAll">
    `)
    for (var i = 0; i < dataBoards.length; i++) {
        html.push(`
        
        <a href="#" class="list-group-item list-group-item-action">
        <div class="card bg-light text-dark">
            <img class="card-img" src="${dataBoards[i].img}" alt="Card image">
            <div class="card-img-overlay">
                <h5 class="card-title">${dataBoards[i].titel}</h5>
            </div>
        </div>
    </a> 
    
        `)
    }
    html.push(`
    <a href="#exampleModalLong" class="list-group-item list-group-item-action list-group-item-dark" data-toggle="modal" >
        <div class="card-img-overlay">
            <h5 class="card-title">Créer un nouveau tableau...</h5>
        </div>
    </a></div>
    `)
    document.getElementById("projet").innerHTML = html.join("");

}
// *********************************************************************************************************
//                                        Afficher Un Projet
// *********************************************************************************************************


function indexTableau(a) {
    localStorage.setItem('indexPojet', JSON.stringify(a));
}

// *********************************************************************************************************
//                                        stocker nom de projet
// *********************************************************************************************************
function nouveauTableau() {

    var nomTableau = document.getElementById("nTableau");

    if (nomTableau.value === null || nomTableau.value === "") {
        var alert = document.getElementById("alert");
        alert.setAttribute('class', 'alert alert-warning');
        document.getElementById("alert").innerHTML = "Vous n’avez pas rempli votre titre du tableau";
    } else {

        localStorage.setItem("NomTableau", JSON.stringify(nomTableau.value));
        window.location.href = "newTableau.html";
    }

}
// *********************************************************************************************************
//                                        affichet New projet
// *********************************************************************************************************

function newPoejet() {
    if (idList) {
        var nomPojet = JSON.parse(localStorage.getItem('NomTableau'));
        var html = [];

        html.push(`
    <h5 class="card-title">${nomPojet}</h5>
    <hr class="my-4">
    <div class="card border-info"> 
        <div class="card-body">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control border-info" id="newList" placeholder="ajouter une liste...">
                </div>
                <div id="alertList"></div>
            </form>
            <button type="submit" class="btn btn-outline-info"  onclick="newList()">Enregistrer</button>

        </div>
        <ul class="list-group list-group-flush" id="tache">
        </ul>
    </div>

        `)

        document.getElementById("list").innerHTML = html.join("");
    }
}
// *********************************************************************************************************
//                                        affichet New List
// *********************************************************************************************************

function newList() {
    var nomTach = document.getElementById("newList");
    if (nomTach.value === null || nomTach.value === "") {
        var alert = document.getElementById("alertList");
        alert.setAttribute('class', 'alert alert-warning');
        document.getElementById("alertList").innerHTML = "Vous n’avez pas rempli votre titre du liste";
    } else {

        listNumbers(nomTach.value)
    }
}


function listNumbers(l) {
    let listNumbers = localStorage.getItem('listNumbers');
    listNumbers = parseInt(listNumbers);
    if (listNumbers) {
        localStorage.setItem('listNumbers', listNumbers + 1);

        list(l);
        chargement();
    } else {
        localStorage.setItem('listNumbers', 1);

        list(l);

        chargement();
    }
}

function chargement() {
    if (idList) {

        var nomTableau = JSON.parse(localStorage.getItem('NomTableau'));
        var listNumbers = JSON.parse(localStorage.getItem('listNumbers'));

        let tache = localStorage.getItem('listeTache');
        tache = JSON.parse(tache);
        var html = [];
        html.push(`<h5 class="card-title text-secondary"> ${nomTableau}</h5><hr class="my-4 border-info"><div class="afficheList">`)
        var x = 0;
        Object.values(tache).map(item => {
            let tache = localStorage.getItem(item);
            tache = JSON.parse(tache);

            html.push(`
        <div class="card bg-light" >
            <div class="card-header">
                <h5 class="card-title text-secondary">${item}</h5>
                <button type="button" class="close" onclick="supliste('${item}')">
                <span>&times;</span>
              </button>          
              
              </div>
            <div class="card-body text-info">
            <ul class="list-group list-group-flush tasks" id="tache${item}" ondrop="drop(event)" ondragover="allowDrop(event)"> `)

            if (tache != null) {
                Object.values(tache).map((t, index) => {

                    html.push(`
                </li> <li class="list-group-item text-secondary task" draggable="true" ondragstart="drag(event)" id='task${index}${item}'> 
                <a href="#myModal"  data-toggle="modal" onclick="tache('${t}','${item}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                </a> ${t}
               <button type="button" class="close" data-dismiss="modal" style="color: #17a2b8;" onclick="supTache('${item}','${t}')">×</button>
                 `)

                    var m = "Membre" + item + t;
                    var d = "date" + item + t;
                    var c = "Color" + item + t;
                    var h = "checklist" + item + t;

                    var itemMembre = localStorage.getItem(m);
                    var itemColor = localStorage.getItem(c);
                    var itemChecklist = localStorage.getItem(h);
                    var itemDate = localStorage.getItem(d);

                    if (itemColor != null) {
                        html.push(`<hr class="row ${arryEtiquette[itemColor]}">`)
                    }
                    if (itemChecklist != null) {

                        html.push(`
                    <div class="row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                  </svg>&nbsp
                  ${itemChecklist}</span>
                  </div>
                  <ul class="list-group">
                  `)
                        var chK = itemChecklist + item + t;
                        var Checklist = localStorage.getItem(chK);
                        Checklist = JSON.parse(Checklist);
                        var cked = chK + "checked";
                        var ChecklistChecked = localStorage.getItem(cked);
                        ChecklistChecked = JSON.parse(ChecklistChecked);
                        if (Checklist != null) {
                            Object.values(Checklist).map(c => {
                                var i = 0;
                                var b = false;
                                if (ChecklistChecked != null) {
                                    Object.values(ChecklistChecked).map(z => {
                                        if (c == z) {
                                            b = true;
                                        }
                                    });
                                    if (b) {

                                        html.push(`
                                    <li  class="list-group-item list-group-item-action" id="tableauLI">

                                <div class="media">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                <path d="M8.354 10.354l7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                              </svg>&nbsp
                                    <div class="media-body">
                                        <p>  ${c} </p>

                                    </div>
                                </div>

                            </li>              
                                         `)
                                    } else {
                                        html.push(`
                                    <li  class="list-group-item list-group-item-action" id="tableauLI">

                                    <div class="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                    <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
                                  </svg>&nbsp
                                        <div class="media-body">
                                            <p>  ${c} </p>
    
                                        </div>
                                    </div>
    
                                </li>    
                                     `)
                                    }



                                } else {

                                    html.push(`
                                <li  class="list-group-item list-group-item-action" id="tableauLI">

                                <div class="media">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
                              </svg>&nbsp
                                    <div class="media-body">
                                        <p>  ${c} </p>

                                    </div>
                                </div>

                            </li>`)



                                }
                                i++;
                            });
                        }

                        html.push(`</ul>
                    `)

                    }
                    if (itemDate != null) {

                        html.push(`
                 
                    <div class="row" id="rowDate">${itemDate}</div>
                    `)

                    }

                    if (itemMembre != null) {
                        itemMembre = JSON.parse(itemMembre);
                        html.push(`
                   
                    <div class="row" id="tableauBImg">
                    `)
                        Object.values(itemMembre).map(m => {
                            html.push(`
                          <img src="${arryMembres[m]}" alt="" style="width:30px;">
                            `)
                        });
                        html.push(`</div>
                    `)

                    }
                });

            }
            html.push(`</ul>
            <hr class="my-4">
            `)


            if (x < 1) {
                html.push(`  
                <form>
                    <div class="form-group">
                    <input type="text" class="form-control border-info" id="newTach${item}" placeholder="ajouter une tâche...">
                    </div>
                    <div id="alertTach${item}"></div>
                </form>
                
                <button type="button" class="btn btn-outline-info" onclick="newTach('${item}')">Ajouter</button>
         `)
            }
            x = x + 1;

            html.push(`</div>
            </div>
            `)
        });

        if (listNumbers < 6) {

            html.push(`
                <div class="card border-info" id="nvCard">
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control border-info" id="newList" placeholder="ajouter une liste...">
                            </div>
                            <div id="alertList"></div>
                        </form>
                        <button type="submit" class="btn btn-outline-info" onclick="newList()">Ajouter</button>
                    </div>
                </div>
                </div>
                `)
        }

        document.getElementById("list").innerHTML = html.join("");


    }
}

function list(l) {
    let tache = localStorage.getItem('listeTache');
    tache = JSON.parse(tache);
    if (tache != null) {
        tache = {
            ...tache,
            [l]: l
        }
    } else {
        tache = {
            [l]: l
        }
    }
    localStorage.setItem("listeTache", JSON.stringify(tache));
}

function listTache(a, b) {
    let tache = localStorage.getItem(b);
    tache = JSON.parse(tache);
    if (tache != null) {
        tache = {
            ...tache,
            [a]: a
        }
    } else {
        tache = {
            [a]: a
        }
    }
    localStorage.setItem(b, JSON.stringify(tache));
}
// ****************************************************************************************************
//                                       New-tache
// ****************************************************************************************************
function newTach(t) {
    var idA = "alertTach" + t;
    var id = "newTach" + t;
    // var idUL = "tach" + t;
    var nomTach = document.getElementById(id).value;

    if (nomTach === null || nomTach === "") {
        var alert = document.getElementById(idA);
        alert.setAttribute('class', 'alert alert-warning');
        document.getElementById(idA).innerHTML = "Vous n’avez pas rempli votre titre du liste";
    } else {

        listTache(nomTach, t);
        chargement();
    }
}
// ****************************************************************************************************
//                                       parametre-tache
// ***************************************************************************************************
function tache(t, l) {
    var m = "Membre" + l + t;
    var d = "date" + l + t;
    var c = "Color" + l + t;
    var h = "checklist" + l + t;

    document.getElementById("infoMombre").innerHTML = "";
    document.getElementById("infoDate").innerHTML = "";
    document.getElementById("infoEtiquette").innerHTML = "";
    document.getElementById("infoChecklist").innerHTML = "";

    var itemMembre = localStorage.getItem(m);
    var itemColor = localStorage.getItem(c);
    var itemChecklist = localStorage.getItem(h);

    var html = [];
    var html1 = [];
    var htmlM = [];
    var htmlD = [];
    var htmlC = [];
    var htmlH = [];
    lst = l;
    tach = t;

    html.push(`<h5 class="modal-title">${t}</h5>
                dans la liste ${l}
             `)

    html1.push(`
    <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#Members" onclick="chargerListMembres()">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
      </svg>
    Membres
</button>

<button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#calenderier" >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>
        Date d'échéance
</button>

<button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#Etiquettes">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
        <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
        <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586l7 7L13.586 9l-7-7H2v4.586z"/>
      </svg>
    Étiquettes
</button>

<button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#addchecklist">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
      </svg>
    Checklist
</button>


    `)
    if (itemMembre != null) {
        itemMembre = JSON.parse(itemMembre);
        htmlM.push(`
        <div class="row"> Membres</div>
        <hr >
        <div class="row">
        `)
        Object.values(itemMembre).map(m => {
            htmlM.push(`
              <img src="${arryMembres[m]}" alt="" style="width:30px;">
                `)
        });
        htmlM.push(`</div>
        `)
        document.getElementById("infoMombre").innerHTML = htmlM.join("");
    }
    var itemDate = localStorage.getItem(d);

    if (itemDate != null) {

        htmlD.push(`
        <div class="row"> Date d'echéance </div>
        <hr >
        <div class="row">${itemDate}</div>
        `)
        document.getElementById("infoDate").innerHTML = htmlD.join("");
    }
    if (itemColor != null) {
        itemColor = JSON.parse(itemColor);

        htmlC.push(`
        <div class="row"> Etiquette</div>
        <hr >
        <div class="row">
        <li class="${arryEtiquette[itemColor]}" id="colorList" >${arryTxtEtiquette[itemColor] } 
                                    </li>
                                    </div>
        `)
        document.getElementById("infoEtiquette").innerHTML = htmlC.join("");
    }
    if (itemChecklist != null) {

        htmlH.push(`
        <div class="row">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
      </svg>&nbsp
      ${itemChecklist}</span>
      </div>
      
     
       
       `)
        var chK = itemChecklist + l + t;
        var Checklist = localStorage.getItem(chK);
        Checklist = JSON.parse(Checklist);
        var cked = chK + "checked";
        var ChecklistChecked = localStorage.getItem(cked);
        ChecklistChecked = JSON.parse(ChecklistChecked);
        if (Checklist != null) {
            Object.values(Checklist).map(c => {
                var i = 0;
                var b = false;
                if (ChecklistChecked != null) {
                    Object.values(ChecklistChecked).map(z => {
                        if (c == z) {
                            b = true;
                        }
                    });
                    if (b) {

                        htmlH.push(`
                                        <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="${chK}" value="${c}" id="defaultCheck${i}" checked onclick="if(this.checked){myFunctionChecked('${chK}')}">
                                        <label class="form-check-label" for="defaultCheck${i}">
                                        ${c}
                                        </label>
                                        </div>
                             `)
                    } else {
                        htmlH.push(`
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="${chK}" value="${c}" id="defaultCheck${i}" onclick="if(this.checked){myFunctionChecked('${chK}')}">
                                    <label class="form-check-label" for="defaultCheck${i}">
                                    ${c}
                                    </label>
                                    </div>
                         `)
                    }
                } else {

                    htmlH.push(`
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="${chK}" value="${c}" id="defaultCheck${i}" onclick="if(this.checked){myFunctionChecked('${chK}')}">
                        <label class="form-check-label" for="defaultCheck${i}">
                        ${c}
                        </label>
                        </div>`)
                }
                i++;
            });
        }




        htmlH.push(`
        <div class="row">
        <input type="text" class="form-control" id="ajouterCheck" placeholder="ajouter un item...">
        </div>
        <div class="row">
        <button type="button" class="btn btn-success" onclick="listChecklist('${itemChecklist}')">Ajouter</button>
        </div>
        `)
        document.getElementById("infoChecklist").innerHTML = htmlH.join("");
    }

    document.getElementById("TitelModel").innerHTML = html.join("");
    document.getElementById("btn-group-vertical").innerHTML = html1.join("");
}
// *****************************************************************************************************
function myFunctionChecked(c) {
    var item = c + "checked";
    const checkboxes = document.querySelectorAll(`input[name="${c}"]:checked`);
    let values = "";
    checkboxes.forEach((checkbox) => {
        // values.push(checkbox.value);
        values = checkbox.value;
    });
    console.log(values);

    var item = c + "checked";

    var tch = localStorage.getItem(item);
    tch = JSON.parse(tch);
    if (tch != null) {


        tch = {
            ...tch,
            [values]: values
        }
    } else {

        tch = {
            [values]: values
        }
    }

    localStorage.setItem(item, JSON.stringify(tch));

}

function listChecklist(a) {
    var Check = document.getElementById("ajouterCheck").value;

    var item = a + lst + tach;

    var tch = localStorage.getItem(item);
    tch = JSON.parse(tch);


    if (tch != null) {
        tch = {
            ...tch,
            [Check]: Check
        }
    } else {
        tch = {
            [Check]: Check
        }
    }
    localStorage.setItem(item, JSON.stringify(tch));
    tache(tach, lst);
}

function myModalFermer() {
    var modal = document.getElementById("myModal");
    var modalContainer = document.getElementsByClassName("modal-backdrop fade show");
    console.log(modalContainer);
    for (var i = 0; i < modalContainer.length; i++) {
        modalContainer[i].style.display = "none";
    }
    modal.style.display = "none";
    chargement();

}

function ListMembres(a) {
    var item = "Membre" + lst + tach;
    var id = "myList" + a;
    var tch = localStorage.getItem(item);


    var listAct = document.getElementById(id);
    var atrb = listAct.getAttribute('class');

    if (atrb == "list-group-item list-group-item-action") {

        tch = JSON.parse(tch);
        if (tch != null) {
            tch = {
                ...tch,
                [a]: a
            }
        } else {
            tch = {
                [a]: a
            }
        }
        localStorage.setItem(item, JSON.stringify(tch));
        listAct.removeAttribute('class');
        listAct.setAttribute('class', 'list-group-item list-group-item-action active');
    } else {

        tch = JSON.parse(tch);
        delete tch[a];
        localStorage.setItem(item, JSON.stringify(tch));

        listAct.removeAttribute('class');
        listAct.setAttribute('class', 'list-group-item list-group-item-action');
    }

}

function chargerListMembres() {
    var m = "Membre" + lst + tach;
    var itemMembre = localStorage.getItem(m);
    itemMembre = JSON.parse(itemMembre);
    for (var i = 0; i < 4; i++) {
        var id = "myList" + i;
        var listAct = document.getElementById(id);
        listAct.removeAttribute('class');
        listAct.setAttribute('class', 'list-group-item list-group-item-action');
    }

    if (itemMembre != null) {

        Object.values(itemMembre).map(m => {

            var id = "myList" + m;
            var listAct = document.getElementById(id);
            listAct.removeAttribute('class');
            listAct.setAttribute('class', 'list-group-item list-group-item-action active');
        });
    }
}

function Listcolor(c) {
    var item = "Color" + lst + tach;
    localStorage.setItem(item, c);
    var modal = document.getElementById("Etiquettes");
    modal.style.display = "none";
    tache(tach, lst);


}

function ajouterDate() {
    var item = "date" + lst + tach;
    var d = document.getElementById("txtDate").value;
    localStorage.setItem(item, d);
    var modal = document.getElementById("calenderier");
    modal.style.display = "none";
    tache(tach, lst);

}

function saveCheklist() {
    var item = "checklist" + lst + tach;
    var d = document.getElementById("ajouterChecklist").value;
    localStorage.setItem(item, d);
    var modal = document.getElementById("addchecklist");
    modal.style.display = "none";
    tache(tach, lst);

}

// function etiquette(t) {


//     color = t;


// }

// *********************************************************************************************************
//                                             Calendrier
// *********************************************************************************************************
if (txtDate) {
    (function($) {
        $.fn.datepicker.dates['fr'] = {
            days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
            months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthsShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            today: "Aujourd'hui",
            monthsTitle: "Mois",
            clear: "Effacer",
            weekStart: 1,
            format: "dd/mm/yyyy"
        };
    }(jQuery));

    $('.datepicker').datepicker({
        language: 'fr',
        autoclose: true,
        todayHighlight: true
    })
}
// *********************************************************************************************************
//                                             Delete
// *********************************************************************************************************
function supliste(a) {
    var tch = localStorage.getItem('listeTache');
    tch = JSON.parse(tch);
    delete tch[a];
    localStorage.setItem('listeTache', JSON.stringify(tch));
    let listNumbers = localStorage.getItem('listNumbers');
    localStorage.setItem('listNumbers', listNumbers - 1);
    chargement();
}

function supTache(i, a) {
    var tch = localStorage.getItem(i);
    tch = JSON.parse(tch);
    delete tch[a];
    localStorage.setItem(i, JSON.stringify(tch));
    chargement();
}
// *********************************************************************************************************
//                                        Onload
// *********************************************************************************************************
function onload() {
    let listNumbers = localStorage.getItem('listNumbers');

    if (listNumbers == null) {
        newPoejet();
    } else {
        chargement();
    }

}

// *********************************************************************************************************
//                                        Drag & drop
// *********************************************************************************************************
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    console.log(event.target.id, event.dataTransfer.getData("text"));
}

function drop(event) {
    console.log('drop', event);
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}



onload();