function checkExam(array1, array2) {
  let score = 0;

  for (i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4;
    } else if (array1[i] !== array2[i]) {
      if (array2[i] === "") {
        score;
      } else {
        score -= 1;
      }
    }
  }
  if (score <= 0) {
    score = 0;
  }
  return score;
}


function checkExam(array1, array2) {
  array1.forEach((correctAnswer, idx) => {
    let actualAnswer === array2[idx]
    if (actualAnswer === "") {
      return;
    }
    if (actualAnswer === correctAnswer) {
      resultScore += 4
    } else {
      resultScore -= 1
    }

    return resultScore < 0 ? 0 : resultScore

  })
}