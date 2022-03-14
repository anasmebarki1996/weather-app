export const getTime = (timestamp = 0) => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();
  let min = date.getMinutes().toString();
  hours = hours.length === 1 ? 0 + hours : hours;
  min = min.length === 1 ? 0 + min : min;
  return hours + ":" + min;
};

export const getDay = (timestamp = 0) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(timestamp * 1000);
  return date.getDate().toString() + " " + month[date.getMonth()];
};

export const tempTransformer = (temp = 0) => {
  return temp.toString().split(".")[0];
};

export const checkIfNight = (timestamp = 0) => {
  const hours = new Date(timestamp * 1000).getHours();
  return hours > 8 && hours < 18 ? false : true;
};
