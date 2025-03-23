let taskStack = [];
function addTask() {
const taskName = document.getElementById('taskName').value.trim();
if (taskName) {
taskStack.push(taskName);
document.getElementById('taskName').value = '';
updatePipeline();
}
}
function undoTask() {
taskStack.pop();
updatePipeline();
}
function updatePipeline() {
document.getElementById('Process Line').value = taskStack.join('\n');
}
