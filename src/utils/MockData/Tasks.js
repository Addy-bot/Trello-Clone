export const reqTasks = [
  { id: "1", title: "API Integration", content: "Integrate t8 API given by backend via proxy", assignedTo: "Assigned To: Mayank", dueDate: '10/01/2023' },
  { id: "2", title: "Design Layout", content: "Design a layout according to given Figma", assignedTo: "Assigned To: Kartik", dueDate: '02/04/2023' },
];
export const toDoTasks = [
  { id: "4", title: "Popup", content: "To display Popup when clicked on particular card", assignedTo: "Assigned To: Mayank", dueDate: '05/11/2023' },
  { id: "5", title: "Toast", content: "Implement a toast for successfull registration", assignedTo: "Assigned To: Gautam", dueDate: '25/02/2023' },
  { id: "6", title: "Analysis", content: "To analyse the load on the webpage", assignedTo: "Assigned To: Vishal", dueDate: '18/12/2023' },
  { id: "7", title: "Load Test", content: "To test the load on the API", assignedTo: "Assigned To: Pragati", dueDate: '07/09/2023' },
  { id: "8", title: "Optimisation", content: "Analyse and optimise the homepage", assignedTo: "Assigned To: Kartik", dueDate: '29/08/2023' }
];
export const inPrgTasks = [
  { id: "9", title: "Negative Scenarios", content: "To handle negative scenarios of API", assignedTo: "Assigned To: Vishal", dueDate: '15/04/2023' },
  { id: "10", title: "Unit Testing", content: "Write unit test cases for the components", assignedTo: "Assigned To: Rahul", dueDate: '13/03/2023' },
  { id: "11", title: "Prod Preparation", content: "Clean the code and move to release branch", assignedTo: "Assigned To: Mayank", dueDate: '21/06/2023' },
];
export const doneTasks = [
  { id: "12", title: "Knowledge Transfer", content: "To give KT on the Dashboard", assignedTo: "Assigned To: Gautam" },
];

export const taskStatus = {
  requested: {
    name: "Requested",
    items: reqTasks
  },
  toDo: {
    name: "To do",
    items: toDoTasks
  },
  inProgress: {
    name: "In Progress",
    items: inPrgTasks
  },
  done: {
    name: "Done",
    items: doneTasks
  }
};