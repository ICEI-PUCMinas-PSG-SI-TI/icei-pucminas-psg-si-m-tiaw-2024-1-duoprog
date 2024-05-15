function leDados() {
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }
  else {
    objDados = {
      dificuldades: [
        {
          fácil: [
            {
              id: 1,
              texto: "qual destes tipos de variável aceita um texto?",
              resp: ["string", "byte", "int", "double"],
              vouf: ["true","false","false","false"]
            }
          ]
        }
      ]
    }
  }

  return objDados;
}

function incluirQuest() {
  let objDados = leDados();

  let perg = document.getElementById('InputPerg').value;
  let resp1 = document.getElementById('InputQuest1').value;
  let resp2 = document.getElementById('InputQuest2').value;
  let resp3 = document.getElementById('InputQuest3').value;
  let resp4 = document.getElementById('InputQuest4').value;

  let novaperg = {
    texto: perg,
    resp: [resp1, resp2, resp3, resp4]
  };

  objDados.dificuldades[0].fácil.push(novaperg);

  salvaDados(objDados);
  imprimeDados();
}


function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados));
  console.log(localStorage.getItem('db'));
}


function imprimeDados() {
  let tela = document.getElementById('EspQuests');
  let strHtml = '';
  let objDados = leDados();

  for (let i = 0; i < objDados.dificuldades[0].fácil.length; i++) {
    if (objDados.dificuldades && objDados.dificuldades[0] && objDados.dificuldades[0].fácil && objDados.dificuldades[0].fácil[i] && objDados.dificuldades[0].fácil[i].resp && objDados.dificuldades[0].fácil[i].resp.length > 3) {
      strHtml += `<div class="questão${[i]} border-bottom mt-2">
        <div class="d-flex col">
            <button id="BtnDelQuest${[i]}"><img src="../assets/images/trash_red.png" class="" alt="" width="35"
                    height="auto"></button>
            <div class="fs-3 ms-2 d-flex justify-content-between">
                <h2 class="mt-1">${objDados.dificuldades[0].fácil[i].texto}</h2>
                <button id="BtnEditarPerg${[i]}" class="ms-2"><img src="../assets/images/iconizer-botao-editar.svg" class=""
                        alt="" width="40" height="40"></button>
            </div>
        </div>
        <ul>
            <li class="d-flex"><button><img src="../assets/images/iconizer-botao-editar.svg"
                        class="editarResp me-2 mb-3"id="BtnEditarResp1${[i]}" alt=""></button>
                <p>${objDados.dificuldades[0].fácil[i].resp[0]}</p>
            </li>
            <li class="d-flex"><button><img src="../assets/images/iconizer-botao-editar.svg"
                        class="editarResp me-2 mb-3"id="BtnEditarResp2${[i]}" alt=""></button>
                <p>${objDados.dificuldades[0].fácil[i].resp[1]}</p>
            </li>
            <li class="d-flex"><button><img src="../assets/images/iconizer-botao-editar.svg"
                        class="editarResp me-2 mb-3"id="BtnEditarResp3${[i]}" alt=""></button>
                <p>${objDados.dificuldades[0].fácil[i].resp[2]}</p>
            </li>
            <li class="d-flex"><button><img src="../assets/images/iconizer-botao-editar.svg"
                        class="editarResp me-2 mb-3"id="BtnEditarResp4${[i]}" alt=""></button>
                <p>${objDados.dificuldades[0].fácil[i].resp[3]}<p>
            </li>
        </ul>
    </div>`
    }
  }
  tela.innerHTML = strHtml;
  document.getElementById('InputPerg').value = '';
  document.getElementById('InputQuest1').value = '';
  document.getElementById('InputQuest2').value = '';
  document.getElementById('InputQuest3').value = '';
  document.getElementById('InputQuest4').value = '';

  for (let i = 0; i < objDados.dificuldades[0].fácil.length; i++) {
    document.getElementById(`BtnDelQuest${i}`).addEventListener('click', function() {
        let questao = document.querySelector(`.questão${i}`);
        questao.remove();

        objDados.dificuldades[0].fácil.splice(i, 1);

        salvaDados(objDados);

        location.reload();
    });
}
}





window.addEventListener('load', imprimeDados);
document.getElementById('BtnConfQuest').addEventListener('click', incluirQuest);




document.getElementById("BtnAddQuest").addEventListener("click", function () {
  var div = document.getElementById("TelaAddQuest");
  var addbtn = document.getElementById("BtnAddQuestArea");

  if (div.style.display === "none") {
    div.style.display = "block";
    addbtn.style.display = "none";
  } else {
    div.style.display = "none";
    addbtn.style.display = "block";
  }
});

document.getElementById("BtnConfQuest").addEventListener("click", function () {
  var div = document.getElementById("TelaAddQuest");
  var addbtn = document.getElementById("BtnAddQuestArea");
  if (div.style.display === "none") {
    div.style.display = "block";
    addbtn.style.display = "none";
  } else {
    div.style.display = "none";
    addbtn.style.display = "block";
  }
});

document.getElementById("BtnCancelQuest").addEventListener("click", function () {
  var div = document.getElementById("TelaAddQuest");
  var addbtn = document.getElementById("BtnAddQuestArea");
  if (div.style.display === "none") {
    div.style.display = "block";
    addbtn.style.display = "none";
  } else {
    div.style.display = "none";
    addbtn.style.display = "block";
    document.getElementById('InputPerg').value = '';
    document.getElementById('InputQuest1').value = '';
    document.getElementById('InputQuest2').value = '';
    document.getElementById('InputQuest3').value = '';
    document.getElementById('InputQuest4').value = '';

  }
});


