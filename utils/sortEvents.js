// Utility function to parse dates in DD-MM-YYYY format
const parseCustomDate = (dateString) => {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

/**
 * Sorts an object with array values by date in descending order
 * @param {Object} dataObject - The object containing arrays to be sorted
 * @returns {Object} A new object with sorted arrays
 */
export const sortObjectArraysByDate = (dataObject) => {
  // Create a deep copy of the input object to avoid mutation
  const sortedObject = JSON.parse(JSON.stringify(dataObject));

  // Get all keys of the input object
  const categories = Object.keys(sortedObject);

  // Sort each category
  categories.forEach(category => {
    if (Array.isArray(sortedObject[category])) {
      sortedObject[category].sort((a, b) => {
        // Ensure both items have a date property
        if (!a.date || !b.date) {
          console.warn(`Warning: Missing date in category ${category}`);
          return 0;
        }

        const dateA = parseCustomDate(a.date);
        const dateB = parseCustomDate(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    }
  });

  return sortedObject;
};

// Filter events in an events object by ARM
export const filterEventsByArm = (eventsObject, arm) => {
  // Validate input arm
  const validArms = ['cosa', 'coaa', 'copa'];
  if (!validArms.includes(arm.toLowerCase())) {
    throw new Error(`Invalid ARM. Must be one of: ${validArms.join(', ')}`);
  }

  // Create a deep copy of the events object to avoid mutation
  const filteredEvents = JSON.parse(JSON.stringify(eventsObject));

  // Filter both upcoming and past events
  ['upcoming', 'past'].forEach(eventType => {
    if (Array.isArray(filteredEvents[eventType])) {
      filteredEvents[eventType] = filteredEvents[eventType].filter(event => 
        event.arm.toLowerCase() === arm.toLowerCase()
      );
    }
  });

  return filteredEvents;
};

// Combine sorting and filtering
export const sortAndFilterEvents = (eventsObject, arm) => {
  // First filter by ARM, then sort the resulting object
  const filteredEvents = filterEventsByArm(eventsObject, arm);
  return sortObjectArraysByDate(filteredEvents);
};

/**
 * Splits an array into subarrays of a specified maximum length
 * @param {Array} inputArray - The input array to be chunked
 * @param {number} chunkSize - The maximum size of each subarray
 * @returns {Array<Array>} An array of subarrays
 */
export const chunkArray = (inputArray, chunkSize) => {
  // Validate inputs
  if (!Array.isArray(inputArray)) {
    throw new Error('Input must be an array');
  }
  
  if (!Number.isInteger(chunkSize) || chunkSize <= 0) {
    throw new Error('Chunk size must be a positive integer');
  }

  // Use Array.from to create chunks
  const chunkedArray = Array.from(
    { length: Math.ceil(inputArray.length / chunkSize) },
    (_, index) => {
      const start = index * chunkSize;
      return inputArray.slice(start, start + chunkSize);
    }
  );

  return chunkedArray;
};


// Example usage:
// const copaEvents = filterEventsByArm(events, 'copa');
// const sortedAndFilteredEvents = sortAndFilterEvents(events, 'coaa');
// const sortedEvents = sortObjectArraysByDate(events);
// const sortedEditorialPieces = sortObjectArraysByDate(editorialPieces);
// const result = chunkArray(inputArray, 5);