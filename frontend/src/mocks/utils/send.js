export default function send(data) {
  return new Promise(resolve => {
    resolve([200, data]);
  });
}
