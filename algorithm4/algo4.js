// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterValue(arr,y){
    var count =0;
    for(var i = 0;i<arr.length;i++){
        if(arr[i]>y){
            count +=1;
        }
    }
    console.log(count)
}
greaterValue([4,5,6,7],3);

// Given an array, print the max, min and average values for that array.

function minmaxavg(arr){
    var max =arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i =0; i<arr.length;i++){
        if (max<arr[i]){
            max = arr[i];
        }
        if(min>arr[i]){
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log(max);
    console.log(min);
    var avg = sum/arr.length;
    console.log(avg);

}
minmaxavg([2,3,5,2]);

// Given an array of numbers, create a function that returns a new array where negative values were replaced with
//  the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5])should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]='Dojo';
        }
    }
    return arr;
}
b =replaceNegatives([1,2,-4,-3,5]);
console.log(b);

// Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array). 
//  For example, removeVals([20,30,40,50,60,70 ],2,4) should return [20,30,70].
function removeVals(arr,start,end){
    for(var i=0; i<arr.length;i++){

        

        if(i>start && i<=end){
            arr.pop(arr[i]);
        }
        
    }
    return arr;

}
var b=removeVals([20,30,40,50,60,70 ],2,4);
console.log(b);


