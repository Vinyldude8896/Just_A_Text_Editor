import { openDB } from 'idb';


const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });

      console.log('jate database created');
    },
  });


// Added: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  console.log('PUT to the database');
  
  // Create a connection to the database and specify the version we want to use.
  const jateDb = await openDB('jate', 1);
  
  // Create a new transaction and specify the store and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');
  
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  
  // Use the .add() method on the store and pass in the content.
  const request = store.put({content, id:1 });
  
  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
  // db.close();    //this is where the only opened db connection is closed

  // => console.error('putDb not implemented');
  }


// export const getDb = async () => console.error('getDb not implemented');
// Added: Add logic for a method that gets all the content from the database
/**
 * @returns {Promise<Array<{ content: string, id: number }>>}
 */
export const getDb = async () => {

  // initdb();

  console.log('GET from the database');

  //create a connection to the IndexedDB database and the version we want to use
  const contactDb = await openDB('jate', 1);

  // create a new transaction and specify the store and data privileges
  const tx = contactDb.transaction('jate', 'readonly');

  // open up the desired object store
  const store = tx.objectStore('jate');

  // use the .getAll() method to get all data in the database
  const request = store.getAll();

  // get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result;

console.error('getDb not implemented');
}
initdb();
