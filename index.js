// Helper function that returns a promise that resolves after a given delay 

const delay = ms => new Promise(resolve => setTimeout(resolve,ms));
//Async function that iterates over an array and logs each value with a 1-second
async function  iterateWithAsyncAwait(arr) {
    for (let value of arr){
        console.log(value);
        await delay(1000);
    }
    
}
const values = [1,2,3,4,5];
iterateWithAsyncAwait(values);


//Task 2:Awaiting a call
const awaitCall = async () => {
    // Simulating an API call with a Promise
    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Fetched Data from API');
            }, 2000); // Simulate a 2-second delay
        });
    };

    const data = await fetchData(); // Await the API call
    console.log(data);
};

// Task 3 Handling errors with async/await
const awaitCallWithErrorHandling = async () => {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5; // Simulate success or failure
                if (isSuccess) {
                    resolve('Fetched Data from API');
                } else {
                    reject('API Error: Unable to fetch data');
                }
            }, 2000);
        });
    };

    try {
        const data = await fetchData(); // Await the API call
        console.log(data);
    } catch (error) {
        console.error('Error:', error); // Log user-friendly error message
    }
};

