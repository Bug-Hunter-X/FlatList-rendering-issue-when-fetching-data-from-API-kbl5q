```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {
        data.length > 0 && (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
            )}
          />
        )
      }
      {data.length === 0 && <Text>No data found</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 16,
  },
});

export default DataFetch;
```