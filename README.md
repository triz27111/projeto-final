# Projeto-final

# Documentação da API Lion School

A **API Lion School** oferece endpoints para gerenciar e recuperar informações sobre cursos e alunos da Lion School. Esta API está hospedada na nuvem e pronta para uso.

---

## Índice

- [URL Base](#url-base)
- [Endpoints](#endpoints)
  - [GET /v1/lion-school/cursos](#get-v1lion-schoolcursos)
  - [GET /v1/lion-school/alunos](#get-v1lion-schoolalunos)
  - [GET /v1/lion-school/alunos/filtro](#get-v1lion-schoolalunosfiltro)
  - [GET /v1/lion-school/alunos/:matricula](#get-v1lion-schoolalunosmatricula)
  - [GET /v1/lion-school/alunos/cursos/:curso](#get-v1lion-schoolalunoscursoscurso)
- [Estrutura de Resposta](#estrutura-de-resposta)
- [Tratamento de Erros](#tratamento-de-erros)

---

## URL Base

A API está acessível em:


---

## Endpoints

### **GET /v1/lion-school/cursos**

Recupera uma lista de todos os cursos disponíveis.

#### Resposta
- **200 OK**: Retorna um array com os cursos.
- **404 Not Found**: Nenhum curso encontrado.

---

### **GET /v1/lion-school/alunos**

Recupera uma lista de todos os alunos.

#### Resposta
- **200 OK**: Retorna um array com os alunos.
- **404 Not Found**: Nenhum aluno encontrado.

---

### **GET /v1/lion-school/alunos/filtro**

Filtra os alunos com base nos parâmetros de consulta.

#### Parâmetros de Consulta
- `status` *(opcional)*: Status do aluno (ex.: *concluído*, *em andamento*).
- `curso` *(opcional)*: Curso no qual o aluno está matriculado.
- `disciplina` *(opcional)*: Status final da disciplina.
- `ano` *(opcional)*: Ano de conclusão do curso.

#### Resposta
- **200 OK**: Retorna a lista filtrada de alunos.
- **404 Not Found**: Nenhum dado corresponde aos filtros.

---

### **GET /v1/lion-school/alunos/:matricula**

Recupera informações de um aluno com base no número de matrícula.

#### Parâmetros de Caminho
- `matricula`: Número de matrícula único do aluno.

#### Resposta
- **200 OK**: Retorna os dados do aluno.
- **404 Not Found**: Nenhum aluno encontrado com a matrícula fornecida.

---

### **GET /v1/lion-school/alunos/cursos/:curso**

Recupera todos os alunos matriculados em um curso específico.

#### Parâmetros de Caminho
- `curso`: Nome ou identificador do curso.

#### Resposta
- **200 OK**: Retorna a lista de alunos no curso.
- **404 Not Found**: Nenhum aluno encontrado para o curso informado.

---

## Estrutura de Resposta

### Resposta de Sucesso
```json
{
  "status": 200,
  "data": <dados da resposta>
}


{
  "status": 404,
  "message": "<mensagem de erro>"
}


Tratamento de Erros
404 Not Found: Retornado quando os dados solicitados não estão disponíveis.
500 Internal Server Error: Indica um problema no servidor (não tratado explicitamente nesta API).

Certifique-se de fornecer os parâmetros corretos de consulta ou de caminho para os endpoints que os requerem.