// Given an array, write a function that changes all positive numbers in the array to the string "big".
//   Example: makeItBig([-1,3,5,-5])returns that same array, changed to [-1, "big", "big", -5]
function Bigglesize(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]>0){
            arr[i]='big';
        }
    }
    return arr;
}
console.log(Bigglesize([-1,3,5,-5]));

// Print Low, Return High - Create a function that takes in an array of numbers.  
// The function should print the lowest value in the array, and return the highest value in the array.

function LowHighvalue(arr){
    var low = arr[0];
    var high = arr[0];
    for(var i=0;i<arr.length;i++){
        if(low>arr[i]){
            low = arr[i];
        }
        if(high<arr[i]){
            high = arr[i];
        }

    }
    console.log(low);
    return high;
}
console.log(LowHighvalue([3,4,5,6,-2]));

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print
//  the second-to-last value in the array, and return the first odd value in the array.

function returnAnother(arr){
    var arr2 =[];
    
    for (var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            arr2.push(arr[i]);
        }
    }
    console.log(arr[arr.length-2]);
    return arr2[0];
}
console.log(returnAnother([3,2,4,5,6]))

// Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each 
// value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without
//  changing the original array.
function valueDouble(arr){
    for (var i =0;i<arr.length;i++){
        arr[i]=arr[i]*2;
    }
    return arr;
}
console.log(valueDouble([1,2,3]));

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of
//  positive values found in the array. Example, countPositives([-1,1,1,1]) changes the original array to
//   [-1,1,1,3] and returns it.

function countPositives(arr){
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            count = count + 1;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}
console.log(countPositives([-1,1,2,3]));

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row,
//  print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function EvenOddPrints(arr){
    var count =0
}

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those 
// whose index is odd (arr[1], arr[3], arr[5], etc). 
//  Afterward, console.log each array value and return arr.

function  AddtoOdd(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            arr[i]= arr[i] +1;
           
            
        }
        console.log(arr[i]);
        
    }
    return arr;
}
console.log(AddtoOdd([2,5,7,8]));

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') 
// containing strings.  Working within that same array, replace each string with a number - the length of the 
// string at the previous array index - and return the array.  
// For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: 
// Can for loops only go forward?
function previousLengths(arr){
    for(var i=0;i<arr.length-1;i++){
        arr[i+1]=arr[i].length;
    }
    return arr;

}
console.log(previousLengths(["hello","dojo","awesome"]));


// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original,
//  but add 7 to each. Do not alter the original array. 
//  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(arr){
    var new_arr =[];
    for(var i=0;i<arr.length;i++){
        new_arr.push(arr[i]+7);
    }
    return new_arr;
}
console.log(addSeven([1,2,3]));

// Reverse Array - Given an array, write a function that reverses its values, in-place. Example: 
// reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so...[2,4,6,1,3].  Do this
//  without creating an empty temporary array.(Hint: you'll need to swap values).
// function reversed(arr){
//     for(var i=0;i<arr.length;i++){
//         var temp = arr[i];
//         arr[i] = arr[i+1]
//         arr[i+1] =temp;
        
//     }
//     return arr;
// }
// console.log(reversed([2,4,6,1,3]));

// Given an array, create and return a new one containing all the values of the original array, but make them 
// all
// //  negative (not simply multiplied by -1).
// //  Given [1,-3,5], return [-1,-3,-5].

// function Negative(arr){
//     var new_arr = [];
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             new_arr.push(arr[i]);

//         }
//     }
//     return new_arr;
// }
// console.log(Negative());

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is 
// equal to "food". If no array values are "food", then print "I'm hungry" once.
function Hungryfunc(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]=="food")
        console.log("Yummy");
        else{
            console.log("I'm Hungry");
        }
    }
}
Hungryfunc(["pizza","panda","burger"]);


// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num,
//  and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray(arr,num){
    for( var i=0;i<arr.length;i++){
        arr[i]=arr[i]*num;
    }
    return arr;
}
console.log(scaleArray([1,2,3],3));
