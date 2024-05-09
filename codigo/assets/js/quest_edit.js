document.getElementById("AddQuest").addEventListener("click", function () {
  var NovaQuest = document.createElement("div");

  NovaQuest.innerHTML = `<div class="questão border-bottom mt-2">
  <div class="d-flex col mb-2">
      <button class="deletar"><img src="../assets/images/trash_red.png" class="" alt="" width="35"
              height="auto"></button>
              <div class="input-group input-group-lg InputPerg">
                  <input id="perg" type="text" class="form-control ms-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></div>
              </div>
  <ul>
      <li><div class="input-group input-group-sm mb-2 InputResp"><span class="input-group-text p-2" id="inputGroup-sizing-sm">1</span><input id="resp1" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></div></li>
      <li><div class="input-group input-group-sm mb-2 InputResp"><span class="input-group-text p-2" id="inputGroup-sizing-sm">2</span><input id="resp2" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></div></li>
      <li><div class="input-group input-group-sm mb-2 InputResp"><span class="input-group-text p-2" id="inputGroup-sizing-sm">3</span><input id="resp3" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></div></li>
      <li><div class="input-group input-group-sm mb-2 InputResp"><span class="input-group-text p-2" id="inputGroup-sizing-sm">4</span><input id="resp4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></div></li>
  </ul>
  <button class="d-flex  d-block rounded-pill my-2" id="ConfQuest"><p class="m-1 text-black">confirmar</p><img src="/assets/images/confirmation.png" alt="" class="mx-1 mt-1 AddConfSimb"></button>
</div>`;

  document.getElementById("EspQuests").appendChild(NovaQuest);
});



document.getElementById("ConfQuest").addEventListener("click", function () {
  var pergjs = perg.value;
  var respjs1 = resp1.value;
  var respjs2 = resp2.value;
  var respjs3 = resp3.value;
  var respjs4 = resp4.value;

  var NovaQuestCria = document.createElement("div");
  NovaQuestCria.innerHTML = `<div class="questão border-bottom mt-2">
  <div class="d-flex col">
      <button class="deletar"><img src="../assets/images/trash_red.png" class="" alt="" width="35"
              height="auto"></button>
      <div class="fs-3 ms-2 d-flex justify-content-between">
          <h2 class="mt-1">${pergjs}</h2>
          <button class="ms-2"><img src="../assets/images/iconizer-botao-editar.svg" class=""
                  alt="" width="40" height="40"></button>
      </div>
  </div>
  <ul>
      <li class="d-flex"><button><img src="../assets/images/iconizer-botao-editar.svg"
                  class="editarResp me-2 mb-3" alt=""></button>
          <p>${respjs1}</p>
      </li>
      <li class="d-flex"><button><img src="../assets/images/iconizer-botao-editar.svg"
                  class="editarResp me-2 mb-3" alt=""></button>
          <p>${respjs2}</p>
      </li>
      <li class="d-flex"><button><img src="../assets/images/iconizer-botao-editar.svg"
                  class="editarResp me-2 mb-3" alt=""></button>
          <p>${respjs3}</p>
      </li>
      <li class="d-flex"><button><img src="../assets/images/iconizer-botao-editar.svg"
                  class="editarResp me-2 mb-3" alt=""></button>
          <p>${respjs4}<p>
      </li>
  </ul>
</div>`
document.getElementById("EspQuests").appendChild(NovaQuestCria);
});



//recomendação de como armazenar as questões
//respv==resposta verdadeira resf==resposta falsa
var dificuldades = {
  fácil:[
    {
    texto: "",
      respv: "",
      resf:[]
    },
    {
      texto: "",
      respv: "",
      resf:[]
    }
  ],
  médio:[
    {
      texto: "",
      respv: "",
      resf:[]
    }
  ]
};