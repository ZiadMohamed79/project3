const students = {
  "1111": {
    trainings: 12,
    visits: 6,
    remainingTrainings: 3,
    remainingVisits: 2,
    achievements: [true, false, true, false, true]
  },
  "2222": {
    trainings: 10,
    visits: 5,
    remainingTrainings: 2,
    remainingVisits: 1,
    achievements: [true, true, true, true, true]
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("searchButton");
  btn.addEventListener("click", function () {
    const code = document.getElementById("studentCode").value.trim();
    const student = students[code];

    if (!student) {
      alert("لم يتم العثور على بيانات لهذا الكود");
      return;
    }

    document.getElementById("trainingCount").innerText = "عدد التدريبات: " + student.trainings;
    document.getElementById("visitCount").innerText = "عدد الزيارات: " + student.visits;
    document.getElementById("remainingTrainings").innerText = "المتبقي من التدريبات: " + student.remainingTrainings;
    document.getElementById("remainingVisits").innerText = "المتبقي من الزيارات: " + student.remainingVisits;

    const boxes = document.querySelectorAll(".achievement-box");
    student.achievements.forEach((done, i) => {
      if (boxes[i]) {
        boxes[i].classList.toggle("completed", done);
      }
    });
  });
});
