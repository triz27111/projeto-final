const listaAlunos =  require('./alunos')
const listaCurso = require('./cursos')

const getListaCursos = function(){
    let listaCurso = curso
    let lista = []
    let curso = {}
    let status = false
    
    listaCurso.cursos.forEach(function(item){
        status = true
        lista.push(item)
        
    })
    curso = lista
    if(status == true){
        return curso
    }else{
        return status
    }

}

const getlistaAlunos = function(){
    let descricaoAlunos = []
    let status = false
    let alunos = {}

    listaAlunos.alunos.forEach(function(item){
        status = true
        alunos.foto = item.foto
        alunos.nome = item.nome
        alunos.matricula = item.matricula
        alunos.sexo = item.sexo
        alunos.curso = item.curso
        alunos.status = item.status
        descricaoAlunos.push(item)

    })
    if(status == true){
        return descricaoAlunos
    }else{
        return false
    }
    
}

const getNumeroMatricula = function(id){
    let matricula = Number(id)
    // let alunosS = listaAlunos.alunos
    let alunos = {}
    let status = false

    listaAlunos.alunos.forEach(function(item){
        if(Number(item.matricula) == matricula){
            status = true
            alunos.foto = item.foto
            alunos.nome = item.nome
            alunos.matricula = item.matricula
            alunos.curso = item.curso
            
        }
        
    })
    if(status == true){
        return alunos
    }else{
        return false
    }
    
}

const getMatriculadosCursos = function(matriculaC){
    let sigla = String(matriculaC).toUpperCase()
    let alunosS = listaAlunos.alunos
    let nomeCurso = []
    let status = false
    let cursos = {}

    alunosS.forEach(function(itemC){
        alunosS = itemC.curso
        itemC.curso.forEach(function(item){
            if(String(item.sigla).toUpperCase() == sigla){
                status = true
                let listaAlunos = {}
                listaAlunos.foto = itemC.foto
                listaAlunos.nome = itemC.nome
                listaAlunos.matricula = itemC.matricula
                listaAlunos.sexo = itemC.sexo
                listaAlunos.curso = itemC.curso
                listaAlunos.status = itemC.status
                nomeCurso.push(listaAlunos)
             }
        })
        
    })
    cursos.curso = sigla
    cursos.aluno = nomeCurso
    if(status == true){
        return cursos
    }else{
        status = false
    }
}

const getStatusCursado = function(Status){
    let statusAluno = String(Status).toUpperCase()
    let dadosAlunos = listaAlunos.alunos
    let situacao = []
    let resultado = {}
    let status = false
  
    dadosAlunos.forEach(function(item){
        if(String(item.status).toUpperCase() == statusAluno){
            status = true
            let listaAlunos = {}
                listaAlunos.foto = item.foto
                listaAlunos.nome = item.nome
                listaAlunos.matricula = item.matricula
                listaAlunos.sexo = item.sexo
                listaAlunos.curso = item.curso
                listaAlunos.status = item.status
                situacao.push(listaAlunos)
        }
    })
    resultado.status = statusAluno
    resultado = situacao
    if(status == true){
        return resultado
    }else{
        return false
    }

    

        
}

const getStatusFinal = function(nomeSigla, nomeStatus){
    let siglas = String(nomeSigla).toUpperCase()
    let statusAluno = String(nomeStatus).toUpperCase()
    let aluno = []
    let estudante = {}
    let situacao = listaAlunos.alunos
    let status  = false

    situacao.forEach(function(itemSigla){
        situacao.push(itemSigla)
            itemSigla.curso.forEach(function(itemS){
                if(String(itemS.sigla).toUpperCase() == siglas){
                    status = true
                    let Aluno = {}

                   Aluno.foto = itemSigla.foto
                   Aluno.nome = itemSigla.nome
                   Aluno.matricula = itemSigla.matricula
                   Aluno.sexo = itemSigla.sexo
                   Aluno.curso = itemSigla.curso
                   Aluno.sigla = itemS.sigla

                   itemS.materia.forEach(function(itemMateria){
                        if(String(itemMateria.status).toUpperCase() == statusAluno){

                            Aluno.carga = itemMateria.carga
                            Aluno.media = itemMateria.media
                            Aluno.status = itemMateria.status

                            aluno.push(Aluno)
                        }
                   })
                }
            })
       
        estudante.dados = aluno
        

    })


    if(status == true){
        return estudante
    }else{
        return status
    }
}

const getConclusão = function(matricula, siglaCurso){
    let ano = Number(matricula)
    let sigla = String(siglaCurso).toUpperCase()
    let aluno = [] 
    let estudantes = {}
    let situacao = listaAlunos.alunos
    let status = false

    situacao.forEach(function(item){
        situacao = item.curso
        item.curso.forEach(function(itemCurso){
            if(String(itemCurso.sigla).toUpperCase() == sigla){
               if(Number(itemCurso.conclusao) == ano){
                
                status = true
                let Alunos = {}
                Alunos.foto =  item.foto
                Alunos.nome = item.nome
                Alunos.matricula = item.matricula
                Alunos.sexo = item.sexo
                Alunos.curso = item.curso
                Alunos.status = item.status
                aluno.push(Alunos)
               }
            }
        })
    })
    estudantes.ano_conclusao = ano
    estudantes.alunos = aluno

    if(status == true){
        return estudantes
    }else{
        return status
    }
    
}

// console.log(getMatriculaCurso('ds'))

//console.log(getMatriculaAno('2022', 'ds'))

module.exports = {
    getListaCursos,
    getlistaAlunos,
    getNumeroMatricula,
    getMatriculadosCursos,
    getStatusCursado,
    getStatusFinal,
    getConclusão
}

