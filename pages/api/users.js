export default function handler(req, res) {
  return { users: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }] };
}
