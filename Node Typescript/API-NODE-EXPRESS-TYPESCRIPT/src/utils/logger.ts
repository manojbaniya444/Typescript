// supposed to use logger for pretty print but didnt work
const logger = {
  info: (message: string) => {
    console.log("INFO: ", message);
  },
  error: (message: string) => {
    console.error("ERROR: ", message);
  },
};

export default logger;
