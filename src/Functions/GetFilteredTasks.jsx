import { useSelector } from "react-redux";

export function GetFilteredTasks(statusFilter, tagFilter, sortCriteria) {
  const filter_map = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const filteredTasks = useSelector((state) => state.tasks)
    .filter((task) => tagFilter.every((tag) => task.tags.includes(tag)))
    .filter(filter_map[statusFilter])
    .sort((a, b) => {
      switch (sortCriteria) {
        case "name_asc":
          return a.name < b.name ? -1 : 1;
        case "name_desc":
          return a.name > b.name ? -1 : 1;
        case "date_asc":
          return a.date < b.date ? -1 : 1;
        case "date_desc":
          return a.date > b.date ? -1 : 1;
      }
    });

  return filteredTasks;
}
