// Utility function to parse dates in DD-MM-YYYY format
const parseCustomDate = (dateString) => {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Sort events within an events object by date (most recent first)
export const sortEventsInObject = (eventsObject) => {
  // Create a deep copy of the events object to avoid mutation
  const sortedEvents = JSON.parse(JSON.stringify(eventsObject));

  // Sort both upcoming and past events arrays
  ['upcoming', 'past'].forEach(eventType => {
    if (Array.isArray(sortedEvents[eventType])) {
      sortedEvents[eventType].sort((a, b) => {
        const dateA = parseCustomDate(a.date);
        const dateB = parseCustomDate(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    }
  });

  return sortedEvents;
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
  return sortEventsInObject(filteredEvents);
};

// Example usage:
// const sortedEvents = sortEventsInObject(events);
// const copaEvents = filterEventsByArm(events, 'copa');
// const sortedAndFilteredEvents = sortAndFilterEvents(events, 'coaa');