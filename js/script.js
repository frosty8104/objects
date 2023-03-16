const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");
const learning = {
    topic: "JS",
    learningGoals: [ "Understand programming fundamentals", "Have Fun", "Build JS programs" ],
    category: "Front End Development",
    topicImportance: "high",
    hoursThisWeek: 2,
    weeklyHourGoal: 7,
    achievedStudyGoals: false,
    addStudyTime: function(hours) {
        this.hoursThisWeek += hours;
        if (this.hoursThisWeek >= this.weeklyHourGoal) {
            this.achievedStudyGoals = true;
            this.celebrate();
        }
    },
    celebrate: function() {
        body.classList.add("celebrate");
        success.classList.remove("hide");
        dance.classList.remove("hide");
    }
};
console.log(learning);
topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
learning.addStudyTime(5);