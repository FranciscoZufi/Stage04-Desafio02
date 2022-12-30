const studentys = [
  {
    name: 'Luiz',
    noteOne: 10,
    noteTwo: 10
  },
  {
    name: 'Alexandra',
    noteOne: 8,
    noteTwo: 7
  },
  {
    name: 'Carlos',
    noteOne: 4,
    noteTwo: 5
  }
]

function media(noteOne, noteTwo) {
  return (noteOne + noteTwo) / 2
}

function printMedia(studenty) {
  const mediaFinal = media(studenty.noteOne, studenty.noteTwo)
  if (mediaFinal >= 7) {
    return `A média do(a) aluno(a) ${studenty.name} é: ${mediaFinal}
  \n Parabéns, ${studenty.name}! Você foi aprovado(a) no concurso!`
  } else {
    return `A média do(a) aluno(a) ${studenty.name} é: ${mediaFinal}
  \n Não foi desta vez, ${studenty.name}! Tente novamente!`
  }
}

for (let studenty of studentys) {
  let Message = printMedia(studenty)
  alert(Message)
}
