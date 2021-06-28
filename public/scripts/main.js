import Modal from "./modal.js";

const modal = Modal();
const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");
const checkButtons = document.querySelectorAll(".actions a.check");

//abrir modal marcar como lido
//adicionar o eventlistener em cada botão
checkButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

//abrir modal excluir pergunta
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
  event.preventDefault();

  const roomId = document.querySelector("#room-id").dataset.id;
  const form = document.querySelector(".modal form");
  const questionId = event.target.dataset.id;
  const slug = check ? "check" : "delete";
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

  modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir pergunta";
  modalDescription.innerHTML = check
    ? "Tem certeza que deseja marcar como lida esta pergunta?"
    : "Tem certeza que deseja excluir esta pergunta?";
  modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir";
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  modal.open();
}
