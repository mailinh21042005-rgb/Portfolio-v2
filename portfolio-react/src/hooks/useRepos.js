import { useEffect, useState } from 'react';
import { getRepos } from '../lib/github';
export function useRepos(username) {
  const [result, setResult] = useState(null);
  useEffect(() => {
    let ignore = false;
    getRepos(username)
      .then((repos) => ({ username, repos }))
      .catch((error) => ({ username, error }))
      .then((next) => {
        if (!ignore) setResult(next);
      });
    return () => { ignore = true; };
  }, [username]);

  const loading = result?.username !== username;
  return { ...result, loading };
}