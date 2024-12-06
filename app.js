const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next)=>{
   
    response.header('Access-Control-Allow-Origin', '*') 
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

const  lionSchool = require('./modulo/funcoes')

app.get('/v1/lion-school/cursos', cors(), async function(resquest, response){

    let dados = lionSchool.getListaCursos()

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado o curso'})
    }
})

app.get('/v1/lion-school/alunos', cors(), async function(request, response){

    let dados = lionSchool.getlistaAlunos()

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado aluno'})
    }
})

app.get('/v1/lion-school/alunos/filtro', cors(), async function(request, response){
    let statusA = request.query.status
    let curso = request.query.curso
    let statusDiciplina = request.query.disciplina
    let ano = request.query.ano

    let dados

    console.log(curso, ano)
    if(curso != '' && curso != undefined  && ano != '' && ano != undefined){
        dados = lionSchool.getConclusão(ano, curso)
        
        console.log(dados)
    }else if(statusDiciplina != '' && statusDiciplina != undefined && curso != '' && curso != undefined){
        dados = lionSchool.getStatusFinal(curso, statusDiciplina )
        console.log('tchau')
    }else if(statusA != '' && statusA != undefined){
        dados = lionSchool.getStatusCursado(statusA)
        console.log('web')
    }
     
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado a inforamçao requisitada'})
    }
       
})
app.get('/v1/lion-school/alunos/:matricula', cors(), async function(request, response){

    let matricula = request.params.matricula
    let dados = lionSchool.getNumeroMatricula(matricula)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado um estado'})
    }
})

app.get('/v1/lion-school/alunos/cursos/:curso', cors(), async function(request,response){

    let matricula = request.params.curso

    let dados = lionSchool.getMatriculadosCursos(matricula)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado um estado'})
    }
}) 



app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições..')
}) 