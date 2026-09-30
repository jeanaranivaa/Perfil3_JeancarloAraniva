import { useCallback, useEffect, useState } from 'react';
import { getPlanets } from '../services/dragonBallApi';

// Toda la lógica de consumo de la API vive aquí; la pantalla solo renderiza
export function useDragonBall(limit = 10) {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchPage = useCallback(
    async (pageToLoad, mode = 'initial') => {
      if (mode === 'initial') setLoading(true);
      if (mode === 'more') setLoadingMore(true);
      if (mode === 'refresh') setRefreshing(true);
      setError(null);

      try {
        const data = await getPlanets(pageToLoad, limit);
        setTotalPages(data.meta?.totalPages ?? 1);
        setPage(pageToLoad);
        setPlanets((prev) =>
          pageToLoad === 1 ? data.items : [...prev, ...data.items]
        );
      } catch (e) {
        setError(e.message || 'No se pudo cargar la información');
      } finally {
        setLoading(false);
        setLoadingMore(false);
        setRefreshing(false);
      }
    },
    [limit]
  );

  useEffect(() => {
    fetchPage(1);
  }, [fetchPage]);

  const loadMore = useCallback(() => {
    if (!loading && !loadingMore && page < totalPages) {
      fetchPage(page + 1, 'more');
    }
  }, [loading, loadingMore, page, totalPages, fetchPage]);

  const refresh = useCallback(() => fetchPage(1, 'refresh'), [fetchPage]);
  const retry = useCallback(() => fetchPage(1), [fetchPage]);

  return { planets, loading, loadingMore, refreshing, error, loadMore, refresh, retry };
}