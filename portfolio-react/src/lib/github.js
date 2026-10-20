const API = 'https://api.github.com';
const TTL = 10 * 60 * 1000; // 10 phút

export async function getRepos(username = 'username') {
  const key = `repos:${username}`;
  const saved = JSON.parse(localStorage.getItem(key));
  if (saved && Date.now() - saved.time < TTL) {
    return saved.data;
  }
  const res = await fetch(
    `${API}/users/${username}/repos?sort=updated`,
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const item = { time: Date.now(), data };
  localStorage.setItem(key, JSON.stringify(item));
  return data;
}