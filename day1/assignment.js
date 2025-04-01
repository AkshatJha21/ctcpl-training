// task 

let tasks = [];

const addTask = (name, dueDate) => {
    const task = {
        name: name,
        isCompleted: false,
        dueDate: new Date(dueDate)
    };
    tasks.push(task);
};

const getTaskInfo = (index) => {
    if (tasks[index] && tasks[index].isCompleted) {
        return `Task ${tasks[index].name} completed`;
    } else {
        if (!tasks[index]) {
            return 'Not found';
        } else {
            return 'Incomplete';
        };
    }
}

const checkDueTasks = () => {
    const today = new Date();
    const dueTasks = tasks.filter(task => {
        return (
            task.dueDate.getDate() === today.getDate() &&
            task.dueDate.getMonth() === today.getMonth() &&
            task.dueDate.getFullYear() === today.getFullYear()
        );
    });
    return dueTasks.map(task => task.name);
}

addTask('Learn basics of javasciprt', '2025-04-01');
addTask('Fisinh assigment', '2025-04-01');
addTask('Apply leave', '2025-04-02');
addTask('Make tea', '2025-04-01');

tasks[1].isCompleted = true;
tasks[2].isCompleted = true;

console.log(getTaskInfo(0));
console.log(checkDueTasks()); 
