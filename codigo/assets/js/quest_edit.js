document.getElementById("AddQuest").addEventListener("click", function() {
    var novaDiv = document.createElement("div");
    
    novaDiv.innerHTML = `<div class="questão border-bottom mt-2">
    <div class="d-flex col mb-2">
        <button class="deletar"><img src="../assets/images/trash_red.png" class="" alt="" width="35"
                height="auto"></button>
                <div class="input-group input-group-lg InputPerg">
                    <input type="text" class="form-control ms-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></div>
                </div>
    <ul>
        <li><div class="input-group input-group-sm mb-2 InputResp"><span class="input-group-text p-2" id="inputGroup-sizing-sm">1</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></div></li>
        <li><div class="input-group input-group-sm mb-2 InputResp"><span class="input-group-text p-2" id="inputGroup-sizing-sm">2</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></div></li>
        <li><div class="input-group input-group-sm mb-2 InputResp"><span class="input-group-text p-2" id="inputGroup-sizing-sm">3</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></div></li>
        <li><div class="input-group input-group-sm mb-2 InputResp"><span class="input-group-text p-2" id="inputGroup-sizing-sm">4</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></div></li>
    </ul>
    <button class="d-flex  d-block rounded-pill my-2" id="ConfQuest"><p class="m-1 text-black">confirmar</p><img src="/assets/images/confirmation.png" alt="" class="mx-1 mt-1 AddConfSimb"></button>
</div>`;
  
    document.getElementById("EspQuests").appendChild(novaDiv);
});