export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('project3-ecommerce', 1);

    let db, tx, store;

    request.onupgradeneeded = function(e) {
      const db = request.result;
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });
    };

    // This will handle any errors with connecting
    request.onerror = function(e) {
      console.log('There was an error');
    };

  request.onsuccess = function(e) {
    db = request.result;
    tx = db.transaction(storeName, 'readwrite');
    store = tx.objectStore(storeName);

    // This will let me know if there are any errors
    db.onerror = function(e) {
      console.log('error', e);
    };

    switch (method) {
      case 'put':
        store.put(object);
        resolve(object);
        break;
      case 'get':
        const all = store.getAll();
        all.onsuccess = function() {
          resolve(all.result);
        };
        break;
      case 'delete':
        store.delete(object._id);
        break;
      default:
        console.log('This is not a valid method');
        break;
    }

    // This will close the connection once the transaction is complete
    tx.oncomplete = function() {
      db.close();
    };
  };

  });
}