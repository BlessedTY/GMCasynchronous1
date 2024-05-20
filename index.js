// <!-- Task 01: Iterating with asynch/await -->

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      console.log(value);
    }
  }
  
  // Example usage:
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values);
  

  // <!-- Task 02: Awaiting a call -->
  async function fetchDataFromAPI() {
    // Simulate fetching data from an API (e.g., using a setTimeout)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Mock API Data'); // Simulated API response
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
  
  async function awaitCall() {
    try {
      const data = await fetchDataFromAPI(); // Wait for API response
      console.log('Data from API:', data); // Log the data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Example usage:
  awaitCall();


  //Task 03: Handling errors with Async/Await
  async function awaitCall(apiFunction) {
  try {
    const response = await apiFunction();
    return response;
  } catch (error) {
    console.error("An error occurred while making the API call:", error);
    // Optionally, you can add more user-friendly error handling here
    // For example, you could return a specific error message or value
    return { error: "Failed to fetch data. Please try again later." };
  }
}


async function fetchData() {
  const result = await awaitCall(() => fetch("https://api.example.com/data"));

  if (result.error) {
    console.log(result.error);
    // Handle the error appropriately in your application
  } else {
    console.log("Data fetched successfully:", result);
    // Process the successful result
  }
}

fetchData();


//Chaining Async/Await:
async function asyncFunction1() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Function 1 executed");
}

async function asyncFunction2() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Function 2 executed");
}

async function asyncFunction3() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Function 3 executed");
}

async function chainedAsyncFunctions() {
  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}

// Call the chainedAsyncFunctions to see the result
chainedAsyncFunctions();


// Task 04: Awaiting Concurrent Requests:
async function apiCall1() {
  // Simulate an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "Result from API call 1";
}

async function apiCall2() {
  // Simulate an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "Result from API call 2";
}

async function concurrentRequests() {
  try {
    // Use Promise.all to make both API calls concurrently
    const [result1, result2] = await Promise.all([apiCall1(), apiCall2()]);
    
    // Log the combined results
    console.log("Combined results:", result1, result2);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the concurrentRequests function to see the result
concurrentRequests();


//Task 05: Awaiting Parallel Calls

async function parallelCalls(urls) {
  try {
    // Create an array of fetch promises
    const fetchPromises = urls.map(url => fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
      }
      return response.json(); // Assuming the response is in JSON format
    }));

    // Use Promise.all to fetch all URLs concurrently
    const responses = await Promise.all(fetchPromises);
    
    // Log the responses
    console.log("All responses:", responses);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Example usage:
const urls = [
  "https://api.example.com/data1",
  "https://api.example.com/data2",
  "https://api.example.com/data3"
];

parallelCalls(urls);


  
  
