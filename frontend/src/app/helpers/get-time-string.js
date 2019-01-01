export default () => {
  const datetime = new Date();
  const m = datetime.getMinutes();
  const s = datetime.getSeconds();
  const ms = datetime.getMilliseconds();

  return `${m}:${s}.${ms}`;
};
