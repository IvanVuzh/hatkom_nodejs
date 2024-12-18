import { TimeLog } from "src/Models/TimeLog";

export const generateUUID = (): string => {
  return require('uuid').v4();
};

export const mergeTimeLogs = (timeLogs: TimeLog[] | null): TimeLog[] | null => {
  if (!timeLogs || timeLogs.length < 2) return timeLogs;

  timeLogs.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

  for (let i = 0; i < timeLogs.length - 1; i++) {
    const currentLog = timeLogs[i];
    const nextLog = timeLogs[i + 1];

    if (currentLog.endTime > nextLog.startTime) {
      const mergedLog: TimeLog = {
        id: generateUUID(), // You'll need a function to generate a GUID, e.g., `uuidv4()` from `uuid` library
        projectId: currentLog.projectId,
        timeStamp: new Date(),
        startTime: currentLog.startTime < nextLog.startTime ? currentLog.startTime : nextLog.startTime,
        endTime: currentLog.endTime > nextLog.endTime ? currentLog.endTime : nextLog.endTime
      };

      timeLogs[i] = mergedLog;
      timeLogs.splice(i + 1, 1);
      i--;
    }
  }

  return timeLogs;
}
