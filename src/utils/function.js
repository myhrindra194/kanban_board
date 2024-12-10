export function filterTasksList(tasks, progress){
    return tasks.filter(task => task.progress === progress);
}