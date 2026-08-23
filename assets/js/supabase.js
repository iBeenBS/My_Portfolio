// Supabase config's file

const supabaseKey = "sb_publishable_ynLsK1CiwdGbLNqtcOMVxg_6Nw58Kcl";
const supabaseUrl = "https://tgcxasjaxywqncdhsiwk.supabase.co";

const clientLink = window.supabase.createClient(
	supabaseUrl,
	supabaseKey
);

// Variables
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const assuntoInput = document.querySelector("#assunto");
const mensagemInput = document.querySelector("#mensagem");
const submitButton = document.querySelector(".contact-btn");

const form = document.querySelector(".contact-form");

submitButton.addEventListener("click", sendForm);

async function sendForm(e) {
	e.preventDefault();
	
	const nome = nomeInput.value.trim();
	const email = emailInput.value.trim();
	const assunto = assuntoInput.value.trim();
	const mensagem = mensagemInput.value.trim();
	
	const { data, error } = await clientLink
		.from("contatos")
		.insert([
			{
				nome: nome,
				email: email,
				assunto: assunto,
				mensagem: mensagem
			}
		]);
	
	if (error) {
		alert('Erro ao enviar');
		return;
	}
	alert('Mensagem Enviada com Sucesso!');
	nomeInput.value = "";
	emailInput.value = "";
	assuntoInput.value = "";
	mensagemInput.value = "";
}