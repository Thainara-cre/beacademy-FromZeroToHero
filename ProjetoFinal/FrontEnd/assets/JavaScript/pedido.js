let cepViaCep  = document.querySelector('#cepForm');
let cidadeForm = document.getElementById('cidadeForm');
let ruaForm = document.getElementById('ruaForm');
let bairroForm = document.getElementById('bairroForm');


const handleSubmit = (event) =>{
    event.preventDefault();
    const name = document.getElementById('nomeForm').value;
    const email = document.getElementById('emailForm').value;
    const telefone = document.getElementById('telForm').value;
    const sabor = document.getElementById('saborForm').value;
    const andar = document.getElementById('andarForm').value;
    const tema = document.getElementById('temaForm').value;
    const data = document.getElementById('dataForm').value;
    const hora = document.getElementById('horaForm').value;
    const cep = document.getElementById('cepForm').value;
    const cidade = document.getElementById('cidadeForm').value;
    const bairro = document.getElementById('bairroForm').value;
    const numeroCasa = document.getElementById('numeroForm').value;
    const rua = document.getElementById('ruaForm').value;
    const complemento = document.getElementById('complementoForm').value;
    try {
        fetch('https://api.sheetmonkey.io/form/tuSJDq9fgsr54NtALDtkNW', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'nome cliente': name, email: email, telefone, 'sabor': sabor, 'andar': andar, 'tema': tema, 'Data da entrega': data, 'Hora da entrega': hora, cep, cidade, bairro, rua, 'numero': numeroCasa, complemento})
    }).then(
        showModalPedido()
    )
    } catch (error) {
        alert('Deu algum problema na hora de cadastrar o seu orçamento')
    }
}

cepViaCep.addEventListener('keyup', getAddress);

async function getAddress(){
    let cepEnvio = cepViaCep.value;
    if(cepViaCep.value.length >= 8) {
        try{
            let response = await fetch(`https://viacep.com.br/ws/${cepEnvio}/json/`);
            let jsonViaCep = await response.json();
            cidadeForm.value = jsonViaCep.localidade;
            bairroForm.value = jsonViaCep.bairro;
            ruaForm.value = jsonViaCep.logradouro;
        }catch(error) {
            console.log(error);
        }
    }else{
        cidadeForm.value = '';
        bairroForm.value = '';
        ruaForm.value = '';
    }
}

document.querySelector('.pedido').addEventListener('submit', handleSubmit);


function showModalPedido() {
    let modalPedido = document.getElementById('modalPedido');
    modalPedido.classList.add('show-modal');

}

function hideModalPedido() {
    let modalPedido = document.getElementById('modalPedido');
    modalPedido.classList.remove('show-modal');
    let form = document.getElementById('resetForm');
    form.reset();
}