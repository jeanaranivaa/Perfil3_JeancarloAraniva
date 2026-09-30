import { FlatList, View, StyleSheet, RefreshControl } from 'react-native';
import ScreenBackground from '../components/ScreenBackground';
import Header from '../components/Header';
import PlanetCard from '../components/PlanetCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { useDragonBall } from '../hooks/useDragonBall';
import { colors } from '../theme/theme';

// Pantalla de la API: solo renderiza, la lógica está en useDragonBall
export default function DragonBallScreen() {
  const { planets, loading, loadingMore, refreshing, error, loadMore, refresh, retry } =
    useDragonBall();

  return (
    <ScreenBackground>
      <Header title="Planetas Dragon Ball" />

      {loading ? (
        <Loader message="Cargando planetas..." />
      ) : error && planets.length === 0 ? (
        <ErrorMessage message={error} onRetry={retry} />
      ) : (
        <FlatList
          data={planets}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PlanetCard planet={item} />}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          onEndReached={loadMore}
          onEndReachedThreshold={0.4}
          ListFooterComponent={loadingMore ? <Loader small /> : null}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refresh}
              tintColor={colors.primary}
              colors={[colors.primary]}
            />
          }
        />
      )}
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  separator: { height: 12 },
});